import React from 'react'

const Card1 = ({image, Name}) => {
  return (
    <div  className="h-[200px] border w-[200px] overflow-hidden rounded-3xl mx-auto">
    <div className="h-full object-cover w-full overflow-hidden border border-white">
      <img
        src={image}
        alt={Name}
        className="h-full w-full object-contain transition-all hover:scale-110 cursor-pointer"
      />
    </div>
   </div>
  
  )
}

export default Card1