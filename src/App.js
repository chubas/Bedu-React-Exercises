import React from "react"
// import "./styles.css";
import { Tabs, Tab } from './util/Tabs'
import Students from './sesion3/Students'
import StateTimer from './sesion4/StateTimer'
import HooksTimer from './sesion5/HooksTimer'
import RoutedApp from './sesion6/RoutedApp'
import Greetings from './sesion7/Greet'
import Fetcher from './sesion8/Fetch'
import PokemonRouter from "./sesion9/Pokemon"
import Actors from './sesionExtra/Actors'

/*
 * App Component
 * Este es nuestro componente principal, que consiste en Tabs (hechos con hooks y styled components)
 * Cada uno de los componentes contiene los ejercicios hechos en clase
 */
const App = () => {
  return (
    <div className="App">
      <Tabs>
        <Tab title="Componentes de Clase">
          <Students />
        </Tab>
        <Tab title="Timer (estado)">
          <StateTimer />
        </Tab>
        <Tab title="Timer (hooks)">
          <HooksTimer />
        </Tab>
        <Tab title="Router">
          <RoutedApp />
        </Tab>
        <Tab title="Pruebas">
          <Greetings />
        </Tab>
        <Tab title="Fetch">
          <Fetcher />
        </Tab>
        <Tab title="Pokemon">
          <PokemonRouter />
        </Tab>
        <Tab title="GraphQL">
          <Actors />
        </Tab>
      </Tabs>
    </div>
  )
}

export default App