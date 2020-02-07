import React, { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Results from './components/Results'


function App() {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {}
  })
  const apiurl = "http://www.omdbapi.com/?apikey=79c5c98b"

  const search = e => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.search).then(({ data }) => {
        let results = data.Search
        
        setState(prevState => {
          return { ...prevState, results: results}
        })
      })
    }  
  }
 
  const handleInput = e => {
    let search = e.target.value
 
    setState(prevState => {
      return { ...prevState, search: search}
    })
  }

  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar handleInput={handleInput} search={search} />
        <Results results={state.results} />
      </main>
    </div>
  )
}

export default App
