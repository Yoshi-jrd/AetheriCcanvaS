import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Donate from './pages/Donate';
import Header from './components/Header';  // Assuming you have a Header component
import Footer from './components/Footer';  // Assuming you have a Footer component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />  // This will display the header at the top of all pages
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />  // This will display the footer at the bottom of all pages
      </div>
    </Router>
  );
}

// In any component, for example in App.js
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <ThemeProvider>
            <div className={`App ${theme}`}>
                <Header />
                <button onClick={toggleTheme}>Toggle Theme</button>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/donate" element={<Donate />} />
                </Routes>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

// src/App.js
import React, { Suspense, lazy } from 'react';
const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
// Other imports

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          // Other routes
        </Routes>
      </Router>
    </Suspense>
  );
}


export default App;
