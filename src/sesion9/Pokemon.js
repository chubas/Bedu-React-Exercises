import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, useParams } from "react-router-dom"
import Link from '../util/Link'
import useFetch from 'react-fetch-hook'

const PokemonList = () => {
  const { isLoading, data } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=150")
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Fragment>
      <Route path="/pokemon/:name">
        <Pokemon />
      </Route>
      <ul>
        {data.results.map((poke) => {
          return (
            <li key={poke.name}>
              <Link to={ `/pokemon/${poke.name}` }>
                { poke.name }
              </Link>
            </li>
          )
        })}
      </ul>
    </Fragment>
  )
}
const Pokemon = () => {
  const { name } = useParams()
  const { isLoading, data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Fragment>
      <img src={data.sprites.front_default} alt={name} />
    </Fragment>
  )
}

const PokemonRouter = () => {
  return (
    <Router>
      <Link to="/pokemon">
        <h3>Pokemon</h3>
      </Link>
      <Route path="/pokemon">
        <PokemonList />
      </Route>
    </Router>
  )
}

export default PokemonRouter
