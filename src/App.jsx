import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Construction from './pages/services/Construction';
import Mining from './pages/services/Mining';
import Logistics from './pages/services/Logistics';
import Trading from './pages/services/Trading';
import Governance from './pages/Governance';
import CSR from './pages/CSR';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-enter flex-1">
      <Routes location={location}>
        <Route path="/"                      element={<Home />} />
        <Route path="/about"                 element={<About />} />
        <Route path="/services"              element={<Services />} />
        <Route path="/services/construction" element={<Construction />} />
        <Route path="/services/mining"       element={<Mining />} />
        <Route path="/services/logistics"    element={<Logistics />} />
        <Route path="/services/trading"      element={<Trading />} />
        <Route path="/governance"            element={<Governance />} />
        <Route path="/csr"                   element={<CSR />} />
        <Route path="/contact"               element={<Contact />} />
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
