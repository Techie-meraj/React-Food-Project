import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Card from "./Card";
import Card1 from './Card1';

const Dessert = () => {
    const [meal,setMeal]=useState("")
    const dessert=async()=>{ 
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert`
      );
      const data = await response.json();
      setMeal(data.meals);
    };
   
   useEffect(()=>{
    dessert()
   },[])

   const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

  };


  return (<>
    <h3 className='text-2xl text-center text-teal-300'>Desserts</h3>
    <div className="slider-container w-4/5 h-72 mx-auto mt-10">
      <Slider {...settings}>
        {
         meal ? meal.map((item)=> (
            <Link key={item.idMeal} to={`/foodetails/${item.idMeal}` }><Card1
              key={item.idMeal}
              Name={item.strMeal}
              image={item.strMealThumb}
            /></Link>
          )): <h3>Error</h3>
      }
      </Slider>
    </div>
 </> )
}

export default Dessert