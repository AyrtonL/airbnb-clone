import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Home />
      <Footer />
    
      </header>
    </div>
  );
}

export default App;
