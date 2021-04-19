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
                                    <p>I do web design by looking in all angles so that interaction between End-users and platform will be easier.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="box">
                                    <i className="fa fa-wifi"></i>
                                    <div className="text">Network Engineering</div>
                                    <p>I design, build, implement and maintain the computer networks; and make configurations on network.</p>
                                </div>
                            </div>  
                            <div className="card">
                                <div className="box">
                                    <i className="fa fa-code"></i>
                                    <div className="text">Apps Develop</div>
                                    <p>I develop systems and softwares ; so that i make life easier. By beleiving that Imagination is the beginning of creation.</p>
                                </div>
                            </div>    

                        </div>
                    </div>
                </div>
        )
    }
}
