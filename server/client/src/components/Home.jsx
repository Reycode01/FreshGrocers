import React from 'react';
import groceryImage from './assets/randy-fath-5aJVJvJ9rG8-unsplash.jpg'; // Import the image

const Home = () => (
  <div style={{ backgroundColor: '#ffffff', padding: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ maxWidth: '600px', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <img src={groceryImage} alt="Fresh groceries" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} onLoad={() => console.log("Image loaded")} /> {/* Display the image */}
    </div>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Welcome to FreshGrocers</h1>
      <p>Your one-stop shop for fresh produce and pantry staples. Discover a wide range of high-quality groceries, delivered straight to your doorstep across Eldoret and beyond, ensuring convenience and freshness with every order.</p>
    </div>
    <footer style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', marginTop: '20px', width: '100%' }}>
      <p>&copy; FreshGrocers 2024. All rights reserved.</p>
    </footer>
  </div>
);

export default Home;





