import { useEffect, useState } from 'react';
import './style.css'
function Timer({ initHours, initMinutes }) {
    const [hours, setHours] = useState(initHours);
    const [minutes, setMinutes] = useState(() => {
        return initMinutes ? initMinutes : 0;
    });
    const [seconds, setSeconds] = useState(0);
    const [over, setOver] = useState(false);
    const [time, setTime] = useState('00:00:00');
    const [intervalId, setIntervalId] = useState();

    useEffect(() => {
        if(!over){
            const regresiveInterval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
            setIntervalId(regresiveInterval)
            return () => clearInterval(regresiveInterval);
        }
    }, []);

    useEffect(() => {
        if (hours <= 0 && minutes <= 0 && seconds < 0) {
            setOver(true);
            clearInterval(intervalId)
            OverTimeInterval()
        }
        if (!over) {
            regresiveFormat();
        } else {
            overTimeFormat();
        }
        rewriteTime()
    }, [seconds]);

    function rewriteTime(){
        let StringHours =  hours<10?'0'+hours:hours;
        let StringMinutes = minutes<10?'0'+minutes:minutes;
        let StringSeconds = seconds<10?'0'+seconds:seconds;
        setTime(`${StringHours}:${StringMinutes}:${StringSeconds}`)
    }
    function OverTimeInterval(){
        setSeconds(0)
      const newIntervalId = setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 1000);
        setIntervalId(newIntervalId);
    }
    function regresiveFormat() {
        if (seconds < 0 && (hours>0 || minutes>0)) {
            setSeconds(59);
            if (minutes > 0) {
                setMinutes((minutes) => minutes - 1);
            } else if (hours > 0) {
                setMinutes(59);
                setHours((hours) => hours - 1);
            }
        }
        if (minutes < 0 && hours > 0) {
            setMinutes(59);
            setHours((hours) => hours - 1);
        }
    }
    function overTimeFormat() {
        if (seconds == 60) {
            setSeconds(0);
            setMinutes((minutes) => minutes + 1);
        }
        if(minutes == 60){
            setMinutes(0)
            setHours((hours) => hours + 1);
        }
    }
    return (
        <div className={over?'overtime':''}>
            <p>{time}</p>
            {over && <p>Se acabo el tiempo</p>}
        </div>
    );
}

export default Timer;
