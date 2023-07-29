import React from "react";

import useFetchFilms from "../hooks/useFetchFilms";

const Header = () =>{
  const {success,films}=useFetchFilms()
  return(
    <header>
      <p>Film Sayisi: {success === true &&}</p>
    </header>
  )
}
export default Header;