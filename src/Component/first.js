import React, { useState } from "react";

export default function First1()
{

  const[user ,setcount] = useState(0);
  const increment = () => {
    setcount(user +1);
  };


  return(
   <div>
    <h1>counter :{user}</h1>
    <button onClick={increment}> Increment</button>
   </div>
  );
}   

