import React from 'react'
import logo from '../logo.svg'
import { FaFilm } from 'react-icons/fa'

export default function Header() {
  return (
    <header>
      <h1 className="FaFilm"><FaFilm /></h1>
      <h1>Open Movie</h1>
      <h1 style={{marginLeft: "12px"}}>
        Database
      </h1> 
      <hr style={{marginLeft: "17px"}} />
      <a href="https://www.youtube.com/watch?v=ufodJVcpmps">
        <img className="react-logo" src={logo} alt="react logo" />
      </a>
      <h2 style={{fontFamily: "Montserrat", color: "purple", marginTop: "14px"}}>
        API
      </h2>
    </header>
  )
}
