import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div class="column">
                <div class="card">
                    <img src={this.props.src} alt="Avatar" />
                    <div class="container"> 
                        <h3>{this.props.name}</h3> 
                    </div>
                </div>
            </div>
        )
    }
}
