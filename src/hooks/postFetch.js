import { useState, useEffect } from 'react'

const useFetch = (url, data) => {
  console.log(url, data);
  // const [isPending, setIsPending] = useState(true)
  // const [error, setError] = useState(null)

  // useEffect(() => {
    console.log('effect');
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    
    var raw = JSON.stringify(data);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
    .then(res => {
      if (!res.ok) { // error coming back from server
        throw Error('could not fetch the data for that resource')
      } 
      return res.json()
    })
    .then(data => {
      console.log('SUCCESS');
      // setIsPending(false)
      // setError(null)
    })
    .catch(err => {
      // setIsPending(false)
      // setError(err.message)
    })

  // }, [url, data])

  // return { isPending, error };
}
 
export default useFetch;