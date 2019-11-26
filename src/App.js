import React, {Component} from 'react';
import HomeComponent from './components/HomeComponent';
import MultipleSelect from './components/MultipleSelect';


import './App.css';

class App extends Component {
    render(){
        return (
            < div className = "App" >
                <HomeComponent />
                <MultipleSelect />
            </div>
        );
    }
}

export default App;
