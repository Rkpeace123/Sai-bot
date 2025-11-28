import React from 'react';
import { Microscope, FileText, Award, Zap } from 'lucide-react';
import { RESEARCH_PROJECTS } from '../constants';

const Research: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-2 block">Innovation Hub</span>
            <h1 className="text-5xl font-bold mb-6">Research & Development</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Pushing the boundaries of knowledge. Our research ecosystem fosters innovation across disciplines, from AI to sustainable energy.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 -mt-24 relative z-20">
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-emerald-500">
            <div className="text-4xl font-bold text-slate-900 mb-1">50+</div>
            <div className="text-slate-500 text-sm font-medium">Patents Filed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-blue-500">
            <div className="text-4xl font-bold text-slate-900 mb-1">200+</div>
            <div className="text-slate-500 text-sm font-medium">Publications/Year</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-purple-500">
            <div className="text-4xl font-bold text-slate-900 mb-1">₹ 15Cr</div>
            <div className="text-slate-500 text-sm font-medium">Funded Projects</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-orange-500">
            <div className="text-4xl font-bold text-slate-900 mb-1">12</div>
            <div className="text-slate-500 text-sm font-medium">Research Centres</div>
          </div>
        </div>

        {/* Funded Projects */}
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
          <Zap className="w-6 h-6 mr-2 text-yellow-500" />
          Ongoing Funded Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {RESEARCH_PROJECTS.map((project, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">{project.agency}</span>
                <span className="text-slate-400 text-xs">{project.status}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-500 text-sm mb-4">Principal Investigator: <span className="text-slate-700 font-medium">{project.pi}</span></p>
              <div className="pt-4 border-t border-slate-50 text-emerald-600 font-bold">
                {project.amount}
              </div>
            </div>
          ))}
        </div>

        {/* Research Centres */}
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
          <Microscope className="w-6 h-6 mr-2 text-blue-500" />
          Centres of Excellence
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-2xl h-64 shadow-md cursor-pointer">
            <img src="https://picsum.photos/600/400?random=50" alt="AI Lab" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold mb-1">Centre for AI & Robotics</h3>
              <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition transform translate-y-4 group-hover:translate-y-0">Advanced research in collaborative robotics and computer vision.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl h-64 shadow-md cursor-pointer">
            <img src="https://picsum.photos/600/400?random=51" alt="IoT Lab" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold mb-1">IoT & Smart Cities</h3>
              <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition transform translate-y-4 group-hover:translate-y-0">Developing sustainable solutions for urban infrastructure.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Research;