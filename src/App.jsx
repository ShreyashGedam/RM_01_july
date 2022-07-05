import axios from "axios";
import { useState } from "react"
import "./app.css"


function App() {

  const [url,setUrl] = useState("")
  const [short, setShort] = useState("")

  const change = (url) => {
    // console.log(url)
    axios.post(`https://api.shrtco.de/v2/shorten?url=${url}`)
     .then(function (response) {
      //  console.log(response.data.result.full_short_link);
       setShort(response.data.result.full_short_link)
     })
      .catch(function (error) {
       console.log(error);
     });
  } 

  console.log(short)


  return (
    <div className="App">
      <input placeholder="Enter URL" onChange={e => setUrl(e.target.value)}></input>
      <span style={{marginLeft : "10px"}}><button onClick={() => change(url)}>Convert </button></span>
      <p style={{fontSize : '20px'}}>Shorter Url</p>
      <p>{short}</p>
    </div>
  )
}

export default App
