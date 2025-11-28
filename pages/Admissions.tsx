import React, { useState } from 'react';
import { Check, ChevronRight, Download } from 'lucide-react';

const Admissions: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Join the Future Makers</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Apply now for the academic year 2024-25. Complete the simple 3-step application process to begin your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Application Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              {/* Stepper */}
              <div className="bg-slate-50 border-b border-slate-200 px-8 py-4">
                <div className="flex items-center justify-between">
                  <div className={`flex items-center ${step >= 1 ? 'text-emerald-600' : 'text-slate-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2 ${step >= 1 ? 'bg-emerald-100' : 'bg-slate-200'}`}>1</div>
                    <span className="hidden sm:inline font-medium">Personal Info</span>
                  </div>
                  <div className="h-0.5 w-12 bg-slate-200"></div>
                  <div className={`flex items-center ${step >= 2 ? 'text-emerald-600' : 'text-slate-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2 ${step >= 2 ? 'bg-emerald-100' : 'bg-slate-200'}`}>2</div>
                    <span className="hidden sm:inline font-medium">Academic Info</span>
                  </div>
                  <div className="h-0.5 w-12 bg-slate-200"></div>
                  <div className={`flex items-center ${step >= 3 ? 'text-emerald-600' : 'text-slate-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2 ${step >= 3 ? 'bg-emerald-100' : 'bg-slate-200'}`}>3</div>
                    <span className="hidden sm:inline font-medium">Review & Submit</span>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-xl font-semibold text-slate-800">Personal Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number</label>
                        <input type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="+91 98765 43210" />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-xl font-semibold text-slate-800">Academic Interest</h3>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Course</label>
                      <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
                        <option>Select a program</option>
                        <option>B.E. Computer Science & Engineering</option>
                        <option>B.E. Electronics & Communication</option>
                        <option>B.Tech Artificial Intelligence & Data Science</option>
                        <option>MBA</option>
                      </select>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">HSC / 12th Board</label>
                        <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="State Board / CBSE" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Registration Number</label>
                        <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Upload Marksheet</label>
                      <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"/>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="text-center py-10 animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Almost Done!</h3>
                    <p className="text-slate-600 mb-8">
                      Please review your details. By clicking submit, you agree to our terms and conditions.
                      A counselor will contact you shortly.
                    </p>
                    <button className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-bold hover:bg-emerald-600 transition shadow-lg w-full md:w-auto">
                      Submit Application
                    </button>
                  </div>
                )}

                {/* Navigation Buttons */}
                {step < 3 && (
                  <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
                     {step > 1 ? (
                       <button onClick={() => setStep(step - 1)} className="text-slate-500 font-medium hover:text-slate-800 transition">Back</button>
                     ) : (
                       <div></div>
                     )}
                     <button 
                      onClick={() => setStep(step + 1)} 
                      className="px-6 py-2 bg-sairam-800 text-white rounded-lg font-medium hover:bg-sairam-900 transition flex items-center"
                     >
                       Next Step <ChevronRight size={16} className="ml-1" />
                     </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4">Need Help?</h4>
              <p className="text-sm text-slate-600 mb-4">
                Our admissions team is available Mon-Sat, 9 AM - 5 PM to assist you.
              </p>
              <div className="text-emerald-600 font-bold text-lg mb-1">+91 44 2251 2222</div>
              <div className="text-slate-500 text-sm">admissions@sairam.edu.in</div>
            </div>

            {/* Downloads */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4">Downloads</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center text-sm text-slate-600 hover:text-emerald-600 transition">
                    <Download size={16} className="mr-2" />
                    University Prospectus 2024
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-sm text-slate-600 hover:text-emerald-600 transition">
                    <Download size={16} className="mr-2" />
                    Fee Structure
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-sm text-slate-600 hover:text-emerald-600 transition">
                    <Download size={16} className="mr-2" />
                    Scholarship Form
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admissions;
