import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBuilding.css';

function AboutBuilding() {
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
        <h2>About the Building</h2>
        <img 
          src="aboutbuilding.jpg" 
          alt="Remuera Library Building" 
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <p style={{ marginTop: '20px' }}>
          The building in which the Remuera Library resides was built in 1926. It is an 
            example of Neo-Georgian architecture, and was designed by W.H. Gummer and Reginald Ford. 
              It was one of the first buildings in New Zealand to have been awarded a gold medal by the New Zealand
              Institude of Architects. The building was first opened by the city councillor, who at the time was
              Ellen Melville in 1926. Melville was the first woman to have been elected city council in New Zealand. 
              The building possesses strong American Colonial aspects including the square headed windows, and arches. 
          
        </p>
      </main>
    </div>
  );
}

export default AboutBuilding;
