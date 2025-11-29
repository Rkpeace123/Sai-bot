
import React from 'react';
import { LayoutDashboard, Users, Calendar, FileText, Settings, LogOut, CheckSquare, Bell } from 'lucide-react';
import { MockDatabase } from '../constants';
import { useNavigate } from 'react-router-dom';

const FacultyPortal: React.FC = () => {
  const navigate = useNavigate();
  const user = MockDatabase.getCurrentUser();

  const handleLogout = () => {
    MockDatabase.logout();
    navigate('/login?role=faculty');
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
           <span className="text-white font-bold text-xl">Staff Portal</span>
           <p className="text-xs text-slate-500 mt-1">Sairam University</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <NavItem active icon={LayoutDashboard} label="Dashboard" />
          <NavItem icon={Users} label="My Students" />
          <NavItem icon={Calendar} label="Class Schedule" />
          <NavItem icon={CheckSquare} label="Attendance" />
          <NavItem icon={FileText} label="Exam Marks" />
          <NavItem icon={Settings} label="Settings" />
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button onClick={handleLogout} className="flex items-center text-sm hover:text-white transition w-full p-2 text-red-400">
            <LogOut size={16} className="mr-3" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm border-b border-slate-200 p-4 flex justify-between items-center sticky top-0 z-20">
          <div className="flex items-center md:hidden">
             <span className="font-bold text-slate-900">Staff Portal</span>
          </div>
          <h2 className="text-xl font-bold text-slate-800 hidden md:block">Welcome, Dr. Sarah Smith</h2>
          <div className="flex items-center space-x-4">
             <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold border border-blue-200">
                SS
            </div>
          </div>
        </header>

        <div className="p-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-slate-500 text-xs font-bold uppercase mb-2">Total Students</div>
                    <div className="text-2xl font-bold text-slate-900">142</div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-slate-500 text-xs font-bold uppercase mb-2">Classes Today</div>
                    <div className="text-2xl font-bold text-slate-900">4</div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-slate-500 text-xs font-bold uppercase mb-2">Pending Approvals</div>
                    <div className="text-2xl font-bold text-orange-500">12</div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-slate-500 text-xs font-bold uppercase mb-2">Research Papers</div>
                    <div className="text-2xl font-bold text-emerald-600">8</div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Schedule */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    <h3 className="font-bold text-slate-800 mb-6">Today's Schedule</h3>
                    <div className="space-y-4">
                        {[
                            { time: '09:00 AM', sub: 'Data Structures', code: 'CS302', room: 'LH-101', status: 'Completed' },
                            { time: '11:00 AM', sub: 'AI & ML Lab', code: 'CS305', room: 'LAB-2', status: 'Ongoing' },
                            { time: '02:00 PM', sub: 'Faculty Meeting', code: '-', room: 'Conf Hall', status: 'Upcoming' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <div className="w-20 font-bold text-slate-600">{item.time}</div>
                                <div className="flex-1 px-4 border-l border-slate-200 mx-4">
                                    <h4 className="font-bold text-slate-900">{item.sub}</h4>
                                    <p className="text-xs text-slate-500">{item.code} • {item.room}</p>
                                </div>
                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.status === 'Completed' ? 'bg-green-100 text-green-700' : item.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-600'}`}>
                                    {item.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Approvals */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    <h3 className="font-bold text-slate-800 mb-6">Student Requests</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-3 border rounded-lg hover:bg-slate-50 transition">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-sm text-slate-800">John Doe</span>
                                    <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded">OD Request</span>
                                </div>
                                <p className="text-xs text-slate-500 mb-3">Hackathon participation at IIT Madras.</p>
                                <div className="flex space-x-2">
                                    <button className="flex-1 bg-emerald-500 text-white text-xs font-bold py-1.5 rounded hover:bg-emerald-600">Approve</button>
                                    <button className="flex-1 bg-red-50 text-red-600 text-xs font-bold py-1.5 rounded hover:bg-red-100">Reject</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <button className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition ${active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
    <Icon size={18} className="mr-3" />
    {label}
  </button>
);

export default FacultyPortal;
