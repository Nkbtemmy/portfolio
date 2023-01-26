import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import phantom from './../assets/photos/phantom.png'
import quickar from './../assets/photos/quickar.png'
import coucoulearn from './../assets/photos/coucou.png'
import imageRwanda from './../assets/photos/imageRwanda.png'
import ticket_app from './../assets/photos/ticket_app.png'
import awesomity from './../assets/photos/awesomity.png'

let works=[
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
    return (
     <div className=' h-screen justify-around bg-indigo-300 px-8 pt-10 pb-12 space-x-6 '>
      <h1 style={{ textAlign: "center" }} className="my-6 font-black text-3xl text-white">My Work</h1>
      <Carousel breakPoints={breakPoints}>
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
