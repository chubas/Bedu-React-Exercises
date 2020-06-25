import React, { useState, useEffect } from "react"

const Timer = () => {

    const [time, setTime] = useState({
        seconds: 0,
        minutes: 0,
    })
    const [active, setActive] = useState(false)

    const useTimer = () => {   
        useEffect(() => {
            let interval = null;
            if (active) {
                interval = setInterval(() => {
                    const seconds = time.seconds;
                    const minutes = time.minutes;
                    if (seconds < 59) {
                        setTime({
                            seconds: seconds + 1,
                            minutes: minutes
                        })
                    } else {
                        setTime({
                            seconds: 0,
                            minutes: minutes + 1
                        })
                    }
                }, 1000)
            } else {
                clearInterval(null)
                setTime({
                    seconds: 0,
                    minutes: 0
                })
            }
            
            return () => {
                clearInterval(interval)
            }
        }, [active, time.seconds, time.minutes])

        return time;
    }

    const timer = useTimer()
    const start = () => {
        setActive(true)
    }
    const stop = () => {
        setActive(false)
    }

    return (
        <div>
            <div>
                <span className="minutes">{ timer.minutes }</span> : 
                <span className="seconds">{ timer.seconds }</span>
            </div>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
            </div>
        </div>
    )
}

export default Timer