import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, CreditCard, Bus, Search, GraduationCap } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar - Ivy League Style */}
      <div className="bg-sairam-900 text-slate-300 text-[11px] font-medium py-2 px-6 hidden lg:flex justify-between items-center tracking-widest uppercase border-b border-white/5">
        <div className="flex space-x-6">
          <span className="hover:text-gold-400 cursor-pointer transition">Admissions Open 2025</span>
          <span className="text-slate-700">|</span>
          <span className="hover:text-gold-400 cursor-pointer transition">News & Events</span>
          <span className="text-slate-700">|</span>
          <span className="hover:text-gold-400 cursor-pointer transition">Research</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition">Alumni</a>
          <a href="#" className="hover:text-white transition">Parents</a>
          <a href="#" className="hover:text-white transition">Faculty</a>
          <a href="#" className="text-gold-500 hover:text-gold-400 transition ml-2 font-bold flex items-center">
             Give to Sairam <span className="ml-1 text-xs">→</span>
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white py-5 shadow-sm border-b border-slate-100'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            
            {/* Prestigious Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12">
                 {/* University Shield SVG */}
                 <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
                    {/* Shield Base */}
                    <path d="M50 115 C20 95 5 70 5 40 L5 10 L50 0 L95 10 L95 40 C95 70 80 95 50 115 Z" fill="#0f172a" stroke="#d4af37" strokeWidth="2"/>
                    {/* Inner Shield */}
                    <path d="M50 108 C28 90 12 68 12 42 L12 18 L50 10 L88 18 L88 42 C88 68 72 90 50 108 Z" fill="#1e293b"/>
                    {/* Quadrants */}
                    <path d="M50 10 L50 108" stroke="#d4af37" strokeWidth="1"/>
                    <path d="M12 42 L88 42" stroke="#d4af37" strokeWidth="1"/>
                    {/* Symbols in Quadrants (Abstract) */}
                    <circle cx="30" cy="30" r="5" fill="#d4af37" />
                    <rect x="65" y="25" width="10" height="10" fill="#d4af37" />
                    <path d="M25 65 L35 85 L25 85 Z" fill="#d4af37" />
                    {/* Book Top */}
                    <path d="M35 15 Q50 20 65 15" stroke="white" strokeWidth="2" fill="none"/>
                 </svg>
              </div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold text-2xl tracking-tight leading-none text-sairam-900 group-hover:text-sairam-700 transition`}>
                  SAIRAM
                </span>
                <div className="flex items-center space-x-2">
                   <span className="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase">University</span>
                   <span className="w-1 h-1 rounded-full bg-gold-500"></span>
                   <span className="text-[9px] font-serif italic text-slate-400">Est. 1995</span>
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden xl:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative group px-3 py-2">
                  <NavLink 
                    to={item.href} 
                    className={({ isActive }) => 
                      `text-[13px] font-bold tracking-wide uppercase transition flex items-center
                      ${isActive ? 'text-sairam-800' : 'text-slate-500 hover:text-sairam-900'}
                      `
                    }
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3 h-3 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />}
                  </NavLink>

                  {/* Hover Underline Animation */}
                  <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-[calc(100%-24px)]"></span>

                  {/* Mega Menu Dropdown */}
                  {item.children && (
                    <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl rounded-b-lg border-t-2 border-gold-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link 
                            key={child.label} 
                            to={child.href}
                            className="block px-6 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-sairam-900 hover:pl-7 transition-all duration-200 border-l-2 border-transparent hover:border-gold-500"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Quick Actions (Desktop) */}
            <div className="hidden lg:flex items-center space-x-5">
               <button className="text-slate-400 hover:text-sairam-900 transition">
                 <Search size={18} />
               </button>
               <div className="h-8 w-px bg-slate-200"></div>
               
               <div className="flex items-center space-x-3">
                 <button onClick={() => navigate('/track-bus')} title="Track Bus" className="p-2 text-slate-500 hover:text-gold-600 transition hover:bg-slate-50 rounded-full">
                  <Bus size={20} />
                </button>
                <button onClick={() => navigate('/portal')} className="text-xs font-bold uppercase tracking-wider text-sairam-900 hover:text-gold-600 transition flex items-center bg-slate-100 px-3 py-2 rounded">
                  <User size={14} className="mr-2" /> Login
                </button>
                <button onClick={() => navigate('/admissions')} className="px-5 py-2.5 bg-sairam-900 text-white text-xs font-bold uppercase tracking-widest rounded shadow-lg shadow-sairam-900/10 hover:bg-gold-500 hover:text-sairam-900 transition duration-300 transform hover:-translate-y-0.5">
                  Apply Now
                </button>
               </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-sairam-900 hover:bg-slate-50 rounded-lg transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
            <div className="pt-24 pb-10 px-6">
              <div className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="border-b border-slate-50 pb-2">
                    <NavLink 
                      to={item.href} 
                      className={({isActive}) => `text-xl font-serif font-bold block py-3 ${isActive ? 'text-sairam-900' : 'text-slate-500'}`}
                      onClick={() => !item.children && setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                    {item.children && (
                      <div className="pl-4 space-y-2 mb-4 border-l-2 border-gold-200 ml-2">
                        {item.children.map((child) => (
                          <Link 
                            key={child.label} 
                            to={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-slate-600 py-2"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <button onClick={() => {navigate('/track-bus'); setIsOpen(false);}} className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-800 active:scale-95 transition">
                    <Bus className="mb-2 w-6 h-6 text-gold-500" /> Track Bus
                  </button>
                  <button onClick={() => {navigate('/pay-fees'); setIsOpen(false);}} className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-800 active:scale-95 transition">
                    <CreditCard className="mb-2 w-6 h-6 text-gold-500" /> Pay Fees
                  </button>
                  <button onClick={() => {navigate('/portal'); setIsOpen(false);}} className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-800 active:scale-95 transition">
                    <GraduationCap className="mb-2 w-6 h-6 text-gold-500" /> Student Portal
                  </button>
                </div>
                
                <button onClick={() => {navigate('/admissions'); setIsOpen(false);}} className="w-full mt-6 py-4 bg-sairam-900 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl">
                  Apply for 2025
                </button>
              </div>
            </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;