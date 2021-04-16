import React, { Component } from 'react'
import { Link } from 'react-scroll'

export default class Homes extends Component {
    render() {
        return (
            <div className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Hello, my name is</div>
                        <div className="text-2">Emmanuel NKUBITO</div>
                        <div className="text-3">And I'm a <span>Web Developer</span></div>
                         <Link to="contact" spy={true} smooth={true} offset={-50} duration={700}>Hire me </Link>
                    </div>
                </div>
            </div>
        )
    }
}
