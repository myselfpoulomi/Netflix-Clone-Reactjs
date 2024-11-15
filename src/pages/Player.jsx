import React, { useEffect, useState } from "react";
import back_arrow_icon from "./../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
  const {id}=useParams();
  const navigate=useNavigate();
  const [apiData, setapiData] = useState ({
    name:"",
    key:"",
    published_at:"",
    type:""
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDYwZGIwNWJhYzJiYzQxNzAyMjgyZWFmNDJlMmMwOCIsIm5iZiI6MTczMTIzMDYxMS4zNTA2OTczLCJzdWIiOiI2NzIyOTYxYjE4ODI3YTkzMjlmMTg2ZjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8b29TRJBWTIWfJeTwfOcPSh_SP0xHZvug_Pi2n1HBQo",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setapiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <img
        src={back_arrow_icon}
        alt=""
        className="absolute top-[20px] left-[50px] w-[50px] cursor-pointer"
        onClick={()=>{navigate(-1)}}
      />
      <iframe
        src={`https:www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameborder="0"
        allowFullScreen
        width="90%"
        height="90%"
        className="rounded-[10px]"
      ></iframe>
      <div className="flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
