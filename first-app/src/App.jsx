import React from "react";
import "./bootstrap.min.css";
import "./App.css";
import Main from "./components/MainPage"
import Memory from "./components/Memory.jsx";
import Drawer from "./components/Drawer.jsx";
import ListeTrucs from "./components/Liste.jsx";
import { BrowserRouter, Route }  from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Drawer />
        <div className="App-content">
          <Route exact path="/" component={Main} />
          <Route exact path="/liste" component={ListeTrucs} />
          <Route exact path="/memory" component={Memory} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
