// ./components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to [Hall Booking System SRS ], your premier destination for booking event halls. 
        We specialize in offering a wide range of venues for every type of event, whether it’s 
        a wedding, corporate function, or birthday celebration. Our goal is to make your event 
        planning as smooth and stress-free as possible.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        Our mission is to connect you with the perfect venue for your event. We strive to provide 
        an easy-to-use platform where you can browse, book, and manage hall reservations efficiently. 
        With our extensive selection of venues and exceptional customer service, we aim to exceed your 
        expectations and help you create memorable experiences.
      </p>
      
      <h2>How It Works</h2>
      <p>
        Using our website is simple:
        <ol>
          <li>Browse our list of available halls by location, capacity, and price.</li>
          <li>Select the hall that best suits your needs and check its availability.</li>
          <li>Book your chosen hall directly through our website.</li>
          <li>Receive confirmation and manage your booking through your account.</li>
        </ol>
      </p>
      
      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>Wide Selection:</strong> Choose from a diverse range of venues to fit any event.</li>
        <li><strong>Ease of Use:</strong> Our user-friendly platform makes booking a breeze.</li>
        <li><strong>Excellent Support:</strong> Our customer service team is here to help with any questions.</li>
        <li><strong>Competitive Pricing:</strong> Find great value and competitive rates for your event.</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or need assistance, feel free to reach out to our support team:
      </p>
      <ul>
        <li>Email: support@[Hall Booking System SRS].com</li>
        <li>Phone: (9784866787) 456-7890</li>
        <li>Address: 123 Event Lane, Celebration City, EC 12345</li>
      </ul>
    </div>
  );
}

export default About;
