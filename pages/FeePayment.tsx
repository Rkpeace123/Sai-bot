import React, { useState } from 'react';
import { CreditCard, Search, Lock, CheckCircle } from 'lucide-react';
import { STUDENT_FEES } from '../constants';

const FeePayment: React.FC = () => {
  const [step, setStep] = useState(1);
  const [regNo, setRegNo] = useState('');
  const [selectedFees, setSelectedFees] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if(regNo) setStep(2);
  };

  const handlePay = () => {
    setStep(3);
  };

  const totalAmount = STUDENT_FEES
    .filter(f => selectedFees.includes(f.id))
    .reduce((sum, f) => sum + f.amount, 0);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Secure Fee Payment Portal</h1>
          <p className="text-slate-500 mt-2">Pay tuition, hostel, and transport fees conveniently online.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          
          {/* Progress */}
          <div className="flex border-b border-slate-100 bg-slate-50/50">
             <div className={`flex-1 py-4 text-center text-sm font-medium border-b-2 ${step === 1 ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-slate-400'}`}>1. Student Verify</div>
             <div className={`flex-1 py-4 text-center text-sm font-medium border-b-2 ${step === 2 ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-slate-400'}`}>2. Select Fees</div>
             <div className={`flex-1 py-4 text-center text-sm font-medium border-b-2 ${step === 3 ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-slate-400'}`}>3. Payment</div>
          </div>

          <div className="p-8 min-h-[400px]">
            
            {/* Step 1: Verification */}
            {step === 1 && (
              <div className="max-w-md mx-auto py-10">
                <form onSubmit={handleSearch} className="space-y-6">
                   <div className="text-center mb-6">
                     <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                       <Search size={28} />
                     </div>
                     <h3 className="text-lg font-semibold text-slate-800">Identify Student</h3>
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Registration Number / Roll No</label>
                     <input 
                      type="text" 
                      value={regNo}
                      onChange={(e) => setRegNo(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 transition text-lg tracking-wide uppercase"
                      placeholder="e.g. 412419104001"
                      required
                    />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Date of Birth</label>
                     <input type="date" className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 transition" />
                   </div>
                   <button type="submit" className="w-full py-3 bg-sairam-800 text-white rounded-lg font-bold hover:bg-sairam-900 transition flex justify-center items-center">
                     Verify & Proceed
                   </button>
                </form>
              </div>
            )}

            {/* Step 2: Selection */}
            {step === 2 && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div>
                    <h3 className="font-bold text-slate-900">John Doe</h3>
                    <p className="text-sm text-slate-600">IV Year, CSE - B.E.</p>
                  </div>
                  <button onClick={() => setStep(1)} className="text-sm text-blue-600 hover:underline">Change</button>
                </div>

                <h4 className="font-semibold text-slate-800 mb-4">Pending Dues</h4>
                <div className="space-y-3 mb-8">
                  {STUDENT_FEES.map((fee) => (
                    <div 
                      key={fee.id} 
                      className={`relative p-4 border rounded-xl cursor-pointer transition flex items-center justify-between ${selectedFees.includes(fee.id) ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-emerald-200'}`}
                      onClick={() => {
                        if (selectedFees.includes(fee.id)) {
                          setSelectedFees(selectedFees.filter(id => id !== fee.id));
                        } else {
                          setSelectedFees([...selectedFees, fee.id]);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center mr-4 ${selectedFees.includes(fee.id) ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300 bg-white'}`}>
                          {selectedFees.includes(fee.id) && <CheckCircle size={14} className="text-white" />}
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">{fee.name}</div>
                          <div className="text-xs text-slate-500">Due: {fee.dueDate}</div>
                        </div>
                      </div>
                      <div className="font-bold text-slate-900">₹ {fee.amount.toLocaleString()}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                   <div>
                     <p className="text-sm text-slate-500">Total Payable</p>
                     <p className="text-2xl font-bold text-slate-900">₹ {totalAmount.toLocaleString()}</p>
                   </div>
                   <button 
                    disabled={totalAmount === 0}
                    onClick={handlePay}
                    className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-bold hover:bg-emerald-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                   >
                     <Lock size={16} className="mr-2" /> Pay Securely
                   </button>
                </div>
              </div>
            )}

            {/* Step 3: Success Mock */}
            {step === 3 && (
              <div className="text-center py-10 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Payment Successful</h3>
                <p className="text-slate-600 mb-8">
                  Transaction ID: <strong>TXN_7823472893</strong><br/>
                  A receipt has been sent to your registered email.
                </p>
                <div className="flex justify-center space-x-4">
                  <button onClick={() => window.print()} className="px-6 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50">
                    Download Receipt
                  </button>
                  <button onClick={() => window.location.reload()} className="px-6 py-2 bg-sairam-800 text-white rounded-lg hover:bg-sairam-900">
                    Done
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
        
        <div className="mt-8 flex justify-center space-x-6 grayscale opacity-60">
           {/* Mock Payment Gateways */}
           <div className="font-bold text-slate-400">VISA</div>
           <div className="font-bold text-slate-400">MasterCard</div>
           <div className="font-bold text-slate-400">UPI</div>
           <div className="font-bold text-slate-400">RuPay</div>
        </div>
      </div>
    </div>
  );
};

export default FeePayment;
