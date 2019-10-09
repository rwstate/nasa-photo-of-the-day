import React, {useState} from "react";
import {useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(data => {setData(data.data); console.log(data.data)})
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <Image data={data}/>
      <Header data={data} />
    </div>
  );
};

export default App;
