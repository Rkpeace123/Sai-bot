import React from 'react';
import { FACILITIES } from '../constants';
import { MapPin } from 'lucide-react';

const Campus: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Video Hero Placeholder */}
      <div className="relative h-[500px] bg-slate-900 flex items-center justify-center overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          autoPlay muted loop playsInline
          poster="https://picsum.photos/1920/1080?random=99"
        >
            {/* Fallback to image if no video */}
            <source src="" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Life @ Sairam</h1>
          <p className="text-xl md:text-2xl text-slate-200">A vibrant ecosystem of learning and living.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">World Class Infrastructure</h2>
          <p className="text-slate-600 text-lg">
            Spread over 300 acres, our eco-friendly campus provides the perfect environment for holistic development. From smart classrooms to advanced sports facilities, we have it all.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-24">
          {FACILITIES.map((facility, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-slate-100 cursor-pointer group">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition">
                <facility.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{facility.name}</h3>
              <p className="text-sm text-slate-500">{facility.desc}</p>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Campus Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
            <img src="https://picsum.photos/800/800?random=1" alt="Campus 1" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
              <p className="text-white font-bold text-lg">Main Block</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <img src="https://picsum.photos/400/400?random=2" alt="Campus 2" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <img src="https://picsum.photos/400/400?random=3" alt="Campus 3" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
          </div>
          <div className="col-span-2 relative rounded-2xl overflow-hidden group">
            <img src="https://picsum.photos/800/400?random=4" alt="Campus 4" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
             <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
              <p className="text-white font-bold text-lg">Auditorium</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Campus;