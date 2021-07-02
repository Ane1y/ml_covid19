import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Data from "./components/pages/Data";
import DetailedData from "./components/pages/DetailedData";
import Information from "./components/pages/Information";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/"  component={Home}/>
                        <Route path="/data"  component={Data}/>
                        <Route path="/detailed-data"  component={DetailedData}/>
                        <Route path="/information"  component={Information}/>
                    </Switch>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App
