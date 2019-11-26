import React, {Component} from 'react';



class HomeComponent extends Component {

    state = {
        logo: "",
        title: "",
        description: ""
    }
    render(){
        return (
            <div>
            <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand" href="#">
                    <img src={require('../logo.png')} width="60" height="60" alt=""/>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">ABOUT <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">OUR FOOD</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">PLANS</a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="#">CONTACT US</a>
                      </li>
                    </ul>
                </div>
            </nav>
            </div>
        );
    }
}

export default HomeComponent;
