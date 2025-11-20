import React from 'react';
import { Link } from 'react-router-dom';
import './AboutLibrary.css';

function AboutLibrary() {
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

      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h2>About the Remuera Library</h2>
        <img 
          src="aboutlibrary.jpg" 
          alt="Inside Remuera Library" 
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <p style={{ marginTop: '20px' }}>
The first Remuera Library opened in 1915. When the new Remuera Library opened in 1926 in its current building, 
the building which originally housed the Remuera library was relocated to Pt Chevalier, and later demolished.
The library provided inspiration for modern libraries - open and spacious. The Remuera Library continues 
to operate as a crucial hub-spot for Remuera and its locals. 
</p>
      </main>
    </div>
  );
}

export default AboutLibrary;
