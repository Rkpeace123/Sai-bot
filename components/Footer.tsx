import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-sairam-900 font-bold">S</div>
              <span className="text-xl font-bold text-white">Sairam University</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Turning Ambitions into Achievements. We are committed to academic excellence, research, and holistic student development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-400 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/admissions" className="hover:text-emerald-400 transition">Online Registration</Link></li>
              <li><Link to="/pay-fees" className="hover:text-emerald-400 transition">Pay Fees</Link></li>
              <li><Link to="/track-bus" className="hover:text-emerald-400 transition">Track Bus</Link></li>
              <li><Link to="/academics" className="hover:text-emerald-400 transition">Academic Calendar</Link></li>
              <li><Link to="/portal" className="hover:text-emerald-400 transition">Student Portal</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-semibold mb-4">Schools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/academics" className="hover:text-emerald-400 transition">Computing & AI</Link></li>
              <li><Link to="/academics" className="hover:text-emerald-400 transition">Electronics & Electrical</Link></li>
              <li><Link to="/academics" className="hover:text-emerald-400 transition">Mechanical & Automation</Link></li>
              <li><Link to="/academics" className="hover:text-emerald-400 transition">Management Studies</Link></li>
              <li><Link to="/academics" className="hover:text-emerald-400 transition">Science & Humanities</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />
                <span>Sai Leo Nagar, West Tambaram,<br/>Chennai - 600 044.</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />
                <span>+91 44 2251 2222</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />
                <span>admissions@sairam.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sairam University. All Rights Reserved. | Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
