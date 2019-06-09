import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Resume from "./resume";
import Contact from "./contact";
import About from "./about";
import Home from "./home";

const Main = () =>(
    <Switch>
        <Route exact path="/" component={Home} />
        {/*<Route path="/about" component={About} />*/}
        <Route path="/resume" component={Resume} />
        {/*<Route path="/contact" component={Contact} />*/}
    </Switch>
)

export default Main;