import React from 'react';
import { Link } from 'react-router-dom';

function Book() {
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
      <main style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2em', marginBottom: '40px' }}>Book</h2>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <Link 
            to="/bookroom"
            style={{
              color: '#95c8ec',
              fontSize: '1.2em',
              textDecoration: 'none',
              border: '2px solid #95c8ec',
              padding: '10px 20px',
              borderRadius: '8px',
              width: '200px',
              textAlign: 'center',
              transition: '0.3s'
            }}
            onMouseOver={e => { 
              e.target.style.backgroundColor = '#95c8ec'; 
              e.target.style.color = 'white'; 
            }}
            onMouseOut={e => { 
              e.target.style.backgroundColor = 'white'; 
              e.target.style.color = '#95c8ec'; 
            }}
          >
            Book a Room
          </Link>

          <Link 
            to="/bookfunction"
            style={{
              color: '#95c8ec',
              fontSize: '1.2em',
              textDecoration: 'none',
              border: '2px solid #95c8ec',
              padding: '10px 20px',
              borderRadius: '8px',
              width: '200px',
              textAlign: 'center',
              transition: '0.3s'
            }}
            onMouseOver={e => { 
              e.target.style.backgroundColor = '#95c8ec'; 
              e.target.style.color = 'white'; 
            }}
            onMouseOut={e => { 
              e.target.style.backgroundColor = 'white'; 
              e.target.style.color = '#95c8ec'; 
            }}
          >
            Book a Function
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Book;
