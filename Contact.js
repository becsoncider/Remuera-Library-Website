import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const savedName = localStorage.getItem("savedName");
    if (savedName) {
      setFormData(prev => ({ ...prev, name: savedName }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

  
    localStorage.setItem("savedName", formData.name);

    setFormData({ name: '', email: '', message: '' });
  };

  
  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude.toFixed(5),
          lon: position.coords.longitude.toFixed(5)
        });
      },
      () => alert("Unable to retrieve your location.")
    );
  };

  return (
    <>
     
      <header style={{backgroundColor:'#95c8ec', color:'white', padding:'20px', textAlign:'center'}}>
        <h1>Remuera Library</h1>
        <nav style={{marginTop:'10px'}}>
          <a href="/" style={{color:'white', margin:'0 15px'}}>Home</a>
          <a href="/book" style={{ color: 'white', margin: '0 15px' }}>Book</a>
          <a href="/contact" style={{color:'white', margin:'0 15px'}}>Contact</a>
          <a href="/history" style={{color:'white', margin:'0 15px'}}>History</a>
        </nav>
      </header>

    
      <div className="contact-page" style={{padding:'20px', textAlign:'center'}}>
        <h2>Contact Us</h2>

        {submitted && <p className="success-message">Thank you! Your message has been sent.</p>}

        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </label>

          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </label>

          <label>
            Message:
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </label>

          <button type="submit">Send</button>
        </form>

       
        <div style={{ marginTop: '20px' }}>
          <button onClick={getLocation}>Get My Location</button>

          {location && (
            <p style={{ marginTop: '10px' }}>
              📍 Your location: <br />
              <strong>Latitude:</strong> {location.lat} <br />
              <strong>Longitude:</strong> {location.lon}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
