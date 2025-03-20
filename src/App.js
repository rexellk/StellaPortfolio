// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Layout from "./Layout";
import Chiron from './pages/Chiron';
import Notes from './pages/Notes';
import CircleStatus from './pages/CircleStatus';
import DailyRock from './pages/DailyRock';
import LandingPage from './pages/LandingPage';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop component

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Make sure this line is added */}
      <Routes>
        {/* Use Layout as common layout for all pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="chiron" element={<Chiron />} />
          <Route path="notes" element={<Notes />} />
          <Route path="circle-status" element={<CircleStatus />} />
          <Route path="about" element={<DailyRock />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;