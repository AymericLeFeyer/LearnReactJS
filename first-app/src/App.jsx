import React from "react";
import "./bootstrap.min.css";
import "./App.css";
import Main from "./components/MainPage"
import Drawer from "./components/Drawer";
import ListeTrucs from "./components/Liste";
import Memory from "./components/Memory";
import Pendu from "./components/Pendu";

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
          <Route exact path="/pendu" component={Pendu} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
