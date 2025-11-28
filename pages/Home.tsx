import React from 'react';
import { ArrowRight, ChevronRight, Play, Globe, Award, BookOpen, Users, Star, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_STATS, LATEST_NEWS, ALUMNI_DATA } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-gold-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-sairam-900 overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-sairam-900 via-sairam-900/80 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
            alt="University Campus" 
            className="w-full h-full object-cover animate-float scale-105 opacity-60"
            style={{ animationDuration: '30s' }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 pt-20">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 mb-8 hover:bg-white/10 transition cursor-pointer group">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              <span className="text-gold-200 text-xs font-bold tracking-[0.2em] uppercase">Admissions 2025-26</span>
              <ArrowRight className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Shape the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 italic pr-4">Future</span>
              Today
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-light border-l-2 border-gold-500 pl-6">
              Sairam University blends tradition with innovation, empowering the next generation of global leaders through world-class research and education.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/admissions" className="px-8 py-4 bg-white text-sairam-900 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-gold-500 hover:text-white transition shadow-2xl hover:-translate-y-1 duration-300 flex items-center justify-center min-w-[180px]">
                Apply Now
              </Link>
              <Link to="/campus" className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition flex items-center justify-center group min-w-[180px]">
                <Play className="w-4 h-4 mr-3 fill-white group-hover:scale-110 transition" />
                Virtual Tour
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-white/50">
          <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Stats Ribbon - Overlapping */}
      <section className="relative z-30 -mt-20 mx-4 lg:mx-20">
        <div className="bg-white shadow-2xl rounded-xl border-t-4 border-gold-500 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-slate-100">
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className="p-8 text-center group hover:bg-slate-50 transition duration-300">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-slate-400 group-hover:text-gold-600 transition" />
                <div className="text-3xl md:text-4xl font-serif font-bold text-sairam-900 mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
             <div className="lg:col-span-5 relative animate-slide-in-right order-2 lg:order-1">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-dots-pattern opacity-20"></div>
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" alt="Library" className="w-full h-auto object-cover hover:scale-105 transition duration-700" />
                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                      <p className="text-white font-serif italic text-lg">"The roots of education are bitter, but the fruit is sweet."</p>
                   </div>
                </div>
                <div className="absolute -bottom-10 -right-10 bg-gold-500 p-8 rounded-lg shadow-xl max-w-xs z-20 hidden md:block text-white">
                   <p className="font-serif text-3xl font-bold mb-1">#1</p>
                   <p className="text-white/90 text-sm font-medium">Ranked Private University in Innovation (ARIIA 2024)</p>
                </div>
             </div>
             <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="text-gold-600 font-bold tracking-widest uppercase text-xs mb-4 block">Academic Excellence</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-sairam-900 mb-8 leading-tight">
                   Where Tradition Meets <br/><span className="italic text-slate-500">Innovation</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light">
                   At Sairam, we believe that true education extends beyond the classroom. Our interdisciplinary approach combines rigorous academics with real-world application, fostering an environment where students don't just learn—they create.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                   {[
                      { title: "Interdisciplinary Research", desc: "Crossing boundaries to solve complex global problems." },
                      { title: "Global Perspective", desc: "Partnerships with 150+ universities worldwide." },
                      { title: "Entrepreneurial Spirit", desc: "Incubating 50+ student startups annually." },
                      { title: "Social Responsibility", desc: "Committed to sustainable development goals." }
                   ].map((item, i) => (
                      <div key={i} className="flex items-start">
                         <div className="w-2 h-2 mt-2 rounded-full bg-gold-500 mr-4 shrink-0"></div>
                         <div>
                            <h4 className="font-bold text-sairam-900 text-lg">{item.title}</h4>
                            <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>

                <Link to="/academics" className="inline-flex items-center text-sairam-900 font-bold border-b-2 border-sairam-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition group">
                   Explore our Programs <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Research Parallax */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop')] bg-fixed bg-cover opacity-10"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/80"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div className="max-w-2xl">
                  <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-3 block">Research Frontiers</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold">Pioneering the Unknown</h2>
               </div>
               <Link to="/research" className="hidden md:flex items-center px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-sairam-900 transition text-sm font-bold">
                  View All Projects <ArrowRight size={16} className="ml-2" />
               </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { title: "Artificial Intelligence", desc: "Developing ethical AI frameworks for next-gen healthcare.", icon: Award, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" },
                  { title: "Green Energy", desc: "Breakthroughs in solar efficiency and battery storage.", icon: Globe, image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop" },
                  { title: "Urban Dynamics", desc: "Smart city planning for a sustainable future.", icon: Users, image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1000&auto=format&fit=crop" },
               ].map((item, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-xl h-96 cursor-pointer">
                     <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition duration-500 group-hover:opacity-80"></div>
                     <div className="absolute bottom-0 left-0 p-8 transform transition duration-500 translate-y-4 group-hover:translate-y-0">
                        <item.icon className="w-10 h-10 text-gold-500 mb-4" />
                        <h3 className="text-2xl font-bold mb-2 font-serif text-white">{item.title}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition delay-100 duration-500">{item.desc}</p>
                        <span className="text-gold-400 text-xs font-bold uppercase tracking-widest flex items-center opacity-0 group-hover:opacity-100 transition delay-200">
                           Learn More <ChevronRight size={14} className="ml-1" />
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* News & Campus Life */}
      <section className="py-32 bg-slate-50">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-serif font-bold text-sairam-900 mb-4">Campus Chronicles</h2>
               <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
               {LATEST_NEWS.map((item) => (
                  <article key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 border border-slate-100 flex flex-col h-full">
                     <div className="relative h-60 overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-sairam-900 text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm">
                           {item.category}
                        </div>
                     </div>
                     <div className="p-8 flex flex-col flex-1">
                        <div className="text-gold-600 text-xs font-bold mb-3 uppercase tracking-wide">{item.date}</div>
                        <h3 className="text-xl font-bold text-sairam-900 group-hover:text-gold-600 transition leading-snug mb-4 font-serif flex-1">
                           {item.title}
                        </h3>
                        <Link to="#" className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-sairam-900 transition uppercase tracking-widest mt-auto">
                           Read Story <ArrowRight size={14} className="ml-2" />
                        </Link>
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>

      {/* Alumni Spotlight */}
      <section className="py-32 bg-white border-t border-slate-100">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <span className="text-gold-600 font-bold tracking-widest uppercase text-xs mb-4 block">Alumni Network</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-sairam-900 mb-8">
                     Global Leaders,<br/>Sairam Roots.
                  </h2>
                  <p className="text-slate-600 text-lg mb-8 font-light">
                     Our 50,000+ alumni are leading change across 120 countries. From tech CEOs to social entrepreneurs, the Sairam legacy continues to grow.
                  </p>
                  <div className="flex space-x-4">
                     <button className="px-6 py-3 bg-sairam-900 text-white rounded font-bold text-sm hover:bg-sairam-800 transition">Connect with Alumni</button>
                  </div>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {ALUMNI_DATA.map((alum, i) => (
                     <div key={i} className="text-center group bg-slate-50 p-6 rounded-xl hover:bg-white hover:shadow-xl transition border border-transparent hover:border-slate-100">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gold-500/30 mb-4 relative">
                           <img src={alum.image} alt={alum.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                        </div>
                        <h3 className="text-lg font-bold font-serif text-sairam-900 mb-1">{alum.name}</h3>
                        <p className="text-gold-600 text-xs font-bold uppercase tracking-wide mb-1">{alum.role}</p>
                        <p className="text-slate-400 text-xs">Class of {alum.batch}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;