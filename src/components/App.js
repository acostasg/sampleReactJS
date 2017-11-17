import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import /*Content,*/ { ContentClassComponent } from './Content';
import { sections } from '../data';

class App extends Component {
    render() {
        return (
            <div>
                <Header title="My react app"/>
                <ContentClassComponent sections={sections}/>
                <Footer copyright="© 2017 Copyright Text" />
            </div>
        );
    }
}

export default App;
