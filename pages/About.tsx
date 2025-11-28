import React from 'react';
import { Target, Heart, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="relative h-80 bg-sairam-900 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/600?grayscale&blur=2')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Sairam University</h1>
          <p className="text-xl text-emerald-300 font-medium">Legacy of 25+ Years in Education</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-4">Sairam in Focus</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Sairam University stands as a beacon of quality education, research, and innovation. Established with a vision to build a better nation through education, we have evolved into a multidisciplinary global university.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Our campus is a melting pot of cultures, ideas, and ambitions. With state-of-the-art infrastructure and a curriculum aligned with industry 4.0, we prepare students not just for jobs, but for life.
            </p>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-emerald-500 rounded-2xl transform rotate-3 translate-x-2 translate-y-2 opacity-20"></div>
            <img src="https://picsum.photos/600/400?random=100" alt="Campus View" className="relative rounded-2xl shadow-xl w-full object-cover" />
          </div>
        </div>

        {/* Vision Mission Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-500 hover:shadow-xl transition group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Eye size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Vision</h3>
            <p className="text-slate-600">
              To emerge as a "Centre of Excellence" offering Technical Education and Research opportunities of very high standards to students, develop the total personality of the individual, and instill high levels of discipline and leadership qualities.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-emerald-500 hover:shadow-xl transition group">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Mission</h3>
            <p className="text-slate-600">
              We dedicate and commit ourselves to achieve, sustain and foster unmatched excellence in Technical Education. To this end, we will pursue continuous development of infrastructure and enhance state-of-the-art equipment.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-red-500 hover:shadow-xl transition group">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Core Values</h3>
            <p className="text-slate-600">
              Truth • Love • Peace.<br/>
              We believe in holistic development where character building is as important as academic excellence.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src={`https://picsum.photos/300/300?random=${20+i}`} alt="Leader" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Dr. Name Placeholder</h3>
                <p className="text-emerald-600 font-medium mb-2">{i === 1 ? 'Founder Chairman' : i === 2 ? 'Chancellor' : 'Vice Chancellor'}</p>
                <p className="text-slate-500 text-sm px-4">"Education is the most powerful weapon which you can use to change the world."</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;