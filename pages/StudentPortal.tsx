import React from 'react';
import { LayoutDashboard, BookOpen, Calendar, CreditCard, User, LogOut, FileText, Bell, Bus } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentPortal: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-sairam-900 text-slate-300 hidden md:flex flex-col">
        <div className="p-6 border-b border-sairam-800">
           <span className="text-white font-bold text-xl">My Sairam</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <NavItem active icon={LayoutDashboard} label="Dashboard" />
          <NavItem icon={BookOpen} label="Academics & Marks" />
          <NavItem icon={Calendar} label="Timetable" />
          <NavItem icon={Bus} label="Transport Info" />
          <NavItem icon={CreditCard} label="Fee Payments" />
          <NavItem icon={FileText} label="Certificates" />
        </nav>
        <div className="p-4 border-t border-sairam-800">
          <button className="flex items-center text-sm hover:text-white transition w-full p-2">
            <LogOut size={16} className="mr-3" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-slate-200 p-4 flex justify-between items-center">
          <div className="flex items-center md:hidden">
             <span className="font-bold text-sairam-900">My Sairam</span>
          </div>
          <h2 className="text-xl font-bold text-slate-800 hidden md:block">Welcome back, John!</h2>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold border border-emerald-200">JD</div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Attendance Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-slate-700">Attendance</h3>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Good</span>
              </div>
              <div className="flex items-center">
                 <div className="text-4xl font-bold text-sairam-900 mr-2">87%</div>
                 <span className="text-sm text-slate-500">Overall</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 mt-4">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>

             {/* Fee Due Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-slate-700">Fee Due</h3>
                <Link to="/pay-fees" className="text-xs font-bold text-blue-600 hover:underline">Pay Now</Link>
              </div>
              <div className="text-2xl font-bold text-slate-900">₹ 85,000</div>
              <p className="text-xs text-red-500 mt-1">Due by 15 Nov 2023</p>
            </div>

            {/* Upcoming Exam */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-slate-700">Next Exam</h3>
                <span className="text-xs text-slate-500">Internal II</span>
              </div>
              <div className="text-lg font-bold text-slate-900">Computer Networks</div>
              <div className="flex items-center text-sm text-slate-500 mt-2">
                <Calendar size={14} className="mr-1" />
                <span>Tomorrow, 09:30 AM</span>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Announcements</h3>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mb-8">
            <div className="divide-y divide-slate-100">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="p-4 hover:bg-slate-50 transition flex items-start">
                   <div className="bg-blue-50 text-blue-600 p-2 rounded mr-4">
                     <FileText size={20} />
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-slate-800">Semester Exam Schedule Released</h4>
                     <p className="text-xs text-slate-500 mt-1">The timetable for Nov/Dec 2023 examinations has been published by CoE.</p>
                     <span className="text-[10px] text-slate-400 mt-2 block">2 hours ago</span>
                   </div>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <button className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition ${active ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'text-slate-400 hover:bg-sairam-800 hover:text-white'}`}>
    <Icon size={18} className="mr-3" />
    {label}
  </button>
);

export default StudentPortal;
