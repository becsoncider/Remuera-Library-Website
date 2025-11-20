import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Book.css';

export default function Book() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const times = [
    "11:00am", "12:00pm", "1:00pm", "2:00pm",
    "3:00pm", "4:30pm", "5:30pm", "6:30pm", "7:30pm"
  ];

  const handleDateClick = (day) => setSelectedDate(day);
  const handleTimeClick = (time) => setSelectedTime(time);

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time!');
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <header style={{ backgroundColor: '#95c8ec', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>Remuera Library</h1>
        <nav style={{ marginTop: '10px' }}>
          <Link to="/" style={{ color: 'white', margin: '0 15px' }}>Home</Link>
          <Link to="/book" style={{ color: 'white', margin: '0 15px' }}>Book</Link>
          <Link to="/contact" style={{ color: 'white', margin: '0 15px' }}>Contact</Link>
          <Link to="/history" style={{ color: 'white', margin: '0 15px' }}>History</Link>
        </nav>
      </header>

      <div className="booking-page" style={{ padding: '20px', textAlign: 'center' }}>
        {submitted ? (
          <div>
            <h2>Thanks for booking!</h2>
            <p>
              Your session is booked on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>.
            </p>
          </div>
        ) : (
          <section className="booking-section">
            <h2 className="section-title">BOOK NOW</h2>

            <div
              className="booking-container"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '40px',
                flexWrap: 'wrap',
                marginTop: '30px'
              }}
            >
              <div className="calendar-section" style={{ flex: '1 1 300px', textAlign: 'center' }}>
                <h3>Date</h3>
                <div
                  className="date-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, 1fr)',
                    gap: '8px',
                    marginTop: '10px'
                  }}
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                    <button
                      key={day}
                      onClick={() => handleDateClick(day)}
                      style={{
                        padding: '10px 0',
                        borderRadius: '5px',
                        border: '1px solid #95c8ec',
                        backgroundColor: selectedDate === day ? '#95c8ec' : 'white',
                        color: selectedDate === day ? 'white' : '#333',
                        cursor: 'pointer',
                        fontWeight: selectedDate === day ? 'bold' : 'normal'
                      }}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div className="booking-time" style={{ flex: '1 1 300px', textAlign: 'center' }}>
                <h3>Time</h3>
                <div
                  className="time-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                    marginTop: '10px'
                  }}
                >
                  {times.map(time => (
                    <button
                      key={time}
                      onClick={() => handleTimeClick(time)}
                      style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #95c8ec',
                        backgroundColor: selectedTime === time ? '#95c8ec' : 'white',
                        color: selectedTime === time ? 'white' : '#333',
                        cursor: 'pointer',
                        fontWeight: selectedTime === time ? 'bold' : 'normal'
                      }}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="book-btn" style={{ marginTop: '30px' }}>
              <button
                onClick={handleBooking}
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: '#95c8ec',
                  border: 'none',
                  borderRadius: '5px',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                BOOK
              </button>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
