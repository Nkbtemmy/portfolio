import React, { Component } from 'react'
import Typed from 'react-typed';

export default class About extends Component {
    render() {
        return (
                <div className="about" >
                    <div className="max-width">
                        <h2 className="title">About me</h2>
                        <div className="about-content">
                            <div className="column left">
                                <img src="https://res.cloudinary.com/http-voicetoworld-netlify-app/image/upload/v1618775680/my%20pictures/DSCN2362_jdx50v.jpg" alt="my profile pictures"/>
                            </div>
                            <div className="column right">
                                <div className="text">I'm Emmanuel NKUBITO and I'm a &nbsp;
                                  <span className="typing-2">
                                    <Typed
                                        strings={[
                                            '  Software Engineer',
                                            '  Web Developer',
                                            '  Network Engineer']}
                                            typeSpeed={40}
                                            backSpeed={50}
                                            loop = {true}
                                    />
                                    </span>
                                </div>
                                <p>And person living in Rwanda,Kigali <br/>
                                 I'm in the software engineering industry, my daily job involves working with engineers building products and  writing code and applying the engineering practices that goes with it. and i'm suitable to Agile methodology. <br /><br />
                                 Also i'm Student who is current taking Software and Computer Engineering at University of Rwanda in College of Science and Technology; Focusing mainly on software development . </p>
                                <a href="https://drive.google.com/file/d/1SnverdIArno35QaI4OjLA7UMaqnEPu1P/view?usp=sharing"  download>Download my CV </a>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
