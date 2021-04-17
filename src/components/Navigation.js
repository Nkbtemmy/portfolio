import React, { Component } from 'react'
import { Link as Links } from "react-router-dom";
import { animateScroll as scroll, Link } from 'react-scroll'

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            className: "menu-icon",
            hide: "hide"
        };
    }
    componentDidMount() {

        const scroller = () => {

            var nav1 = document.getElementById("nav_black");

            if (window.scrollY > 680) {
                nav1.classList.add("black");
            }
            else {
                nav1.classList.remove("black");
        }
        }
        window.addEventListener('scroll', scroller)
    }
    hiden = () => {
        if (this.state.hide === "hide") {
            this.setState({ hide: "showing" });
        }
        else {
            this.setState({ hide: "hide" });
        }
    }
    render() {
        return (
            <div id="wrapper" className="wrapper">
                <nav id="nav_black" className={this.state.isActive ? "black" : null}>
                    <div className="responsive-nav">
                        <div>
                            <Links to="/" >
                                <div className="logo" onClick={() => scroll.scrollToTop()}>
                                    Portfolio
                                </div>
                            </Links>
                        </div>

                        <div className={this.state.className} id="icon" onClick={this.hiden}>
                            <i className="fa fa-bars fa-3x"></i>
                        </div>
                        
                    </div>
                    <div className="menu">
                        <ul id="nav_ul" className={this.state.hide}>
                            <li>
                                <Link
                                    className="header__menu__item"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={1000}>Home
                                    </Link>
                            </li>
                            <li>
                                <Link
                                    className="header__menu__item"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={600}
                                    to="about">About
                                    </Link>
                            </li>
                            <li>
                                <Link
                                    className="header__menu__item"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={600}
                                    to="services">Services
                                    </Link>
                            </li>
                             <li>
                                <Link
                                    className="header__menu__item"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={600}
                                    to="skills">Skills
                                    </Link>
                            </li>
                             <li>
                                <Link
                                    className="header__menu__item"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={600}
                                    to="contact">Contact
                                    </Link>
                            </li>
       
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}