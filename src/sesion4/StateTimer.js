import React from "react"
import './Timer.scss'

/*
 * Este timer utiliza la propiedad `state` definida en el componente de clase.
 * Para modificar el estado, se debe usar el método `setState` en vez de asignar directamente el
 * estado. Esto es para permit que React sepa que el estado ha cambiado y se encarge de marcar al
 * componente para volver a hacer render en el siguiente ciclo, y evitar errores en los que el valor
 * no está actualizado para las funciones que dependen del estado.
 * Observa cómo para modificar el estado, debemos de pasar todas las propiedades que lo componen
 * (seconds, minutes), de otra manera el estado dejará como indefinidos sus valores puesto que
 * reemplaza todo el estado.
 */
class Timer extends React.Component {
    constructor () {
        super()
        this.state = {
            seconds: 0,
            minutes: 0
        }
        this.interval = setInterval(() => {
            let seconds = this.state.seconds;
            let minutes = this.state.minutes;
            if (seconds < 59) {
                seconds = seconds + 1
            } else {
                minutes = minutes + 1
                seconds = 0
            }
            this.setState({
                seconds,
                minutes
            })
            // console.log('Tick ', this.state);
        }, 1000);
    }
    render () {
        /*
         * Para poder mostrar el número con un `0` al inicio en caso de tener un sólo dígito, lo
         * convertimos a string y luego usamos el método `padStart`
         * Ver https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
         */
        return (
            <div className="timer">
                <span className="minutes">{ this.state.minutes.toString().padStart(2, '0') }</span>:
                <span className="seconds">{ this.state.seconds.toString().padStart(2, '0') }</span>
            </div>
        )
    }

    /*
     * Ya que la función `setInterval` se ejecuta constantemente, si el componente es eliminado
     * del DOM (por ejemplo, en un cambio de tab o navegación), es importante indicar al componente
     * que debe de limpiar ese intervalo, de lo contrario veremos un error en el cual se trata de
     * actualizar el estado de un componente que no está en el DOM. Es por esto que debemos limpiar
     * el componente desde el método `componentWillUnmount`
     * Leer https://reactjs.org/docs/state-and-lifecycle.html para más información
     */
    componentWillUnmount() {
      clearInterval(this.interval)
    }
}
export default Timer