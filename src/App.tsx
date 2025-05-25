import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import Services from './components/ServicesUpdated';
import Bio from './components/Bio';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
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
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/contact" element={<Contact />} />
              {/* Add Insights, Terms, etc. as needed */}
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
