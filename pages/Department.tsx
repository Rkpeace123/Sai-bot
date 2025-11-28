import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DEPARTMENT_DATA } from '../constants';
import { Users, Book, Microscope, Calendar, CheckCircle } from 'lucide-react';

const Department: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  // In a real app, fetch data based on ID. Using mock constant for now.
  const dept = DEPARTMENT_DATA; 

  const renderContent = () => {
    switch(activeTab) {
      case 'faculty':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
            {dept.faculty.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center hover:shadow-xl transition group">
                <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden border-4 border-white shadow-md">
                   <img src={`https://picsum.photos/200/200?random=${100+i}`} alt={f.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <h3 className="font-bold text-lg text-sairam-900 font-serif">{f.name}</h3>
                <p className="text-gold-600 text-sm font-bold uppercase tracking-wide mt-1">{f.designation}</p>
                <p className="text-slate-500 text-sm mt-3">{f.area}</p>
                <button className="mt-4 text-xs font-bold text-sairam-700 border border-sairam-200 px-4 py-2 rounded-full hover:bg-sairam-50 transition">View Profile</button>
              </div>
            ))}
          </div>
        );
      case 'labs':
        return (
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            {dept.labs.map((lab, i) => (
               <div key={i} className="flex items-start p-6 bg-white rounded-lg shadow-sm border border-slate-100 hover:border-gold-300 transition group">
                  <div className="w-12 h-12 bg-sairam-50 text-sairam-700 rounded-lg flex items-center justify-center mr-5 shrink-0 group-hover:bg-sairam-700 group-hover:text-gold-400 transition">
                    <Microscope size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-sairam-900 mb-2 font-serif">{lab}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Equipped with the latest hardware and software for advanced research and practical learning.</p>
                  </div>
               </div>
            ))}
          </div>
        );
      case 'curriculum':
         return (
           <div className="bg-white p-10 rounded-lg shadow-sm border border-slate-100 animate-fade-in">
             <h3 className="font-serif font-bold text-2xl text-sairam-900 mb-8 border-b border-slate-100 pb-4">Bachelor of Engineering Structure</h3>
             <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                  <div key={sem} className="flex items-center justify-between p-4 bg-slate-50 rounded border border-slate-100 hover:bg-white hover:shadow-md transition">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-sairam-200 text-sairam-800 flex items-center justify-center font-bold text-sm mr-4">{sem}</div>
                        <span className="font-medium text-slate-700">Semester {sem}</span>
                    </div>
                    <button className="text-gold-600 text-sm font-bold hover:underline">Download PDF</button>
                  </div>
                ))}
             </div>
           </div>
         );
      default: // overview
        return (
          <div className="grid lg:grid-cols-3 gap-12 animate-fade-in">
             <div className="lg:col-span-2 space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-gold-500">
                    <h3 className="text-2xl font-serif font-bold text-sairam-900 mb-4">Department Overview</h3>
                    <p className="text-slate-600 leading-loose text-lg font-light">
                      {dept.description} Our curriculum is rigorously updated to meet the demands of the fourth industrial revolution. We emphasize not just technical proficiency, but ethical responsibility and creative problem-solving.
                    </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                   <div className="bg-sairam-50 p-6 rounded-lg">
                       <h4 className="font-bold text-sairam-900 mb-3 flex items-center"><CheckCircle size={16} className="text-gold-500 mr-2"/> Accreditation</h4>
                       <p className="text-sm text-slate-600">NBA Accredited for 6 years. NAAC A++ Grade.</p>
                   </div>
                   <div className="bg-sairam-50 p-6 rounded-lg">
                       <h4 className="font-bold text-sairam-900 mb-3 flex items-center"><CheckCircle size={16} className="text-gold-500 mr-2"/> Research Focus</h4>
                       <p className="text-sm text-slate-600">AI, Blockchain, Cyber-Physical Systems.</p>
                   </div>
                </div>
             </div>
             
             <div className="space-y-4">
               {dept.stats.map((stat, i) => (
                 <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition duration-300">
                    <div className="text-4xl font-serif font-bold text-sairam-800 mb-1">{stat.value}</div>
                    <div className="text-gold-600 text-xs uppercase font-bold tracking-widest">{stat.label}</div>
                 </div>
               ))}
               <div className="bg-sairam-900 text-white p-8 rounded-lg text-center mt-8">
                  <h4 className="font-serif font-bold text-xl mb-4">Admissions Open</h4>
                  <p className="text-slate-300 text-sm mb-6">Apply now for the upcoming academic year.</p>
                  <button className="w-full py-3 bg-gold-500 text-sairam-900 font-bold rounded hover:bg-gold-400 transition">Apply Now</button>
               </div>
             </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-sairam-900 text-white pt-32 pb-40 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/600?grayscale&blur=4')] bg-cover opacity-20"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
           <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4 inline-block">Department of</span>
           <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{dept.name}</h1>
           <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">{dept.tagline}</p>
         </div>
      </div>

      <div className="container mx-auto px-4 -mt-24 relative z-20 pb-20">
        
        {/* Tabs */}
        <div className="bg-white rounded-t-lg shadow-md border-b border-slate-100 flex overflow-x-auto hide-scrollbar justify-center">
          {[
            { id: 'overview', label: 'Overview', icon: Users },
            { id: 'faculty', label: 'Faculty', icon: Users },
            { id: 'labs', label: 'Laboratories', icon: Microscope },
            { id: 'curriculum', label: 'Curriculum', icon: Book },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-8 py-6 text-sm font-bold border-b-4 transition whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'border-gold-500 text-sairam-900 bg-slate-50' 
                  : 'border-transparent text-slate-500 hover:text-sairam-800'
              }`}
            >
              <tab.icon size={18} className={`mr-2 ${activeTab === tab.id ? 'text-gold-500' : ''}`} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="mt-12">
          {renderContent()}
        </div>

      </div>
    </div>
  );
};

export default Department;