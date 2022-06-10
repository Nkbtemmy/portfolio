// import React from "react";
// import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// // import "./styles.css";
// import img from './../assets/photos/background.jpg'

// let datas = [
//   {
//     src: img,
//     height: 500,
//     author: 'Awesome'
//   },
//   {
//     src: img,
//     height: 500,
//     author: 'Awesome'
//   },
//   {
//     src: img,
//     height: 500,
//     author: 'Awesome'
//   }
// ]
// // let data = [
// //   {
// //     src: `https://source.unsplash.com/random/500x500?sig=${Math.floor(Math.random() * 999)}`,
// //     height: 500,
// //     author: 'Awesome'
// //   }, {
// //     src: `https://source.unsplash.com/random/500x400?sig=${Math.floor(Math.random() * 999)}`,
// //     height: 400,
// //     author: 'Awesome'
// //   }, {
// //     src: `https://source.unsplash.com/random/500x700?sig=${Math.floor(Math.random() * 999)}`,
// //     height: 700,
// //     author: 'Awesome'
// //   }, {
// //     src: `https://source.unsplash.com/random/500x250?sig=${Math.floor(Math.random() * 999)}`,
// //     height: 250,
// //     author: 'Awesome'
// //   }, {
// //     src: `https://source.unsplash.com/random/500x800?sig=${Math.floor(Math.random() * 999)}`,
// //     height: 800,
// //     author: 'Awesome'
// //   }, {
// //     src: `https://source.unsplash.com/random/500x500?sig=${Math.floor(Math.random() * 999)}`,
// //     height: 500,
// //     author: 'Awesome'
// //   }, {
// //     src: `https://source.unsplash.com/random/500x400?sig=${Math.floor(Math.random() * 999)}`,
// //     height: 400,
// //     author: 'Awesome'
// //   }, {
// //     src: `https://source.unsplash.com/random/500x700?sig=${Math.floor(Math.random() * 999)}`,
// //     height: 700,
// //     author: 'Awesome'
// //   }, {
// //     src: `https://source.unsplash.com/random/500x250?sig=${Math.floor(Math.random() * 999)}`,
// //     height: 250,
// //     author: 'Awesome'
// //   }, {
// //     src: `https://source.unsplash.com/random/500x800?sig=${Math.floor(Math.random() * 999)}`,
// //     height: 800,
// //     author: 'Awesome'
// //   }, {
// //     src: `https://source.unsplash.com/random/500x400?sig=${Math.floor(Math.random() * 999)}`,
// //     height: 400,
// //     author: 'Awesome'
// //   }, {
// //     src: `https://source.unsplash.com/random/500x700?sig=${Math.floor(Math.random() * 999)}`,
// //     height: 700,
// //     author: 'Awesome'
// //   }, {
// //     src: `https://source.unsplash.com/random/500x250?sig=${Math.floor(Math.random() * 999)}`,
// //     height: 250,
// //     author: 'Awesome'
// //   }, {
// //     src: `https://source.unsplash.com/random/500x800?sig=${Math.floor(Math.random() * 999)}`,
// //     height: 800,
// //     author: 'Awesome'
// //   }
// // ]

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

// export default function Slide() {
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
//       <div className="App">
//         <Carousel breakPoints={breakPoints}>
//           <Item className="background">
//             <div>
//               Hello
//             </div>
//           </Item>
//           <Item>One</Item>
//           <Item>Two</Item>
//           <Item>Three</Item>
//           <Item>Four</Item>
//           <Item>Five</Item>
//           <Item>Six</Item>
//           <Item>Seven</Item>
//           <Item>Eight</Item>
//         </Carousel>
//       </div>
//     </>
//   );
// }

// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<App />, rootElement);

import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./Item";

export default class Slide extends Component {
  state = {
    items: [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
  }

  render () {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];
    const { items } = this.state;
    return (
     <>
      <h1 style={{ textAlign: "center" }}>My Work</h1>
      <Carousel breakPoints={breakPoints}>
         <Item className="background">One</Item >
         <Item>One</Item>
         <Item>One</Item>
         <Item>One</Item>
         <Item>One</Item>
         <Item>One</Item>
         <Item>One</Item>
         <Item>One</Item>
        {/* {items.map(item => <div key={item.id}>
          <Item>One</Item> 
          
        </div>)} */}
      </Carousel>
     </>
    )
  }
}
