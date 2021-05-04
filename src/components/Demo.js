import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { geolocated } from "react-geolocated";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 51.505,
            longitude: -0.09
        };
    }

    // componentDidMount() {
    //     this.setState({
    //         latitude: this.props.coords.latitude,
    //         longitude: this.props.coords.longitude
    //     })
    // }
    render() {
        return (
            <div>
                <MapContainer center={[this.state.latitude,this.state.longitude]} zoom={1} scrollWheelZoom={true} style={{height:"100vh"}}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[this.state.latitude,this.state.longitude]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>
        )
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Demo);