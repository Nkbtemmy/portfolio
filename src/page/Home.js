import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from '../components/Navigation'
import Homes from '../components/Home'
import About from '../components/About'
import Service from '../components/Services'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Work from '../components/Works';
import './../assets/styles/styles.scss'

class Home extends Component {
        render() {
        return (
            <div>
                <Navigation />
                <Homes />
                <About />
                <Work />    
                <Service />
                <Skills />
                <div></div>
                <Contact />      
            </div>
        )
    }
}

//router
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                         <Route path="/" exact component={Home} />
                         <Route path="*" component={Home} />
                    </Switch>
                </Router> 
            </div>
        )
    }
}

