import React, { Component } from 'react'
import {Container, Alert as Alerts} from 'reactstrap'


export default class Alert extends Component {  
    render() {
        return (
            <Container className="centered">
            <Alerts color="primary"  isOpen={this.props.visible} toggle={this.props.toggle}  >Thank you for cantacting Us !!!</Alerts> 
            </Container>
        )
    }
}
