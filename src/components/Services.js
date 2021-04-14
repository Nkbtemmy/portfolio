import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
                <div className="services" id="services">
                    <div className="max-width">
                        <h2 className="title">My services</h2>
                        <h1 className="titles"> what i provide</h1>
                        <div className="serv-content">
                            <div className="card">
                                <div className="box">
                                    <i className="fa fa-paint-brush"></i>
                                    <div className="text">Web Design</div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="box">
                                    <i className="fa fa-wifi"></i>
                                    <div className="text">Network Engineering</div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                                </div>
                            </div>  
                            <div className="card">
                                <div className="box">
                                    <i className="fa fa-facebook"></i>
                                    <div className="text">Advertising</div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="box">
                                    <i className="fa fa-code"></i>
                                    <div className="text">Apps Develop</div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                                </div>
                            </div>    

                        </div>
                    </div>
                </div>
        )
    }
}
