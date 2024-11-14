import React, { useEffect } from 'react'
import { useState } from 'react'
import {Navigate, useNavigate, useParams} from 'react-router-dom'
import Meals from './Meals'

const Foodetails = () => {
   let Navigate=useNavigate()
    const [meal,setMeal] =useState("")
    const {id}=useParams()
    console.log(id);
    

    const foodinfo = async()=>{
     const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      const data = await response.json();
      setMeal(data.meals[0])
      console.log(meal);
      }

    useEffect(()=>{
      foodinfo()
    },[])

  
    
  return (<>
      <button className="btn btn-accent" onClick={()=>Navigate(-1)}>Go Back</button>
      <div className='main h-full w-full'>
      <div className='img h-[500px] w-[500px] m-auto border-4 rounded-2xl mt-10'>
        <img className='rounded-2xl' src={meal.strMealThumb}/>
      </div>
      <div className='name text-2xl text-center mt-6'><h2>Meal Name:{meal.strMeal}</h2></div>
      
      <div className='instruction p-6 mx-auto border border-blue-500 mt-8'>
        <h3 className='text-2xl text-black text-center m-4'>INSTRUCTIONS</h3>
        <p className=''>{meal.strInstructions}</p>
     </div>
     <div className='instruction p-6 mx-auto border border-blue-500 mt-8'>
     <h3 className='text-2xl text-black text-center m-4'>Ingredients && Measures</h3>
     <div>{ (meal.strIngredient1) ? <div>{meal.strIngredient1}:{meal.strMeasure1}</div>:null } </div>    
     <div>{ (meal.strIngredient2) ? <div>{meal.strIngredient2}:{meal.strMeasure2}</div>:null } </div>    
     <div>{ (meal.strIngredient3) ? <div>{meal.strIngredient3}:{meal.strMeasure3}</div>:null } </div>    
     <div>{ (meal.strIngredient4) ? <div>{meal.strIngredient4}:{meal.strMeasure4}</div>:null } </div>    
     <div>{ (meal.strIngredient5) ? <div>{meal.strIngredient5}:{meal.strMeasure5}</div>:null } </div>    
     <div>{ (meal.strIngredient6) ? <div>{meal.strIngredient6}:{meal.strMeasure6}</div>:null } </div>    
     <div>{ (meal.strIngredient7) ? <div>{meal.strIngredient7}:{meal.strMeasure7}</div>:null } </div>    
     <div>{ (meal.strIngredient8) ? <div>{meal.strIngredient8}:{meal.strMeasure8}</div>:null } </div>    
     <div>{ (meal.strIngredient9) ? <div>{meal.strIngredient9}:{meal.strMeasure9}</div>:null } </div>    
     <div>{ (meal.strIngredient10) ? <div>{meal.strIngredient10}:{meal.strMeasure10}</div>:null } </div>    
     <div>{ (meal.strIngredient11) ? <div>{meal.strIngredient11}:{meal.strMeasure11}</div>:null } </div>    
     <div>{ (meal.strIngredient12) ? <div>{meal.strIngredient12}:{meal.strMeasure12}</div>:null } </div>    
     <div>{ (meal.strIngredient13) ? <div>{meal.strIngredient13}:{meal.strMeasure13}</div>:null } </div>    
     <div>{ (meal.strIngredient14) ? <div>{meal.strIngredient14}:{meal.strMeasure14}</div>:null } </div>    
     <div>{ (meal.strIngredient15) ? <div>{meal.strIngredient15}:{meal.strMeasure15}</div>:null } </div>    
     <div>{ (meal.strIngredient16) ? <div>{meal.strIngredient16}:{meal.strMeasure16}</div>:null } </div>    
     <div>{ (meal.strIngredient17) ? <div>{meal.strIngredient17}:{meal.strMeasure17}</div>:null } </div>    
     <div>{ (meal.strIngredient18) ? <div>{meal.strIngredient18}:{meal.strMeasure18}</div>:null } </div>    
     <div>{ (meal.strIngredient19) ? <div>{meal.strIngredient19}:{meal.strMeasure19}</div>:null } </div>    
     <div>{ (meal.strIngredient20) ? <div>{meal.strIngredient20}:{meal.strMeasure20}</div>:null } </div>    
     
     </div>
     </div>
  
  
  </>
)
}

export default Foodetails