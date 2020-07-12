/*
 * Este ejemplo muestra cómo utilizar la librería de Apollo para consumir un API de GraphQL,
 * utilizando hooks.
 * Para más información ver https://www.apollographql.com/docs/react/get-started/
 */
import React from 'react'

import ApolloClient, { gql } from 'apollo-boost'
import { useQuery, ApolloProvider } from '@apollo/react-hooks'

import Spinner from '../util/Spinner'
import './Actors.scss'

// Siempre tenemos que definir el cliente de Apollo que usaremos, con el endpoint definido. En este
// caso usaremos un servidor externo (la base de datos de actores de películas), pero normalmente es
// nuesto propio backend
const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/swapi'
})

// Definimos el query que vamos a consumir. Es importante que la firma del query sea soportada por
// el backend, el cual podemos consultar en su documentación.
// Usualmente esto se importa de otro archivo con la extensión .qgl
const GET_ACTORS = gql`
  query getActors($first:Int) {
    allPersons(first:$first) {
      name
      films {
        title
        director
      }
    }
  }
`
const Actors = () => {
  
  // Similar al uso de `useFetch`, el hook de apollo nos permite muy fácilmente consumir la
  // información, y mantener estado de carga (loading) y manejar errores
  const { loading, error, data } = useQuery(GET_ACTORS, {
    variables: { first: 5 },
    client
  })

  if (loading) return <p>Loading ...</p>
  if (error) return <div>Error: { error }</div>

  return (
    <ApolloProvider client={client}>
      <div>
        { loading && <Spinner /> }
        { !loading && data.allPersons.map((actor) => {
          return (
            <div key={actor.name} className="actor-card">
              <h3>{ actor.name }</h3>
              <ul>
                { actor.films.map((film) => {
                  return (
                    <li key={ film.title } className="film">
                      <span className="title">{ film.title }</span>
                      <span className="director">- by { film.director }</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </ApolloProvider>
  )
}

export default Actors