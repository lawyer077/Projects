import React from 'react';
import './App.css';
import './components/Header/Header'
import ProFile from "./Routes/ProFile";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Dialogs from "./Routes/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { render } from "react-dom";
const App = () => {
  return (
     <BrowserRouter>
      <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className="content">

             const rootElement = document.getElementById("root");
              render(
              {/*<BrowserRouter>*/}
                  <Routes>
                      <Route path="/" element={<App />} />
                      <Route path="dialogs" element={<Dialogs />} />
                      <Route path="profile" element={<ProFile />} />
                  </Routes>
                 {/*</BrowserRouter>,*/}
              rootElement
              );

          </div>
      </div>

         </BrowserRouter>
  )
}

export default App;
