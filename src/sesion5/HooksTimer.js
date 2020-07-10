import React, { useState, useEffect } from "react"

const Timer = () => {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
  })
  const [active, setActive] = useState(false)
  const useTimer = () => {   
    useEffect(() => {
      let interval ;
      if (active) {
        interval = setInterval(() => {
          setTime({
            seconds: time.seconds < 59 ? time.seconds + 1 : 0,
            minutes: time.seconds < 59 ? time.minutes : time.minutes + 1
          })
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
    }, [active, time.minutes, time.seconds])
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
        <span className="minutes">{ timer.minutes }</span>:
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