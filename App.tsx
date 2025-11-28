import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements';
import BusTracking from './pages/BusTracking';
import FeePayment from './pages/FeePayment';
import StudentPortal from './pages/StudentPortal';
import Academics from './pages/Academics';
import About from './pages/About';
import Research from './pages/Research';
import Campus from './pages/Campus';
import Contact from './pages/Contact';
import Department from './pages/Department';
// Remove MessageSquare import as we are using external Zoho Chatbot
// import { MessageSquare } from 'lucide-react';

// Wrapper to conditionally render Header/Footer
const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isPortal = location.pathname.startsWith('/portal');

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {!isPortal && <Navbar />}
      <div className="flex-1 w-full">
        {children}
      </div>
      {!isPortal && <Footer />}
      
      {/* Floating Chatbot - Replaced by Zoho SalesIQ Widget in index.html */}
    </>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/department/:id" element={<Department />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/research" element={<Research />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/track-bus" element={<BusTracking />} />
          <Route path="/pay-fees" element={<FeePayment />} />
          <Route path="/portal" element={<StudentPortal />} />
          {/* Catch all */}
          <Route path="*" element={<Home />} />
        </Routes>
      </LayoutWrapper>
    </HashRouter>
  );
};

export default App;