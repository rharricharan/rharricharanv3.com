import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home.js';
import HomeVideo from '../src/assets/homeTwo.mp4';
import '@fontsource/inter'; // Defaults to weight 400
import '@fontsource/inter/400.css'; // Specific weight
import '@fontsource/inter/500.css'; // Specific weight
import '@fontsource/inter/700.css'; // Bold weight
import '@fontsource/inter/900.css'; // Black weight
import Experience from './pages/Experience.js';

function App() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <div className="home-video">
          <div className="home-video-overlay" />
          <video src={HomeVideo} type="video/mp4" autoPlay loop muted />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
