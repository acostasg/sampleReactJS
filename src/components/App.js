import React, {Component} from 'react';
import Footer from './Footer';
import Content from './Content';
import Header from './Header';
import {sections} from "../data/index";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Content sections={sections}/>
                <Footer year='2017'/>
            </div>
        );
    }
}

export default App;
