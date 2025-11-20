import React from 'react';
import { Link } from 'react-router-dom';

function History() {
  return (
    <div>
      <header style={{backgroundColor:'#95c8ec', color:'white', padding:'20px', textAlign:'center'}}>
        <h1>Remuera Library</h1>
        <nav style={{marginTop:'10px'}}>
          <Link to="/" style={{color:'white', margin:'0 15px'}}>Home</Link>
          <Link to="/book" style={{ color: 'white', margin: '0 15px' }}>Book</Link>
          <Link to="/contact" style={{color:'white', margin:'0 15px'}}>Contact</Link>
          <Link to="/history" style={{color:'white', margin:'0 15px'}}>History</Link>
        </nav>
      </header>

      <main style={{padding:'20px', textAlign:'center'}}>
        <h2>Our Library’s History</h2>
        <p>Explore the evolution of Remuera Library through the years.</p>

      
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginTop: '30px'
        }}>
          <div style={{textAlign:'center'}}>
            <img 
              src="aboutremuera.jpg" 
              alt="About Remuera" 
              style={{borderRadius:'10px', width:'200px', height:'150px'}}
            />
            <div style={{marginTop:'10px'}}>
              <Link to="/aboutremuera">About Remuera</Link>
            </div>
          </div>

       
          <div style={{textAlign:'center'}}>
            <img 
              src="aboutbuilding.jpg" 
              alt="About the Building" 
              style={{borderRadius:'10px', width:'200px', height:'150px'}}
            />
            <div style={{marginTop:'10px'}}>
              <Link to="/aboutbuilding">About the Building</Link>
            </div>
          </div>

         
          <div style={{textAlign:'center'}}>
            <img 
              src="aboutlibrary.jpg" 
              alt="About the Remuera Library" 
              style={{borderRadius:'10px', width:'200px', height:'150px'}}
            />

            
            <div style={{marginTop:'10px'}}>
              <Link to="/aboutlibrary">About the Remuera Library</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default History;
