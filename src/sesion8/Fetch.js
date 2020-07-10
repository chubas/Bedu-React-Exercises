import React, { useState, useCallback } from "react"
import Spinner from "../util/Spinner"

const DOG_URL = 'https://random.dog/woof.json'
const QUOTE_URL = 'https://api.tronalddump.io/random/quote'

const Fetch = () => {
  const [isLoading, setLoading] = useState(false)

  const [dogResponse, setDogResponse] = useState()
  const [quoteResponse, setQuoteResponse] = useState()

  const fetchSequence = useCallback(() => {
    if(isLoading) {
      return
    }
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

  return (
    <div>
      <div>
        <button disabled={ isLoading } onClick={ fetchSequence } >Fetch! (Secuencia)</button>
        <button disabled={ isLoading } onClick={ fetchParallel } >Fetch! (En paralelo)</button>
        <button disabled={ isLoading } onClick={ fetchAwait } >Fetch! (Usando await)</button>
      </div>
      <div>
        { isLoading && <Spinner /> }
        { !isLoading && dogResponse && <img src={ dogResponse } alt="dog" style={{ maxWidth: 500, maxHeight: 500 }}/> }
        { !isLoading && quoteResponse && <div className="quote">{ quoteResponse }</div>}
      </div>
    </div>
  )
}

export default Fetch