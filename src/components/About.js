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


                         <div className="text-sm text-slate-700 space-y-4">
  <p> A results-driven software professional passionate about innovative solutions. My experience ranges from backend to full-stack projects, and I'm always eager to adapt to new technologies.</p>
  <p>Throughout my career, I design scalable, efficient, and robust applications. Strong problem-solving and attention to detail ensure high-quality solutions for users and businesses.</p>
  <p>I find joy in collaborating with diverse teams, fostering creative work environments. Constantly seeking opportunities to grow professionally, I thrive in fast-paced settings.</p>
  <p>Whether developing backend systems, architecting full-stack applications, or tackling challenging projects, I commit to delivering excellence and positive impacts through technology.</p>
</div> 

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
