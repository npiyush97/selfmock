import { useEffect, useRef, useState } from "react";

const Timer = ({ number, handlenext }) => {
  const timer = useRef(null);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  function startTimer(duration) {
    timer.current = setInterval(() => {
      let m = parseInt(duration / 60, 10);
      let s = parseInt(duration % 60, 10);
      m = m < 10 ? `0${m}` : m;
      s = s < 10 ? `0${s}` : s;
      setMinutes(m);
      setSeconds(s);
      if (--duration < 0) {
        handlenext();
        clearInterval(timer.current);
      }
    }, 1000);
  }
  useEffect(() => {
    startTimer(30);
    return () => clearInterval(timer.current);
  }, [number, handlenext]);
  return (
    <div>
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
};
export default Timer;
