import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="column">
                <div className="card">
                    <img src={this.props.src} alt="Avatar" />
                    <div className="container"> 
                        <h3>{this.props.name}</h3> 
                    </div>
                </div>
            </div>
        )
    }
}
