import React, { useRef } from 'react';
import Card from './Card';
import Carousel from 'react-elastic-carousel';
import react from './../assets/photos/react.png';
import javascripty from './../assets/photos/javascripty.png';
import scss from './../assets/photos/scss.png';
import html from './../assets/photos/html.png';
import preact from './../assets/photos/preact.png';
import node from './../assets/photos/nodejs.png';
import php from './../assets/photos/php.png';
import springboot from './../assets/photos/springboot.png';
import drf from './../assets/photos/drf.png';
import postgres from './../assets/photos/postgres.png';
import mongodb from './../assets/photos/mongodb.png';
import firebase from './../assets/photos/firebase.png';
import mysql from './../assets/photos/mysql.png';
import docker from './../assets/photos/docker.jpg';
import githubAction from './../assets/photos/github-actions.jpg';
import travisCi from './../assets/photos/travis-ci.jpg';

const frontend = [
  {
    src: react,
    name: "Reactjs"
  },
  {
    src: javascripty,
    name: "javascript"
  },
  {
    src: scss,
    name: "s(css)"
  },
  {
    src: html,
    name: "HTML5"
  },
  {
    src: preact,
    name: "Preact"
  }
];

const Skills = () => {
  const carouselRef = useRef(null);

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

const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(1);
    }
  };
  return (
    <section className="skills">
        <h1 className="title">Skills</h1>
        <h2 className="titles">Frontend</h2>
        <div className="flexWrap">
        <Carousel
            ref={carouselRef}
            // pagination={false}
            {...carouselSettings}
            // onNextEnd={({ index }) => {
            //     clearTimeout(resetTimeout);
            //     resetTimeout = setTimeout(() => {
            //         carouselRef?.current?.goTo(0);
            //     }, 3000); // same time
            // }}
            onPrevStart={onPrevStart}
            onNextStart={onNextStart}
            disableArrowsOnEnd={false}
            
        >
            {frontend.map((el, index) => (
            <Card key={index} src={el.src} name={el.name} />
            ))}
        </Carousel>
        </div>
        <h2 className="titles">Backend</h2>
        <div className="flexWrap">
            <Carousel 
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                >
                <Card src={node} name="Nodejs"/>
                <Card src={drf} name="Djang rest framework" />
                <Card src={springboot} name="Spring Boot" />
                <Card src={php} name="PHP" />
            </Carousel>
        </div>
        <h2 className="titles">Databases</h2>
        <div className="flexWrap">
            <Carousel 
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                >
                <Card src={postgres} name="postgreSQL"/>
                <Card src={mongodb} name="MongoDB/mongoose" />
                <Card src={firebase} name="Firebase" />
                <Card src={mysql} name="Mysql" />
            </Carousel>
        </div>
        <h2 className="titles">DevOps</h2>
        <div className="flexWrap">
            <Carousel 
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                >
                <Card src={docker} name="Containerization"/>
                <Card src={githubAction} name="Github Actions" />
                <Card src={travisCi} name="Continuous Integration" />
            </Carousel>
        </div>
      {/* Rest of the code */}
    </section>
  );
};

export default Skills;