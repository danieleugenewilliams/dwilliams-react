import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import Home from './components/Home';
import Layout from './components/Layout';
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
              <Route path="/privacy" element={<PrivacyPolicy />} />
              {/* Legacy routes now collapse into the single page */}
              <Route path="/services" element={<Navigate to="/" replace />} />
              <Route path="/consulting" element={<Navigate to="/" replace />} />
              <Route path="/assessment" element={<Navigate to="/" replace />} />
              <Route path="/partners" element={<Navigate to="/" replace />} />
              <Route path="/case-studies" element={<Navigate to="/" replace />} />
              <Route path="/insights" element={<Navigate to="/" replace />} />
              <Route path="/newsletters" element={<Navigate to="/" replace />} />
              <Route path="/lab" element={<Navigate to="/" replace />} />
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="/bio" element={<Navigate to="/" replace />} />
              <Route path="/contact" element={<Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
