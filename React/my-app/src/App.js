import React from 'react';
import './App.css';
import './components/Header/Header'
import ProFile from "./components/ProFile/ProFile";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
const App = () => {
  return (
      <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className="app-wrapper-content">
              <ProFile />
              <Dialogs />
          </div>
      </div>
  );
}

export default App;
