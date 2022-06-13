import React, { Component } from 'react'
///import Alert from './Alert'
import axios from 'axios'
import { Input, Button, Form  } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email: '',
            subject: '',
            dob:'2002-01-12',
            message: '',
            visible:false
        };
        this.baseState = {emailError:'',passwordError:'' }
    }
    notify = () => toast("Thank you for contacting us; you will get to you in less than 24 hours!");
    notifyError = () => toast.error('Sorry there is technical problem!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      })
    handleChange = e => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value});
    }
    toggle(){
        this.setState({
            visible: !this.state.visible,
        })
    }
    reset = () => {
        this.setState(this.baseState)
    }
    clean = () => {
        this.setState({
            name:'',
            email: '',
            subject: '',
            message: '',
            dob:'2002-01-12',
        })
    }
    saveMsg = async (e) =>{
        e.preventDefault();
        const { name,email, subject,message,dob } = this.state
        await axios.post("https://voicetoworld.herokuapp.com/api/v1/sendMessage",
            {
                name,email, subject,message,dob
            }).then(res => {
                this.reset()
                this.clean();
                this.toggle();
                console.log(res.data)
                if(res.data.status === 200){
                    return toast("Thank you for contacting us; you will get to you in less than 24 hours!")
                }
                return (
                    toast.error('Sorry there is technical problem! please use other meant of contact', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 4000,
                      })
                )
            }).catch(err => {
                this.notifyError();
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
                                        <div className="sub-title"><a href="https://github.com/nkbtemmy" target="_blank" rel="noreferrer">Github</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fa fa-linkedin"></i>
                                    <div className="info">
                                        <div className="head">LinkedIn account</div>
                                        <div className="sub-title"><a href="https://www.linkedin.com/in/emmanuel-nkubito-36b242155/" target="_blank" rel="noreferrer">LinkedIn</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="	fa fa-location-arrow"></i>
                                    <div className="info">
                                        <div className="head">Address</div>
                                        <div className="sub-title"><a href="https://gps-coordinates.org/my-location.php?lat=-1.9499&lng=30.0666" rel="noreferrer" target="_blank"  >Rwanda, Kigali,Kicukiro, Gikondo, KK4Ave</a></div>
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
                            <ToastContainer />
                            <Form action="" onSubmit={this.saveMsg}>
                                <div className="fields">
                                    <div className="field name">
                                        <Input type="text" minlength="3" onChange={this.handleChange} value={this.state.name} name="name" placeholder="Name" required />
                                    </div>
                                    <div className="field email">
                                        <Input type="email" onChange={this.handleChange} name="email" value={this.state.email} placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <Input type="text" minlength="5" onChange={this.handleChange} value={this.state.subject} name="subject" placeholder="Subject" required />
                                </div>
                                <div className="field textarea">
                                    <Input type="textarea"  cols="5Control 0" minlength="10" rows="10" onChange={this.handleChange} value={this.state.message} name="message" placeholder="Message.." required></Input>
                                </div>
                                <div className="button">
                                    <Button color="danger" type="submit">Send message</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            {/* <Alert visible={this.state.visible} toggle={this.toggle.bind(this)}/> */}
            </section>
        )
    }
}
