import React, {Component} from 'react';
import HomeComponent from './components/HomeComponent';

import './App.css';

class App extends Component {
    render(){
        return (
            < div className = "App" >
                <HomeComponent />
                <div className="logo"></div>
            </div>
        );
    }
}

export default App;
