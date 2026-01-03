import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import Home from './components/Home';
import Layout from './components/Layout';
import Lab from './components/Lab';
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
              <Route path="/lab" element={<Lab />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              {/* Redirects for old routes - can be removed after transition */}
              <Route path="/about" element={<Lab />} />
              <Route path="/bio" element={<Lab />} />
              <Route path="/services" element={<Home />} />
              <Route path="/case-studies" element={<Home />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
