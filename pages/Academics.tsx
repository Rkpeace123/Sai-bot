import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Academics: React.FC = () => {
  const schools = [
    {
      name: 'School of Computing & AI',
      depts: [
        { name: 'Computer Science (CSE)', id: 'cse' },
        { name: 'Information Technology', id: 'it' },
        { name: 'Artificial Intelligence & DS', id: 'ai' },
        { name: 'Cyber Security', id: 'cs' }
      ],
      image: 'https://picsum.photos/400/200?random=10'
    },
    {
      name: 'School of Electronics & Electrical',
      depts: [
        { name: 'ECE', id: 'ece' },
        { name: 'EEE', id: 'eee' },
        { name: 'EIE', id: 'eie' },
        { name: 'ICE', id: 'ice' }
      ],
      image: 'https://picsum.photos/400/200?random=11'
    },
    {
      name: 'School of Mechanical',
      depts: [
        { name: 'Mechanical Engg', id: 'mech' },
        { name: 'Robotics & Automation', id: 'robotics' },
        { name: 'Mechatronics', id: 'mechatronics' }
      ],
      image: 'https://picsum.photos/400/200?random=12'
    },
    {
      name: 'School of Management',
      depts: [
        { name: 'MBA (Finance, HR, Marketing)', id: 'mba' },
        { name: 'MBA (Innovation & Entrepreneurship)', id: 'mba-ie' }
      ],
      image: 'https://picsum.photos/400/200?random=13'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="container mx-auto px-4 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Academic Schools</h1>
          <p className="text-slate-600 max-w-2xl">
            Our interdisciplinary curriculum is designed to foster innovation and practical problem solving. Explore our diverse schools and departments.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {schools.map((school, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition group animate-fade-in" style={{animationDelay: `${idx * 100}ms`}}>
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition z-10"></div>
                <img src={school.image} alt={school.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{school.name}</h3>
                <div className="space-y-3 mb-8">
                  {school.depts.map((dept, i) => (
                    <Link 
                      key={i} 
                      to={`/department/${dept.id}`}
                      className="flex items-center text-slate-600 text-sm border-b border-slate-50 pb-2 hover:text-emerald-600 transition"
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {dept.name}
                    </Link>
                  ))}
                </div>
                <Link to={`/department/cse`} className="text-emerald-600 font-semibold flex items-center hover:text-emerald-700 transition">
                  Explore School <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;