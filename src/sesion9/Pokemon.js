import React from 'react'
import { BrowserRouter as Router, Route, useParams } from "react-router-dom"
// Usamos la versión propia de `Link` en vez de la de react-router-dom
import Link from '../util/Link' 
import useFetch from 'react-fetch-hook'
import Spinner from '../util/Spinner'

import './Pokemon.scss'

/*
 * Este componente ejemplifica algunos conceptos vistos, como lo son el router, y hooks para usar
 * APIs externos. En este caso, en vez de hacer el fetch manualmente, usaremos una librería llamada
 * `react-fetch-hook` para simplificar el fetch te nuestra API
 */
const PokemonList = () => {

  // El hook nos facilita mucho la petición y el manejo del estado
  const { isLoading, data } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=150")

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className="pokemon-list">
      <ul>
        {data.results.map((poke) => {
          return (
            <li key={ poke.name }>
              <Link to={ `/pokemon/${ poke.name }` }>
                { poke.name }
              </Link>
            </li>
          )
        })}
      </ul>
      <Route path="/pokemon/:name">
        <Pokemon />
      </Route>
    </div>
  )
}
const Pokemon = () => {
  const { name } = useParams()
  const { isLoading, data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

  const content = isLoading ?
    <Spinner /> :
    (
      <div className="pokemon-data" key={ name }>
        <img src={data.sprites.front_default} alt={ name } />
        <div type="pokemon-type">
          { data.types.map((type) => {
            return (
              <span className={ 'type ' + type.type.name } key={ type.type.name }>
                { type.type.name }
              </span>
            )
          })}
        </div>
      </div>
    )

  return (
    <div className="pokemon">
      { content }
    </div>
  )
}

const PokemonRouter = () => {
  return (
    <div className="pokemon-wrapper">
      <Router>
        <Link to="/pokemon">
          <span className="title">Pokemon</span>
        </Link>
        <Route path="/pokemon">
          <PokemonList />
        </Route>
      </Router>
    </div>
  )
}

export default PokemonRouter
