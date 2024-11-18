import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Card from "./Card";

const Popmeals = () => {
    const [meal,setMeal]=useState("")
    const getpop=async()=>{ 
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=italian`
      );
      const data = await response.json();
      setMeal(data.meals);
    };
   
   useEffect(()=>{
    getpop()
   },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:true,
        autoplay:true,
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
              breakpoint: 900,
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

  return (
    <>
    <h3 className='text-2xl text-center md:text-lg text-teal-300'>Popular Meals</h3>
    <div className="slider-container w-4/5 h-96 mx-auto mt-10 rounded-2xl">
      <Slider {...settings}>
        {
         meal ? meal.map((item)=> (
            <Link key={item.idMeal} to={`/foodetails/${item.idMeal}` }><Card
              key={item.idMeal}
              Name={item.strMeal}
              image={item.strMealThumb}
            /></Link>
          )): <h3>Error</h3>


        }
      </Slider>
    </div>
    </>
  )
}

export default Popmeals