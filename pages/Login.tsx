
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { User, Lock, ChevronRight, GraduationCap, Users, BookOpen, Briefcase } from 'lucide-react';
import { MockDatabase } from '../constants';

const Login: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialRole = searchParams.get('role') || 'student';
  
  const [activeRole, setActiveRole] = useState(initialRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (searchParams.get('role')) {
      setActiveRole(searchParams.get('role')!);
    }
  }, [searchParams]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      const user = MockDatabase.login(activeRole);
      setLoading(false);
      
      if (user) {
        // Redirect based on role
        switch(activeRole) {
            case 'student':
                navigate('/portal/student');
                break;
            case 'faculty':
                navigate('/portal/faculty');
                break;
            case 'parent':
                navigate('/portal/parent');
                break;
            default:
                navigate('/portal/student');
        }
      } else {
        setError('Invalid credentials. Please try again.');
      }
    }, 1000);
  };

  const roles = [
    { id: 'student', label: 'Student', icon: GraduationCap, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 'faculty', label: 'Faculty', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'parent', label: 'Parent', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
    { id: 'alumni', label: 'Alumni', icon: Briefcase, color: 'text-gold-600', bg: 'bg-yellow-50' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row min-h-[600px] animate-fade-in-up">
        
        {/* Left Side - Visual */}
        <div className="md:w-1/2 bg-sairam-900 text-white p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-4">Welcome to<br/>Sairam Portals</h2>
            <p className="text-slate-300">Access your dashboard to manage academics, fees, transport, and more.</p>
          </div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center space-x-3 text-sm text-slate-300">
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Lock size={14}/></div>
               <span>Secure 256-bit Encryption</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-300">
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Users size={14}/></div>
               <span>Single Sign-On Enabled</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-8 md:p-12 bg-white">
          
          <div className="mb-8">
            <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Select Portal</label>
            <div className="grid grid-cols-2 gap-3">
                {roles.map((r) => (
                    <button
                        key={r.id}
                        onClick={() => setActiveRole(r.id)}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg border transition ${activeRole === r.id ? `${r.bg} border-${r.color.split('-')[1]}-500 shadow-sm` : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                    >
                        <r.icon className={`mb-1 ${activeRole === r.id ? r.color : 'text-slate-400'}`} size={20} />
                        <span className={`text-xs font-bold ${activeRole === r.id ? 'text-slate-900' : 'text-slate-500'}`}>{r.label}</span>
                    </button>
                ))}
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {activeRole === 'student' ? 'Registration Number' : activeRole === 'parent' ? 'Parent Mobile / Email' : 'Staff ID / Email'}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 text-slate-400" size={18} />
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition"
                  placeholder={activeRole === 'student' ? 'e.g., 412419104001' : 'Enter your ID'}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-slate-400" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex justify-end mt-1">
                <a href="#" className="text-xs font-bold text-emerald-600 hover:underline">Forgot Password?</a>
              </div>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg text-center">
                    {error}
                </div>
            )}

            <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3 bg-sairam-900 text-white font-bold rounded-lg hover:bg-sairam-800 transition flex items-center justify-center shadow-lg"
            >
                {loading ? 'Authenticating...' : (
                    <>Login to Dashboard <ChevronRight size={16} className="ml-2" /></>
                )}
            </button>
          </form>

          <div className="mt-8 text-center">
             <p className="text-xs text-slate-400">
                By logging in, you agree to Sairam University's <a href="#" className="underline">Terms of Service</a>.
             </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
