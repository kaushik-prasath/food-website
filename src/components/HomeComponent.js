import React, {Component} from 'react';



class HomeComponent extends Component {

    state = {
        logo: "",
        title: "",
        description: ""
    }
    render(){
        return (
            <div class="home-wrapper">
                <nav className="navbar navbar-expand-lg ">
                    <a className="navbar-brand" href="#">
                        // <img src={require('../logo.png')} width="60" height="60" alt=""/>
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
                            <a className="nav-link contact" href="#">CONTACT US</a>
                          </li>
                        </ul>
                    </div>
                </nav>
                <section className="section-wrapper">
                    <div className="description">
                        <h1>Have no time to prepare <span>food</span>?</h1>
                        <h4>Choose one of our plans, enter delivery time and enjoy delicious food without leaving your home!</h4>
                        <button className="btn btn-warning cus-btn">Order Food</button>

                        <div className="social">
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-instagram"></i>
                            <i class="fa fa-facebook"></i>
                        </div>
                    </div>

                    <div className="banner">
                        // <img src={require('../food.png')} width="450" height="450" alt=""/>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomeComponent;
