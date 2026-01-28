import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import Home from './components/Home';
import Layout from './components/Layout';
import Consulting from './components/Consulting';
import Newsletters from './components/Newsletters';
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import { ThemeProvider } from './components/ThemeProvider';
import { Analytics } from './components/Analytics';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Analytics />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/newsletters" element={<Newsletters />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              {/* Redirects for old routes */}
              <Route path="/lab" element={<Navigate to="/consulting" replace />} />
              <Route path="/bio" element={<Navigate to="/about" replace />} />
              <Route path="/services" element={<Navigate to="/consulting" replace />} />
              <Route path="/case-studies" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
