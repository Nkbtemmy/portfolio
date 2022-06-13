import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="flexCol hover:animate-bounce">
                <img src={this.props.src} alt="Avatar_picture" />
                <h3>{this.props.name}</h3> 
            </div>
        )
    }
}
