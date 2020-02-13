import React from 'react'
import Header from './Header'

export default function Popup({ selected, closePopup }) {
  
  return (
    <section className="popup">
      <Header />
      <div className="content">
        <h2>{selected.Title} <span>({ selected.Year })</span></h2>
        <p className="rating"> Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} alt="unavailable" />
          <p>{selected.Plot}</p>
        </div>
        <button className="close" onClick={closePopup}>Close</button>
      </div>
    </section>
  )
}
