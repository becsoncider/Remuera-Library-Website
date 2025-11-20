import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Contact from './Contact';
import History from './History';
import AboutRemuera from './AboutRemuera';
import AboutBuilding from './AboutBuilding';
import AboutLibrary from './AboutLibrary';
import Book from './Book';
import BookRoom from './BookRoom';
import BookFunction from './BookFunction';


function HomePage() {
  return (
    <div>
      <header style={{ backgroundColor: '#95c8ec', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>Remuera Library</h1>
        <nav style={{ marginTop: '10px' }}>
          <Link to="/" style={{ color: 'white', margin: '0 15px' }}>Home</Link>
          <Link to="/book" style={{ color: 'white', margin: '0 15px' }}>Book</Link>
          <Link to="/contact" style={{ color: 'white', margin: '0 15px' }}>Contact</Link>
          <Link to="/history" style={{ color: 'white', margin: '0 15px' }}>History</Link>
        </nav>
      </header>

      <div style={{ width: '80%', margin: '30px auto', borderRadius: '10px', overflow: 'hidden', height: '300px' }}>
  <Carousel
    showThumbs={false}
    infiniteLoop
    autoPlay
    interval={3000}
    showStatus={false}
  >
    <div>
      <img
        src="aboutremuera.jpg"
        alt="Library 1"
        style={{ height: '300px', objectFit: 'cover' }}
      />
    </div>
    <div>
      <img
        src="aboutlibrary.jpg"
        alt="Library 2"
        style={{ height: '300px', objectFit: 'cover' }}
      />
    </div>
    <div>
      <img
        src="aboutbuilding.jpg"
        alt="Library 3"
        style={{ height: '300px', objectFit: 'cover' }}
      />
    </div>
  </Carousel>
</div>


      <main style={{ padding: '20px', textAlign: 'center' }}>
        <p>Welcome to Remuera Library. Located in the heart of the Remuera Township, one of Auckland's busiest libraries. </p>
           <p> Use this site to book a private meeting room, or the library for a function. </p>
          <p> Explore the history of the Remuera community, the deep rich history of the building, and how the library came to be. </p>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route path="/aboutremuera" element={<AboutRemuera />} />
        <Route path="/aboutbuilding" element={<AboutBuilding />} />
        <Route path="/aboutlibrary" element={<AboutLibrary />} />
        <Route path="/book" element={<Book />} />
        <Route path="/bookroom" element={<BookRoom />} />
        <Route path="/bookfunction" element={<BookFunction />} />
      </Routes>
    </Router>
  );
}

export default App;
