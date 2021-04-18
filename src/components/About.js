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
                                <div className="text">I'm Emmanuel and I'm a &nbsp;
                                  <span class="typing-2">
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
                                <p>hello peopele from west side , here is your boy Mr NKUBITO from East side happy to be with you , welcaome hood,,, hello peopele from west side , here is your boy Mr NKUBITO from East side happy to be with you , welcaome hood</p>
                                <a href="https://drive.google.com/file/d/1SnverdIArno35QaI4OjLA7UMaqnEPu1P/view?usp=sharing"  download>Download my CV </a>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
