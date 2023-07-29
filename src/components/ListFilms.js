import React,{useState,useEffect} from "react";

import axios from "axios";

const ListFilms=()=>{
  const [films,setFilms]=useState(null)
  useEffect(()=>{
    axios.get("http://localhost:3004/films")
    .then(res=>{
      setFilms(res.data)
    })
  },[])
  if(films===null) return null
  
}

export default ListFilms;