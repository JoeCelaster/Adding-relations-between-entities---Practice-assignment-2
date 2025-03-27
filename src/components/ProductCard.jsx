import React, { useState } from "react";

const ProductCard = ({name, description, image, avgRating, totalRatings}) => {

  const [rating, setRating] = useState(0)
  const [old,setOld] = useState(false)
  const [newAvgRating, setnewAvgRating]= useState(null)

  const handleRate = (e) => {
    setRating(parseInt(e.target.innerText))
    setnewAvgRating(((avgRating * totalRatings) + rating) /(totalRatings+1))
    setOld(true)
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={image} alt="image" />
      <h3>{old ? newAvgRating.toFixed(1) : avgRating.toFixed(1)}</h3>
      <h2>{totalRatings}</h2>
      {[1,2,3,4,5].map((num)=> (
        <button key={num} onClick={handleRate}>{num}</button>
      ))}
    </div>
  );
};

export default ProductCard;
