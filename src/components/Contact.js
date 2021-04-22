import React, { Component } from 'react'
import axios from 'axios'

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email: '',
            subject: '',
            message: ''
        }
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    saveMsg = async (e) =>{
        e.preventDefault();
        const { name,email, subject,message } = this.state
        await axios.post("https://voicetoworld.herokuapp.com/api/v1/sendMessage",
            {
                name,email, subject,message
            }).then(res => {
                console.log(res.data.saveMessage)
            }).catch(err => {
                console.log('error: ',err);
            });
    }
    render() {
        return (
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contact me</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <div className="text">Get in Touch</div>
                            <p>In time you want to hire me or cantact me for bussiness my door is always open for you; Here there are ways to reach out to me ; fill free to click one of them. <br/><br/> You will get response in less than 24 hours. <br/> <br/> Your Sincerely;
                             </p>
                            <div className="icons">
                                <div className="row">
                                    <i className="fa fa-user"></i>
                                    <div className="info">
                                        <div className="head">Name</div>
                                        <div className="sub-title"><a href="#contact"> Emmanuel NKUBITO </a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fa fa-github"></i>
                                    <div className="info">
                                        <div className="head">Github account</div>
                                        <div className="sub-title"><a href="https://github.com/nkbtemmy" target="_blank" rel="noopener noreferrer">Github</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fa fa-linkedin"></i>
                                    <div className="info">
                                        <div className="head">LinkedIn account</div>
                                        <div className="sub-title"><a href="https://www.linkedin.com/in/emmanuel-nkubito-36b242155/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="	fa fa-location-arrow"></i>
                                    <div className="info">
                                        <div className="head">Address</div>
                                        <div className="sub-title"><a href="https://gps-coordinates.org/my-location.php?lat=-1.9499&lng=30.0666" rel="opener noreferrer" target="_blank"  >Rwanda, Kigali,Kicukiro, Gikondo, KK4Ave</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fa fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title"><a href="mailto:emmanuelnkubito2@email.com">nkbtemmy2@gmail.com</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fa fa-phone"></i>
                                    <div className="info">
                                        <div className="head">Telephone</div>
                                        <div className="sub-title"><a href="tel:0787311654">+250 787 311 654</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">Message me</div>
                            <form action="" onSubmit={this.saveMsg}>
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" onChange={this.handleChange} name="name" placeholder="Name" required />
                                    </div>
                                    <div className="field email">
                                        <input type="email" onChange={this.handleChange} name="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <input type="text" onChange={this.handleChange} name="subject" placeholder="Subject" required />
                                </div>
                                <div className="field textarea">
                                    <textarea cols="30" rows="10" onChange={this.handleChange} name="message" placeholder="Message.." required></textarea>
                                </div>
                                <div className="button">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
