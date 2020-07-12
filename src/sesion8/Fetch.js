import React, { useState, useCallback } from "react"
import Spinner from "../util/Spinner"

import './Fetch.scss'

// Para hacer más limpio el código, extraemos a constantes las URLs que apuntan a los APIs externos
const DOG_URL = 'https://random.dog/woof.json'
const QUOTE_URL = 'https://api.tronalddump.io/random/quote'

/*
 * En este componente se ejemplifica el uso de datos de un API (puede ser externo como en este caso,
 * pero más comunmente será el propio API de nuestro backend)
 * El componente ejemplifica tres maneras de obtener el mismo resultado, con ligeras variaciones
 * explicadas en cada uno de los métodos de callback
 */
const Fetch = () => {

  // Esta variable nos indicará si las peticiones están cargándose o ya hemos recibido respuesta
  const [isLoading, setLoading] = useState(false)

  // Cada una de estas variables trackea por separado la respuesta a las APIs que usaremos
  const [dogResponse, setDogResponse] = useState()
  const [quoteResponse, setQuoteResponse] = useState()

  /*
   * El hook `useCallback` nos sirve para encapsular funciones que ejecutaremos como respuesta a un
   * evento (de ahí el nombre) y, como todos los hooks, prevenir loops infinitos a la hora de hacer
   * render
   */
  const fetchSequence = useCallback(() => {

    if(isLoading) {
      return
    }
    /*
     * Esta solución utiliza una cadena de promesas, lo cual hace que se haga el primer fetch, y
     * hasta que éste termina se realizará el segundo fetch, es decir, que las peticiones se hacen
     * en secuencia
     */
    setDogResponse(null)
    setQuoteResponse(null)
    setLoading(true)
    fetch(DOG_URL, { method: 'GET' })
      .then(res => res.json())
      .then(res => setDogResponse(res.url))
      .then(() => fetch(QUOTE_URL, { method: 'GET' }))
      .then(res => res.json())
      .then(res => setQuoteResponse(res.value))
      .then(() => setLoading(false))
  }, [isLoading])

  /*
   * Este método es similar al anterior, pero hace uso de async / await. Observa como la función
   * del callback está definida como `async`, lo que nos permite usar la palabra `await` en el
   * cuerpo de la función. Lo que hace el uso de `await` es equivalente a usar una promesa, donde
   * el callback de la promesa es ahora el resultado del await, y todo lo que esté después sucederá
   * hasta que la promesa haya resuelto
   */ 
  const fetchAwait = useCallback(async () => {
    if(isLoading) {
      return
    }
    setDogResponse(null)
    setQuoteResponse(null)
    setLoading(true)
    
    const dogResponse = await fetch(DOG_URL, { method: 'GET' })
    const dogJson = await dogResponse.json() 
    setDogResponse(dogJson.url)

    const quoteResponse = await fetch(QUOTE_URL, { method: 'GET' })
    const quoteJson = await quoteResponse.json()
    setQuoteResponse(quoteJson.value)
    
    setLoading(false)
  }, [isLoading])
  
  /*
   * En este método, las dos promesas se hacen al mismo tiempo. Observa que las dos se definen
   * una después de otra, lo cual hace que se realicen en paralelo puesto que no son parte de la
   * misma cadena de promesas. Al final, se usa el método `Promise.all` para esperar hasta que todas
   * las promesas se hayan cumplido, y hasta entonces se efectúa el resto de la función, en este
   * caso, cambiar la variable que indica que han terminado de cargar
   */
  const fetchParallel = useCallback(() => {
    if (isLoading) {
      return
    }
    setDogResponse(null)
    setQuoteResponse(null)
    setLoading(true)
    const dogPromise = fetch(DOG_URL, { method: 'GET' })
      .then(res => res.json())
      .then(res => setDogResponse(res.url))
    const quotePromise = fetch(QUOTE_URL, { method: 'GET' })
      .then(res => res.json())
      .then(res => setQuoteResponse(res.value))
    Promise.all([dogPromise, quotePromise])
      .then(setLoading(false))
  }, [isLoading])

  return (
    <div className="fetcher">
      <div>
        <button disabled={ isLoading } onClick={ fetchSequence } >Fetch! (Secuencia)</button>
        <button disabled={ isLoading } onClick={ fetchAwait } >Fetch! (Usando await)</button>
        <button disabled={ isLoading } onClick={ fetchParallel } >Fetch! (En paralelo)</button>
      </div>
      <div>
        { isLoading && <Spinner /> }
        { !isLoading && dogResponse && <img src={ dogResponse } alt="dog" /> }
        { !isLoading && quoteResponse && <div className="quote">{ quoteResponse }</div>}
      </div>
    </div>
  )
}

export default Fetch