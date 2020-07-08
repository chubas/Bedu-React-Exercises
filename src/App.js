import React from "react"
// import "./styles.css";
import { Tabs, Tab } from './util/Tabs'
import Students from './sesion3/Students'
import StateTimer from './sesion4/StateTimer'
import HooksTimer from './sesion5/HooksTimer'
import RoutedApp from "./sesion6/RoutedApp"

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
          <Students></Students>
        </Tab>
        <Tab title="Timer (estado)">
          <StateTimer></StateTimer>
        </Tab>
        <Tab title="Timer (hooks)">
          <HooksTimer></HooksTimer>
        </Tab>
        <Tab title="Router 1">
          <RoutedApp></RoutedApp>
        </Tab>
        <Tab title="Tab4">
          Tab4
        </Tab>
      </Tabs>
    </div>

  )

}



export default App