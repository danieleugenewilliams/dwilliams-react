import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import Services from './components/Services';
import Bio from './components/Bio';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
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
  );
}

export default App;
