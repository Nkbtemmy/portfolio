import React, { Component } from 'react'
// import './../assets/styles/styles.scss'
//import './../assets/styles/about.scss'

export default class About extends Component {
    render() {
        return (
            // <div className="section" id="about">
                <div className="about" >
                    <div className="max-width">
                        <h2 className="title">About me</h2>
                        <div className="about-content">
                            <div className="column left">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FK9EBPADwJuA%2Fmaxresdefault.jpg&f=1&nofb=1" alt="my profile pictures"/>
                            </div>
                            <div className="column right">
                                <div className="text">I'm Emmanuel and I'm a <span class="typing-2"></span></div>
                                <p>hello peopele from west side , here is your boy Mr NKUBITO from East side happy to be with you , welcaome hood,,, hello peopele from west side , here is your boy Mr NKUBITO from East side happy to be with you , welcaome hood</p>
                                <a href="https://drive.google.com/file/d/1SnverdIArno35QaI4OjLA7UMaqnEPu1P/view?usp=sharing"  download>Download my CV </a>
                            </div>
                        </div>
                    </div>
                </div>
            // </div> 
        )
    }
}
