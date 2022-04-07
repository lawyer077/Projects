import React from 'react';
import './App.css';
import './components/Header'
import ProFile from "./components/ProFile";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
const App = () => {
  return (
      <div className="app-wrapper">
          <Header />
          <NavBar />
          <ProFile />
      </div>
  );
}

export default App;
