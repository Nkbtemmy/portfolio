import React, { Component } from 'react'
import Alert from './Alert'
import axios from 'axios'
import { Input, Button, Form  } from 'reactstrap';

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email: '',
            subject: '',
            message: '',
            visible:false
        }
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    toggle(){
        this.setState({
            visible: !this.state.visible,
        })
    }
    clean = () => {
        this.setState({
            name:'',
            email: '',
            subject: '',
            message: '',
        })
    }
    saveMsg = async (e) =>{
        e.preventDefault();
        const { name,email, subject,message } = this.state
        await axios.post("https://voicetoworld.herokuapp.com/api/v1/sendMessage",
            {
                name,email, subject,message
            }).then(res => {
                this.toggle();
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

                            <Form action="" onSubmit={this.saveMsg}>
                                <div className="fields">
                                    <div className="field name">
                                        <Input type="text" minlength="3" onChange={this.handleChange} name="name" placeholder="Name" required />
                                    </div>
                                    <div className="field email">
                                        <Input type="email" onChange={this.handleChange} name="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <Input type="text" minlength="5" onChange={this.handleChange} name="subject" placeholder="Subject" required />
                                </div>
                                <div className="field textarea">
                                    <Input type="textarea"  cols="5Control 0" minlength="10" rows="10" onChange={this.handleChange} name="message" placeholder="Message.." required></Input>
                                </div>
                                <div className="button">
                                    <Button color="danger" type="submit" onClick={this.clear}>Send message</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            <Alert visible={this.state.visible} toggle={this.toggle.bind(this)}/>
            </section>
        )
    }
}
