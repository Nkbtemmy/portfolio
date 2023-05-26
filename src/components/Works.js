import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import phantom from './../assets/photos/phantom.png'
import quickar from './../assets/photos/quickar.png'
import coucoulearn from './../assets/photos/coucou.png'
import imageRwanda from './../assets/photos/imageRwanda.png'
import ticket_app from './../assets/photos/ticket_app.png'
import awesomity from './../assets/photos/awesomity.png'
import ACMS from './../assets/photos/ACMS.png'
import barefoot from './../assets/photos/barefoot.png'
import codehill from './../assets/photos/codehill.png'

let works=[
  {
    photo:ACMS,
    title:"ACMS",
    link:'https://acms-api.amalitech-dev.net/docs'
  },
  {
    photo:codehill,
    title:"HR App",
    link:'https://codehills-hr-app.netlify.app/'
  },
  {
    photo:barefoot,
    title:"Barefoot Normad",
    link:'https://barefoot6.netlify.app/'
  },
  {
    photo:coucoulearn,
    title:"INTSINZI App",
    link:'https://intsinzi.app/'
   },
   {
    photo:quickar,
    title:"quickAR",
    link:'https://usequickar.com/'
   },
  {
   photo:phantom,
   title:"Phantom App",
   link:'https://github.com/atlp-rwanda/cabal-phantom-frontend/'
  },
  {
    photo:imageRwanda,
    title:"Image Rwanda",
    link:'https://image-rwanda-ft-landing-tphg2i.herokuapp.com/'
  },
  {
    photo:awesomity,
    title:"Awesomity APIs",
    link:'https://awesomity-be.onrender.com/api-docs/'
   },
  {
    photo:ticket_app,
    title:"Ticket APP APIs",
    link:'https://github.com/Nkbtemmy/Ticket-App'
   },
 
 ]
export default class Slide extends Component {
   render () {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];
    const carouselSettings = {
      breakPoints: breakPoints,
      enableAutoPlay: true,
      autoPlaySpeed: 3000, // Adjust the duration (in milliseconds) between each slide
      enableInfiniteLoop: true, // Enable infinite looping
  };
    return (
     <div className=' h-screen justify-around bg-indigo-300 px-8 pt-10 pb-12 space-x-6 '>
      <h1 style={{ textAlign: "center" }} className="my-6 font-black text-3xl text-white">My Work</h1>
      <Carousel {...carouselSettings}>
        {
          works.map((work)=>{
            return(
              <React.Fragment key={new Date()}>
                <Item 
                  title={work.title}
                  photo ={work.photo}
                  link ={work.link}
                />
              </React.Fragment>
            )
          })
        }
      </Carousel>
     </div>
    )
  }
}
