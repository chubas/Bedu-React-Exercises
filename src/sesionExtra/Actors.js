/*
 * See https://www.apollographql.com/docs/react/get-started/
 */


import ApolloClient from 'apollo-boost';
import React, { Fragment } from "react"

import { useQuery, ApolloProvider } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Spinner from '../util/Spinner';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/swapi'
})

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
  const { loading, error, data } = useQuery(GET_ACTORS, {
    variables: { first: 5 },
    client
  })

  if (loading) return <p>Loading ...</p>

  return (
    <ApolloProvider client={client}>
      <div>
        { loading && <Spinner /> }
        { !loading && data.allPersons.map((actor) => {
          return (
            <div key={actor.name} >
              <h3>{ actor.name }</h3>
              <ul>
                { actor.films.map((film) => {
                  return (
                    <div key={ film.title }>
                      { film.title } - by { film.director }
                    </div>
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