import { useEffect, useState } from "react";

const Timer = () => {
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        const int = setInterval(() => {
          setTimer((prevState) => prevState - 1);
        }, 1000);
        return () => clearInterval(int);
      }, []);
    return (
        <h4>{timer} secondes</h4>
    );
}

export default Timer;