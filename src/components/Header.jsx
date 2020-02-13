import React from 'react'
import logo from '../logo.svg'
import { FaFilm } from 'react-icons/fa'

export default function Header() {
  return (
    <header>    
      <h1 className="FaFilm">
        <a href="http://www.omdbapi.com/">
          <FaFilm />
        </a>
        <p style={{color: "rgb(97, 219, 251)", fontSize: "12px"}}>
          www.omdbapi.com
        </p>
      </h1> 
      <h1>Open Movie Database</h1>
      <hr style={{marginLeft: "17px"}} />
      <a href="https://www.youtube.com/watch?v=ufodJVcpmps">
        <img className="react-logo" src={logo} alt="react-logo" />
      </a>
      <h2 style={{fontFamily: "Montserrat", color: "purple", marginTop: "14px"}}>
        API
      </h2>    
    </header>
  )
}
