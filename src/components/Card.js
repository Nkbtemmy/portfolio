import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div class="flexCol">
                <img src={this.props.src} alt="Avatar" />
                <h3>{this.props.name}</h3> 
            </div>
        )
    }
}
