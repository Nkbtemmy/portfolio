import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section class="contact" id="contact">
                <div class="max-width">
                    <h2 class="title">Contact me</h2>
                    <div class="contact-content">
                        <div class="column left">
                            <div class="text">Get in Touch</div>
                            <p>In time you want to hire me or cantact me for bussiness my door is always open for you; Here there are ways to reach out to me ; fill free to click one of them. <br/><br/> You will get response in less than 24 hours. <br/> <br/> Your Sincerely;
                             </p>
                            <div class="icons">
                                <div class="row">
                                    <i class="fa fa-user"></i>
                                    <div class="info">
                                        <div class="head">Name</div>
                                        <div class="sub-title"><a href="#contact"> Emmanuel NKUBITO </a></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fa fa-github"></i>
                                    <div class="info">
                                        <div class="head">Github account</div>
                                        <div class="sub-title"><a href="https://github.com/nkbtemmy" target="_blank" rel="noopener noreferrer">Github</a></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fa fa-linkedin"></i>
                                    <div class="info">
                                        <div class="head">LinkedIn account</div>
                                        <div class="sub-title"><a href="https://www.linkedin.com/in/emmanuel-nkubito-36b242155/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="	fa fa-location-arrow"></i>
                                    <div class="info">
                                        <div class="head">Address</div>
                                        <div class="sub-title"><a href="https://gps-coordinates.org/my-location.php?lat=-1.9499&lng=30.0666" rel="opener noreferrer" target="_blank"  >Rwanda, Kigali,Kicukiro, Gikondo, KK4Ave</a></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fa fa-envelope"></i>
                                    <div class="info">
                                        <div class="head">Email</div>
                                        <div class="sub-title"><a href="mailto:emmanuelnkubito2@email.com">nkbtemmy2@gmail.com</a></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fa fa-phone"></i>
                                    <div class="info">
                                        <div class="head">Telephone</div>
                                        <div class="sub-title"><a href="tel:0787311654">+250 787 311 654</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column right">
                            <div class="text">Message me</div>
                            <form action="#">
                                <div class="fields">
                                    <div class="field name">
                                        <input type="text" placeholder="Name" required />
                                    </div>
                                    <div class="field email">
                                        <input type="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div class="field">
                                    <input type="text" placeholder="Subject" required />
                                </div>
                                <div class="field textarea">
                                    <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                                </div>
                                <div class="button">
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
