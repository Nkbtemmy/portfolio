import React from 'react'
import PropTypes from 'prop-types';

const Item =({
  title,
  photo,
  link
})=>{
  return (
   <div>
   <h1 className=' text-3xl text-center  font-extrabold '>{title}</h1>
   <div class="hover:animate-pulse  shadow shadow-white border rounded-3xl   hover:shadow-indigo-500/40 relative flex justify-center items-center h-[250px] w-full bg-slate-300 my-0 mx-[15px] text-sm-[4em] border-r-amber-300">
    <img src={photo} className='max-w-full border rounded-3xl h-full'   alt="profile_image" />
    <div className='flex text-center absolute bottom-4 px-2 space-x-auto text-white text-3xl'>
      <button className=" bg-lime-800 mx-auto px-5 border rounded-3xl font-light" ><a href={link} target="_blank" rel="noreferrer">View</a></button>
    </div>
  </div>
   </div>
  )
}

Item.propTypes = {
  title: PropTypes.string,
  photo: PropTypes.string,
  link: PropTypes.string
};
Item.defaultProps = {
  photo:`https://source.unsplash.com/random/500x800?sig=${Math.floor(Math.random() * 999)}`,
  title:"Phantom App",
  link:'https://usequickar.com/'
};

export default Item