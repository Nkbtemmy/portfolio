import React, { Component } from 'react'
import Typed from 'react-typed';
import cv from '../assets/photos/updatedCV.pdf'
import profile from '../assets/photos/profile2.png'


export default class About extends Component {
    render() {
        return (
          <div className="about">
            <div className="max-width">
              <h2 className="title">About me</h2>
              <div className="about-content">
   
                <div className="column right">
                  <div className="text">
                    Hello; I'm Emmanuel NKUBITO, a &nbsp;
                    <span className="typing-2">
                      <Typed
                        strings={[
                          "  Software Engineer",
                          "  Web Developer",
                          "  Team Lead",
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                      />
                    </span>
                  </div>
                  <p>
                    And person living in Rwanda,Kigali... <br />
                    Who is currently working in the software engineering industry,
                    where my daily responsibilities include collaborating with
                    a team of engineers to design, build, and implement high-quality software products.
                    <br/>
                    Additionally, I am well-versed in Agile methodology and have
                    experience working in Agile development environments. This
                    allows me to work efficiently and effectively in fast-paced and
                    constantly changing environments, delivering value through
                    regular iterations and feedback.{" "}
                  </p>
                  <div className="text-center">
                    <a
                      href="https://resume.io/r/5PtxkUVLr"
                      className="mx-3 bg-dark border border-dark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View My cv &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </a>
                    <a href={cv} download="nkubito's cv" rel="noreferrer">
                      Download my CV
                    </a>
                  </div>
                </div>
                <div className="column">
                  <img
                    src={profile}
                    alt="my profile pictures"
                    className="max-w-none sm:hidden md:block"
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
}
