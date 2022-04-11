import React from 'react';
import './App.css';
import './components/Header/Header'
import ProFile from "./components/ProFile/ProFile";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
      <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className="app-wrapper-content">
              <Route path='/dialogs' component={Dialogs}/>
              <Route path='/profile' component={ProFile}/>
          </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
