import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-12">Get in Touch</h1>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 shrink-0 mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Campus Address</h3>
                      <p className="text-slate-600 mt-1">
                        Sairam University,<br/>
                        Sai Leo Nagar, West Tambaram,<br/>
                        Chennai - 600 044, Tamil Nadu, India.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0 mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Phone</h3>
                      <p className="text-slate-600 mt-1">+91 44 2251 2222 (General)</p>
                      <p className="text-slate-600">+91 44 2251 2223 (Admissions)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 shrink-0 mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Email</h3>
                      <p className="text-slate-600 mt-1">info@sairam.edu.in</p>
                      <p className="text-slate-600">admissions@sairam.edu.in</p>
                    </div>
                  </div>
                </div>
             </div>

             <div className="h-64 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
               {/* Map Placeholder */}
               <div className="w-full h-full bg-slate-200 flex items-center justify-center relative">
                  <img src="https://picsum.photos/800/400?grayscale&blur=2" alt="Map Background" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                  <div className="relative z-10 bg-white p-4 rounded-xl shadow-lg flex items-center animate-bounce">
                    <MapPin className="text-red-500 mr-2" fill="currentColor" />
                    <span className="font-bold text-slate-900">We are here</span>
                  </div>
               </div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-slate-600">
                  <option>General Enquiry</option>
                  <option>Admissions</option>
                  <option>Transport</option>
                  <option>Hostel</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-sairam-800 text-white font-bold rounded-lg hover:bg-sairam-900 transition shadow-lg">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;