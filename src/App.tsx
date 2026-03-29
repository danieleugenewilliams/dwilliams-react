import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import Home from './components/Home';
import Layout from './components/Layout';
import Services from './components/Services';
import Insights from './components/Insights';
import About from './components/About';
import Lab from './components/Lab';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import Assessment from './components/Assessment';
import Partners from './components/Partners';
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
              <Route path="/services" element={<Services />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/lab" element={<Lab />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/partners" element={<Partners />} />
              {/* Redirects for old routes */}
              <Route path="/bio" element={<Navigate to="/about" replace />} />
              <Route path="/consulting" element={<Navigate to="/services" replace />} />
              <Route path="/newsletters" element={<Navigate to="/insights" replace />} />
              <Route path="/case-studies" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
