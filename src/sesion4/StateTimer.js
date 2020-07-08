import React from "react"

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
            console.log('Tick ', this.state);
        }, 1000);
    }
    render () {
        return (
            <div>
                <span className="minutes">{ `${this.state.minutes}`.padStart(2, '0') }</span>:
                <span className="seconds">{ `${this.state.seconds}`.padStart(2, '0') }</span>
            </div>
        )
    }
    componentWillUnmount() {
      clearInterval(this.interval)
    }
}
export default Timer