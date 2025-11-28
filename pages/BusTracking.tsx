import React, { useState, useEffect, useRef } from 'react';
import { BUS_ROUTES } from '../constants';
import { BusRoute } from '../types';
import { MapPin, Phone, User, Clock, Navigation, Search, Menu } from 'lucide-react';
import * as L from 'leaflet';

const BusTracking: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<BusRoute>(BUS_ROUTES[0]);
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markerInstance = useRef<L.Marker | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize Map only if it doesn't exist
    if (!mapInstance.current) {
      mapInstance.current = L.map(mapContainer.current, {
        zoomControl: false // We can add custom controls if needed
      }).setView([12.9716, 80.2436], 12);
      
      // Use OpenStreetMap tiles with a cleaner look (CartoDB Positron) for a "premium" feel
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(mapInstance.current);

      // Add Zoom Control to bottom right
      L.control.zoom({ position: 'bottomright' }).addTo(mapInstance.current);

      // Initialize Marker
      const busIcon = L.divIcon({
        className: 'custom-bus-marker',
        html: `<div style="background-color: #d4af37; width: 36px; height: 36px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; position: relative;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4.34a3 3 0 0 0-2.91 2.27l-1.07 4.27c-.24.959-.24 1.962 0 2.92L1 17h2"/><path d="M14 17H9"/><circle cx="6.5" cy="17.5" r="2.5"/><circle cx="18.5" cy="17.5" r="2.5"/></svg>
                <div style="position: absolute; bottom: -5px; width: 8px; height: 8px; background: #10b981; border-radius: 50%; border: 2px solid white;"></div>
               </div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -20]
      });

      markerInstance.current = L.marker([selectedRoute.coordinates.lat, selectedRoute.coordinates.lng], { icon: busIcon })
        .addTo(mapInstance.current)
        .bindPopup(`
          <div style="font-family: 'Inter', sans-serif; padding: 5px;">
            <div style="font-weight: bold; color: #0f172a; font-size: 14px;">${selectedRoute.routeNumber}</div>
            <div style="font-size: 12px; color: #64748b;">Heading to ${selectedRoute.nextStop}</div>
            <div style="font-size: 11px; font-weight: bold; color: #d4af37; margin-top: 4px;">ETA: ${selectedRoute.eta}</div>
          </div>
        `);
    }

    // Cleanup on unmount
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
        markerInstance.current = null;
      }
    };
  }, []);

  // Update marker position when route changes
  useEffect(() => {
    if (mapInstance.current && markerInstance.current) {
       const { lat, lng } = selectedRoute.coordinates;
       const newLatLng = new L.LatLng(lat, lng);
       markerInstance.current.setLatLng(newLatLng);
       mapInstance.current.flyTo(newLatLng, 14, { duration: 1.5, easeLinearity: 0.25 });
       markerInstance.current.setPopupContent(`
          <div style="font-family: 'Inter', sans-serif; min-width: 120px;">
            <div style="font-weight: bold; color: #0f172a; font-size: 16px; margin-bottom: 2px;">${selectedRoute.routeNumber}</div>
            <div style="font-size: 12px; color: #64748b;">Next Stop: ${selectedRoute.nextStop}</div>
            <div style="display: flex; justify-content: space-between; margin-top: 8px; align-items: center;">
              <span style="font-size: 11px; font-weight: 700; color: #fff; background: #10b981; padding: 2px 6px; border-radius: 4px;">${selectedRoute.status}</span>
              <span style="font-size: 12px; font-weight: bold; color: #d4af37;">${selectedRoute.eta}</span>
            </div>
          </div>
       `).openPopup();
    }
  }, [selectedRoute]);

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm z-20 flex justify-between items-center">
        <div className="flex items-center">
           <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="mr-4 text-slate-500 hover:text-sairam-900 md:hidden">
             <Menu size={24} />
           </button>
           <h1 className="text-xl font-bold font-serif text-sairam-900 flex items-center">
             <Navigation className="w-6 h-6 mr-3 text-gold-500" />
             Transport Command Center
           </h1>
        </div>
        <div className="hidden md:flex space-x-6 text-xs font-bold uppercase tracking-wide">
           <div className="flex items-center bg-green-50 px-3 py-1 rounded-full text-green-700 border border-green-100">
             <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span> 
             System Active
           </div>
           <div className="flex items-center text-slate-500 border-l border-slate-200 pl-6">
             Total Buses: <span className="text-sairam-900 ml-2 text-sm">45</span>
           </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Sidebar List - Responsive */}
        <div className={`
            absolute md:relative inset-y-0 left-0 w-80 bg-white border-r border-slate-200 z-30 shadow-2xl md:shadow-none transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            flex flex-col
        `}>
          <div className="p-5 border-b border-slate-100 bg-white sticky top-0 z-10">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Find bus or route..." 
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:bg-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition shadow-sm"
              />
              <div className="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-gold-500 transition">
                 <Search size={18} />
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
            {BUS_ROUTES.map((route) => (
              <div 
                key={route.id} 
                onClick={() => { setSelectedRoute(route); if(window.innerWidth < 768) setSidebarOpen(false); }}
                className={`p-4 cursor-pointer rounded-xl transition-all duration-200 border border-transparent ${
                  selectedRoute.id === route.id 
                    ? 'bg-sairam-900 text-white shadow-lg shadow-sairam-900/20' 
                    : 'bg-white hover:bg-slate-50 text-slate-600 hover:border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-bold text-lg ${selectedRoute.id === route.id ? 'text-white' : 'text-sairam-900'}`}>
                    {route.routeNumber}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    selectedRoute.id === route.id ? 'bg-white/20 text-white' : 
                    route.status === 'On Time' ? 'bg-green-100 text-green-700' : 
                    route.status === 'Delayed' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {route.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs opacity-90">
                  <div className="flex items-center">
                    <Clock className={`w-3 h-3 mr-1.5 ${selectedRoute.id === route.id ? 'text-gold-400' : 'text-gold-600'}`} /> {route.eta}
                  </div>
                  <div className="flex items-center truncate">
                    <MapPin className={`w-3 h-3 mr-1.5 ${selectedRoute.id === route.id ? 'text-gold-400' : 'text-gold-600'}`} /> {route.nextStop}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Driver Profile Compact */}
          <div className="p-4 border-t border-slate-100 bg-slate-50">
             <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow flex items-center justify-center text-slate-500 font-bold text-xs">
                  DR
                </div>
                <div className="ml-3">
                   <p className="text-xs font-bold text-slate-500 uppercase">Assigned Driver</p>
                   <p className="text-sm font-bold text-sairam-900">{selectedRoute.driver}</p>
                </div>
                <button className="ml-auto p-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition">
                   <Phone size={16} />
                </button>
             </div>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 bg-slate-100 relative h-full">
          <div ref={mapContainer} className="w-full h-full z-0 outline-none" />

          {/* Floating Mobile Overlay Details */}
          <div className="absolute bottom-6 left-4 right-4 bg-white rounded-xl shadow-2xl p-4 md:hidden z-[400] border border-slate-100 animate-fade-in-up">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg text-sairam-900">{selectedRoute.routeNumber}</h3>
              <span className="text-xs font-bold bg-gold-100 text-gold-700 px-2 py-1 rounded">{selectedRoute.eta} away</span>
            </div>
            <p className="text-sm text-slate-500 flex items-center"><MapPin size={14} className="mr-1"/> Next: {selectedRoute.nextStop}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusTracking;