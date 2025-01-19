// App.js
import React from 'react';
import './App.css';
import Hero from './components/Hero';  // Import Hero component
import Header from './components/Header';  // Import Hero component
import FashionPage from './components/FashionPage';

function App() {
  return (
    <div className="App">
            <Header />  {/* Use Hero component here */}

      <Hero />  {/* Use Hero component here */}
      <FashionPage/>
    </div>
  );
}

export default App;
