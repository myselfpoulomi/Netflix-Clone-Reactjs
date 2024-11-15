import React, { useEffect, useRef, useState } from 'react'
import cards_data from ".././assets/cards/Cards_data";
import axios from 'axios';
import { Link } from 'react-router-dom';
function TitleCards4() {
    const cardsRef=useRef();
    const [movielist, setmovielist] = useState([]);
    const handleWheel = (event) => {
      event.prevenetDefault();
      cardsRef.current.scrollLeft += event.deltaY;
    }
    useEffect(() => {
      cardsRef.current.addEventListener('wheel' , handleWheel);
      getTrendingMovies();
    }, []) 

    async function getTrendingMovies() {
        try {
          const Data = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=7f803f6abb22fd06057fed554c09cf75`
          );
    
          setmovielist(Data.data.results);
        } catch (error) {
          console.log(error);
        }
      }
    
    return (
      <div className="mt-[50px] mb-[30px]">
        <h2 className="mb-[8px] text-[20px] font-semibold">Top Picks for You</h2>
        <div className="flex gap-[10px] overflow-x-scroll no-scrollbar" ref={cardsRef}>
          {movielist.map((item, index) => {
            return (
            <Link to={`/player/${item.id}`} key={index} className="relative "> 
            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="" className="max-w-[350px] rounded-[9px] cursor-pointer border-[2px] border-transparent  hover:border-gray-300 transition-all duration-200 ease-linear"/>
            <p className="absolute bottom-[10px] right-[20px] text-[20px]"> {item.original_title}</p>
             </Link>);
          })}
        </div>
      </div>
    );
}

export default TitleCards4