import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://mayks-services.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <footer style={{ backgroundColor: '#212121', color: 'white' }} className="pt-5 pb-4" id="ContactUS">
      <div className="container">
        <div className="row g-5 footer-spacing">

          {/* About/Info */}
          <div className="col-md-6">
            <h1 className="mb-4 footer-text">We'd Love To Hear From You!</h1>
            <p className="lead fw-normal">
              Whether you have a question or just want to say hi — our inbox is always open.
            </p>
            <p>
              <i className="bi bi-briefcase-fill" style={{ color: '#B47F69' }}></i>{' '}
              8AM–5PM on Weekdays and Saturday, Closed on Sunday
            </p>

            {/* Review CTA */}
            <div className="mt-4">
              <p className="fw-normal mb-2">Have we worked with you before? We'd love your feedback.</p>
              <a
                href="https://www.yelp.com/biz/mayks-services-portland" // Replace with actual review link
                className="btn btn-outline-light fw-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Review
              </a>
            </div>
          </div>

          {/* Contact Us Form */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control bg-transparent text-white border border-light"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control bg-transparent text-white border border-light"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control bg-transparent text-white border border-light"
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn button-1 text-white fw-semibold px-5 py-3"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <hr className="my-4 border-light" />

        <div className="text-center" style={{ color: '#B47F69' }}>
          &copy; 2025 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
