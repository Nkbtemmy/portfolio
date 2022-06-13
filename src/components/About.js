import React, { Component } from 'react'
import Typed from 'react-typed';
import cv from '../assets/photos/cv.pdf'
import profile from '../assets/photos/profile.png'


export default class About extends Component {
    render() {
        return (
          <div className="about">
            <div className="max-width">
              <h2 className="title">About me</h2>
              <div className="about-content">
                <div className="column left">
                  <img
                    src={profile}
                    alt="my profile pictures"
                    className=" max-w-none"
                  />
                </div>
                <div className="column right">
                  <div className="text">
                    I'm Emmanuel NKUBITO and I'm a &nbsp;
                    <span className="typing-2">
                      <Typed
                        strings={[
                          "  Software Engineer",
                          "  Web Developer",
                          "  Network Engineer",
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                      />
                    </span>
                  </div>
                  <p>
                    And person living in Rwanda,Kigali <br />
                    I'm in the software engineering industry, my daily job
                    involves working with engineers building products and
                    writing code and applying the engineering practices that
                    goes with it. and i'm suitable to Agile methodology. <br />
                    <br />
                    Also i'm Student who is current taking Software and Computer
                    Engineering at University of Rwanda in College of Science
                    and Technology; Focusing mainly on software development .{" "}
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
              </div>
            </div>
          </div>
        );
    }
}
