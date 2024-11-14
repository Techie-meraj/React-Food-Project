import React from 'react'
import { FaSearch } from "react-icons/fa";
import Card from "./Card";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Meals = () => {
    const [country, setCountry] = useState("indian");
  const [meal, setMeal] = useState([]);
  const [category, setCategory] = useState("");
  const getCountries = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
    );
    const data = await response.json();
    setMeal(data.meals);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if(e.target.name==="Category"){
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    let data = await response.json();
    setMeal(data.meals);
    setCategory('');
   }
   else if(e.target.name==="Ingredients"){
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${category}`
    );
    let data = await response.json();
    setMeal(data.meals);
    setCategory('');
   }
    else if(e.target.name==="Meal"){
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`
    );
    let data = await response.json();
    setMeal(data.meals);
    setCategory('');
   };
  
}

   
  useEffect(() => {
    getCountries();
  }, [country]);
  return (
    <div className="w-full max-w-none min-h-screen flex flex-col gap-5 ">
    <div className="w-full flex flex-col gap-3 md:flex-row md:gap-8 items-center border-b-4">
      <form
        className="w-full flex gap-2 justify-center items-center md:w-2/5 text-center pt-4 md:pt-0"
        onSubmit={handleSearch} name="Category"
      >
        <input
          type="text"
          placeholder="Type Category Here .."
          onChange={(e) => setCategory(e.target.value)}
          // value={category}
          className="input input-bordered w-full max-w-xs italic placeholder:italic "
        />
        <button type="submit" className="btn btn-outline btn-info">
          <FaSearch className="text-xl" />
        </button>
      </form>
      <form
        className="w-full flex gap-2 justify-center items-center md:w-2/5 text-center pt-4 md:pt-0"
        onSubmit={handleSearch} name="Ingredients"
      >
        <input
          type="text"
          placeholder="Type Ingredients Here .."
          onChange={(e) => setCategory(e.target.value)}
          // value={category}
          className="input input-bordered w-full max-w-xs italic placeholder:italic "
        />
        <button type="submit" className="btn btn-outline btn-info">
          <FaSearch className="text-xl" />
        </button>
      </form>
      <form
        className="w-full flex gap-2 justify-center items-center md:w-2/5 text-center pt-4 md:pt-0"
        onSubmit={handleSearch} name="Meal"
      >
        <input
          type="text"
          placeholder="Type Name of Meal Here .."
          onChange={(e) => setCategory(e.target.value)}
          // value={category}
          className="input input-bordered w-full max-w-xs italic placeholder:italic "
        />
        <button type="submit" className="btn btn-outline btn-info">
          <FaSearch className="text-xl" />
        </button>
      </form>
      <div className="w-full md:w-3/5 flex justify-center gap-4 py-3 flex-wrap">
        <button
          className="btn btn-outline btn-error text-lg"
          onClick={() => setCountry("indian")}
        >
          Indian
        </button>
        <button
          className="btn btn-outline btn-success text-lg"
          onClick={() => setCountry("chinese")}
        >
          Chinese
        </button>
        <button
          className="btn btn-outline btn-warning text-lg"
          onClick={() => setCountry("italian")}
        >
          Italian
        </button>
        <button
          className="btn btn-outline btn-info text-lg"
          onClick={() => setCountry("British")}
        >
          British
        </button>
        <button
          className="btn btn-outline btn-secondary text-lg"
          onClick={() => setCountry("Canadian")}
        >
          Canadian
        </button>
      </div>
    </div>
    <div className={meal ? `w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-2` : `w-full h-52 flex justify-center text-center items-center`}>
      {meal ? (
        meal.map((item) => (
          <Link key={item.idMeal} to={`/foodetails/${item.idMeal}` }><Card
            key={item.idMeal}
            Name={item.strMeal}
            image={item.strMealThumb}
          /></Link>
        ))
      ) : (
        // <div className="py-3 text-xl place-items-center w-full text-center capitalize sm:col-span-2 lg:col-span-3 xl:col-span-4">
          <>
          Sorry, No Result Found <br /><br /> Try another category
          </>
      )}
    </div>
  </div>
  )
}

export default Meals