import React from "react";
import {Home, Price, Features} from "./components";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/price" component={Price}/>
            <Route exact path="/features" component={Features}/>
          </Switch>
          </div>
        
      </Router>
  );
}

export default App;
