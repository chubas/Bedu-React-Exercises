import React, { useState, useEffect } from "react"
import './Timer.scss'

/*
 * En este ejemplo, tenemos un componente funcional (a diferencia del componente en `StateTimer`),
 * además que usamos hooks para cambiar el estado, y para definir el efecto que cambia el estado
 */
const Timer = () => {

  /*
   * Al usar hooks, no usamos directamente la propiedad `state` del componente, sino que
   * encapsulamos esta funcionalidad al definit un hook, el cual nos regresa un `getter` y un 
   * `setter`, en este case, una variable `time` y un método `setTime` que podemos usar para asignar
   * este valor
   * De la misma manera, usamos otro hook de estado para la variable `active`
   * Más información: https://reactjs.org/docs/hooks-state.html
   */
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
  })
  const [active, setActive] = useState(false)

  const useTimer = () => {   

    /*
     * Debido a que nuestro componente actualiza su estado en eventos que no están controlados
     * directamente por un cambio de atributos (en este caso, por el `setInterval` que actualiza
     * constantemente la variable `time), usamos el método `useEffect`. Usar este método tiene dos
     * efectos:
     *   - Previene un loop infinito al sólo mandarse a llamar una vez dentro del ciclo de render
     *     del componente, al indicarle en el segundo parámetro el array con las variables que
     *     cambian (y así prevenir que se ejecute varias veces)
     *   - La función de retorno es la función que hace cleanup, es decir, se ejecuta cuando el
     *     componente es eliminado del DOM
     * Más información https://reactjs.org/docs/hooks-effect.html
     */
    useEffect(() => {
      let interval ;
      if (active) {
        interval = setInterval(() => {
          // Observa la diferencia con el otro ejemplo, cambiando el uso de `if` por
          // operadores ternarios
          const newTime = {
            seconds: time.seconds < 59 ? time.seconds + 1 : 0,
            minutes: time.seconds < 59 ? time.minutes : time.minutes + 1
          }
          setTime(newTime)
          // console.log('Tick', newTime)
        }, 1000)
      } else {
        setTime({
          seconds: 0,
          minutes: 0
        })
        clearInterval(interval)
      }
      return () => {
        clearInterval(interval)
      }
      // Colocamos las variables que cambian para evitar loops infinitos
    }, [active, time.minutes, time.seconds])
    return time;
  }

  const timer = useTimer()

  return (
    // Observa cómo agregamos una clase dependiendo si el timer está activo o inactivo, para poder
    // aplicarle CSS en cada caso
    // También observa cómo podemos definir una función en el parámetro `onClick` y evitar crear
    // una función adicional
    <div>
      <div className={ 'timer ' + (active ? 'active' : 'inactive') }>
        <span className="minutes">{ timer.minutes.toString().padStart(2, '0') }</span>:
        <span className="seconds">{ timer.seconds.toString().padStart(2, '0') }</span>
      </div>
      <div className="timer-controls">
        <button onClick={ () => setActive(true) }>Start</button>
        <button onClick={ () => setActive(false) }>Stop</button>
      </div>
    </div>
  )
}

export default Timer