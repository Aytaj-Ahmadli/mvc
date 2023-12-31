import { useState, useEffect } from 'react';
import axios from "axios";

const useFetchFilms=()=>{
  const[films,setFilms]=useState(null);
  const[pending,setPending]=useState(true);
  const[error,setError]=useState(false);
  const[success,setSuccess]=useState(false);
  const[errorMessage,setErrorMessage]=useState("");


  useEffect(()=>{
    axios.get("http://localhost:3004/films")
    .then(res=>{
      setTimeout(()=>{
        setPending(()=>{
          setPending(false)
      setSuccess(true)
      setFilms(res.data)
        },5000);
      })
    })
    .catch(err=>{
      setTimeout(()=> {
        setPending(false)
      setError(true)
      setErrorMessage("Film verilerini cekerken");
      },5000);
      });
     
    })
  },[])

  return{films,pending,error,success,errorMessage}
};
export default useFetchFilms;
