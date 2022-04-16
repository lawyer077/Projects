import React from 'react';
import { render } from "react-dom";
import ProFile from "./ProFile";
import Dialogs from "./Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";


                    const rootElement = document.getElementById("root");
                    render(
                    <BrowserRouter>
                    <Routes>

                        <Route path="dialogs" element={<Dialogs />} />
                        <Route path="profile" element={<ProFile />} />
                    </Routes>
                    </BrowserRouter>,
                    rootElement
                    );


export default Routes;