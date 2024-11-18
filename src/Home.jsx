import React from 'react'
import Popmeals from './Popmeals'
import Dessert from './Dessert'

const Home = () => {
  return (<>
       
       <div
      className="bg-cover bg-center h-full"
      style={{ backgroundImage: "url('/pexels-pixabay-326281 (1).jpg')" }}
    >
      <Popmeals/>
      <br/>
      <br/>
      <Dessert/>
     </div> 
     
  </>)
}

export default Home