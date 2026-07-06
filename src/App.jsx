import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Governance from './pages/Governance';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    // key re-mounts the div on every route change → re-triggers page-enter CSS anim
    <div key={location.pathname} className="page-enter flex-1">
      <Routes location={location}>
        <Route path="/"           element={<Home />} />
        <Route path="/about"      element={<About />} />
        <Route path="/services"   element={<Services />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/contact"    element={<Contact />} />
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
