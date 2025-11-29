
import React from 'react';
import { LayoutDashboard, Bus, CreditCard, FileText, Phone, LogOut, Activity, UserCheck } from 'lucide-react';
import { MockDatabase } from '../constants';
import { useNavigate, Link } from 'react-router-dom';

const ParentPortal: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    MockDatabase.logout();
    navigate('/login?role=parent');
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-900 text-purple-100 hidden md:flex flex-col">
        <div className="p-6 border-b border-purple-800">
           <span className="text-white font-bold text-xl">Parent Portal</span>
           <p className="text-xs text-purple-300 mt-1">Sairam University</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <NavItem active icon={LayoutDashboard} label="Overview" />
          <NavItem icon={Activity} label="Ward Performance" />
          <NavItem icon={UserCheck} label="Attendance" />
          <NavItem icon={CreditCard} label="Fee Payment" />
          <NavItem icon={Bus} label="Track Bus" />
          <NavItem icon={Phone} label="Contact Warden" />
        </nav>
        <div className="p-4 border-t border-purple-800">
          <button onClick={handleLogout} className="flex items-center text-sm hover:text-white transition w-full p-2">
            <LogOut size={16} className="mr-3" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm border-b border-slate-200 p-4 flex justify-between items-center">
          <div className="flex items-center md:hidden">
             <span className="font-bold text-purple-900">Parent Portal</span>
          </div>
          <h2 className="text-xl font-bold text-slate-800 hidden md:block">Welcome, Mr. Robert Doe</h2>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-500 mr-2">Ward: John Doe (CSE - IV Yr)</span>
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold border border-purple-200">
                RD
            </div>
          </div>
        </header>

        <div className="p-6">
            
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-lg text-white p-8 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">John is doing great!</h2>
                        <p className="opacity-90">Current Attendance: 92% | Latest GPA: 8.5</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex space-x-3">
                         <Link to="/contact" className="px-5 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-bold backdrop-blur-sm transition">
                            Request Callback
                         </Link>
                         <Link to="/pay-fees" className="px-5 py-2 bg-white text-purple-700 rounded-lg text-sm font-bold hover:bg-slate-50 transition shadow">
                            Pay Fees
                         </Link>
                    </div>
                </div>
            </div>

            <h3 className="font-bold text-slate-800 mb-4 text-lg">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Link to="/track-bus" className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition flex items-center group">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition">
                        <Bus size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Track Transport</h4>
                        <p className="text-xs text-slate-500">View live location</p>
                    </div>
                </Link>
                <Link to="/pay-fees" className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition flex items-center group">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition">
                        <CreditCard size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Pay Dues</h4>
                        <p className="text-xs text-slate-500">Tuition & Hostel Fees</p>
                    </div>
                </Link>
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition flex items-center group cursor-pointer">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition">
                        <FileText size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">View Report Card</h4>
                        <p className="text-xs text-slate-500">Download Semester 5 Results</p>
                    </div>
                </div>
            </div>

            {/* Attendance Chart Mock */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-6">Attendance Overview</h3>
                <div className="space-y-4">
                    {[
                        { sub: 'Computer Networks', val: 95 },
                        { sub: 'Artificial Intelligence', val: 88 },
                        { sub: 'Compiler Design', val: 92 },
                        { sub: 'Project Phase I', val: 100 }
                    ].map((item, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="font-medium text-slate-700">{item.sub}</span>
                                <span className="font-bold text-slate-900">{item.val}%</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2">
                                <div 
                                    className={`h-2 rounded-full ${item.val > 90 ? 'bg-green-500' : 'bg-blue-500'}`} 
                                    style={{ width: `${item.val}%` }}
                                ></div>
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
  <button className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition ${active ? 'bg-purple-700 text-white' : 'text-purple-200 hover:bg-purple-800 hover:text-white'}`}>
    <Icon size={18} className="mr-3" />
    {label}
  </button>
);

export default ParentPortal;
