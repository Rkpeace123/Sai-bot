
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, CreditCard, Bus, Search, GraduationCap } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
          <Link to="/admissions" className="hover:text-gold-400 cursor-pointer transition">Admissions Open 2025</Link>
          <span className="text-slate-700">|</span>
          <Link to="/events" className="hover:text-gold-400 cursor-pointer transition">News & Events</Link>
          <span className="text-slate-700">|</span>
          <Link to="/research" className="hover:text-gold-400 cursor-pointer transition">Research</Link>
        </div>
        <div className="flex space-x-6">
          <Link to="/login?role=alumni" className="hover:text-white transition">Alumni</Link>
          <Link to="/login?role=parent" className="hover:text-white transition">Parents</Link>
          <Link to="/login?role=faculty" className="hover:text-white transition">Faculty</Link>
          <Link to="/contact" className="text-gold-500 hover:text-gold-400 transition ml-2 font-bold flex items-center">
             Give to Sairam <span className="ml-1 text-xs">→</span>
          </Link>
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

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-slate-400 hover:text-gold-500 transition">
                <Search size={20} />
              </button>
              <Link to="/login" className="flex items-center space-x-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-sairam-900 rounded-full transition border border-slate-200 group">
                <User size={16} className="text-slate-400 group-hover:text-sairam-900" />
                <span className="text-xs font-bold uppercase tracking-wide">Portal Login</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="xl:hidden p-2 text-sairam-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
          <div className="fixed inset-0 z-40 bg-white pt-24 overflow-y-auto">
            <div className="container mx-auto px-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link 
                    to={item.href} 
                    className="block text-xl font-bold text-sairam-900 py-3 border-b border-slate-50"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 mt-2 space-y-2 mb-4 border-l-2 border-slate-100">
                      {item.children.map(child => (
                        <Link key={child.label} to={child.href} className="block text-slate-500 py-2 hover:text-gold-600">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-6 mt-6 border-t border-slate-100 grid grid-cols-2 gap-4 pb-12">
                 <Link to="/login?role=student" className="flex flex-col items-center justify-center p-4 bg-emerald-50 rounded-lg text-center border border-emerald-100">
                    <User size={24} className="mb-2 text-emerald-700" />
                    <span className="text-xs font-bold text-slate-700">Student Portal</span>
                 </Link>
                 <Link to="/login?role=faculty" className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg text-center border border-blue-100">
                    <User size={24} className="mb-2 text-blue-700" />
                    <span className="text-xs font-bold text-slate-700">Staff Portal</span>
                 </Link>
                 <Link to="/pay-fees" className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg text-center">
                    <CreditCard size={24} className="mb-2 text-sairam-900" />
                    <span className="text-xs font-bold text-slate-600">Pay Fees</span>
                 </Link>
                 <Link to="/track-bus" className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg text-center">
                    <Bus size={24} className="mb-2 text-sairam-900" />
                    <span className="text-xs font-bold text-slate-600">Bus Tracking</span>
                 </Link>
                 <Link to="/admissions" className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg text-center">
                    <GraduationCap size={24} className="mb-2 text-sairam-900" />
                    <span className="text-xs font-bold text-slate-600">Admissions</span>
                 </Link>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Navbar;
