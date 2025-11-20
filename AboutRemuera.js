import React from 'react';
import { Link } from 'react-router-dom';

function AboutRemuera() {
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

      
      <main style={{ textAlign: 'center', padding: '20px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>About Remuera</h2>

    
        <img
          src="aboutremuera.jpg"
          alt="Remuera area"
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '30px'
          }}
        />

       
        <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontSize: '1.1rem' }}>
         Remuera began as a Māori settlement around 1,000 AD, over 1,000 years ago from today. The land was
         fertile, and homed multiple volcanoes which are now known as Mount Hobson, and Mount St. John.
         It had not always been called Remuera however, it was originally named Remu-wera. Remu means hem, and wera 
         means burnt. It is said that the name comes from when a female Chief was killed while visiting, by being 
         put in an oven while wearing her skirt. Early purchasers of the land include James Dilworth and Joseph 
         Newman, as well as the British Crown. After these purchases, Remuera began to modernise as houses and businesses
         began being built on the land, gradually becoming the Remuera we know today.
        </p>
      </main>
    </div>
  );
}

export default AboutRemuera;
