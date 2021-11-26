import { useEffect } from "react";

const Timer = ({ timer, setTimer }) => {
  useEffect(() => {
    const int = setInterval(() => {
      setTimer((prevState) =>
        prevState < 1 ? (prevState = 0) : prevState - 1
      );
    }, 1000);
    return () => clearInterval(int);
  }, []);
  return <h4>{timer} s</h4>;
};

export default Timer;

