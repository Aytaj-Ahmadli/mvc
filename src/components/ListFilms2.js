import React from 'react';

import useFetchFilms from '../hooks/useFetchFilms';

const ListFilms2=()=>{
  const {films,pending,success,error,errorMessage}= useFetchFilms()
  return(
    <div>
      <h1>Films with useFetchFilms custom hook</h1>
      {pending === true && <p>films fetching</p>}
      {success === true && films.length > 0 && (
        <>
        {
          {films.map((film) => (
            <div key ={film.id}>
             <h1>{film.name}</h1>
             <p>{film.rate}</p>
             <hr />
            </div>
          ))}
        }
        </>
      )}
      {success === true  && film.length === 0 (<p>kayitli bir film</p>)}
      {error === true && <p style={{color:"red"}}>{errorMessage}</p>}
    </div>
  );
};

export default  ListFilms2;