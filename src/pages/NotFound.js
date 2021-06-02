import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';

const NotFound = () => {

  const [time, setTime] = useState(5);

  useEffect(() => {
    // const abortCont = new AbortController();
    // const decTime = function() {
    //   let t = time
    //   setTime(--t);
    // }
    // while (time >= 0) {
    //   setTimeout(decTime, 1000)
    // }
    setTime(3);
  }, []);

  return (
    <div className="not-found">
      <h2>That page does not exist</h2>
      <p>Redirecting in {time}</p>
      <p>OR <Link to="/">click here</Link></p>
  </div> 
  );
}

export default NotFound;
