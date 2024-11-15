import React, { useEffect, useRef } from "react";
import cards_data from ".././assets/cards/Cards_data";

function TitleCards({title,catagory}) {
  const cardsRef=useRef();
  const handleWheel = (event) => {
    event.prevenetDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(() => {
    cardsRef.current.addEventListener('wheel' , handleWheel);
  }, [])
  
  return (
    <div className="mt-[50px] mb-[30px]">
      <h2 className="mb-[8px] text-[20px] font-semibold">{title ?title:"Popular On Netflix"}</h2>
      <div className="flex gap-[10px] overflow-x-scroll no-scrollbar" ref={cardsRef}>
        {cards_data.map((item, index) => {
          return (
          <div key={index} className="relative "> 
          <img src={item.image} alt="" className="max-w-[700px] border-[2px] border-transparent rounded-[9px] cursor-pointer  hover:border-gray-300 transition-all duration-200 ease-linear"/>
          <p className="absolute bottom-[10px] right-[20px] text-[20px] ">{item.name}</p>
           </div>);
        })}
      </div>
    </div>
  );
}

export default TitleCards;
