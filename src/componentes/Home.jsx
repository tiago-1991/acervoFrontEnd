import logo from '../logo.svg';
import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
                <main className="App-main">
                    <img src={logo} className="App-logo" alt="logo" /> 
               
                </main>
            );
    }
}

export default Home;