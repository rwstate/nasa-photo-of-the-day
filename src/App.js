import React, {useState} from "react";
import {useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import axios from "axios";

function App() {
  const todayFull = new Date();
  const today = todayFull.getFullYear() + "-" + todayFull.getMonth() + "-" + todayFull.getDate();
  const [data, setData] = useState({});
  const [newDate, setNewDate] = useState(today);
  const [submit, setSubmit] = useState(true)
  const [colorIndex, setColorIndex] = useState("white")

  const randomFive = () => {
    return Math.floor(Math.random() * 5)
}


  useEffect(() => {
    setColorIndex(randomFive())
  }, [submit]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${newDate}`)
      .then(data => {setData(data.data)})
      .catch(err => console.log(err))
  }, [submit]);

  return (
    <div className="App">
      <Image data={data}/>
      <Header data={data} newDate={newDate} setNewDate={setNewDate}
      setSubmit={setSubmit} submit={submit} colorIndex={colorIndex}/>
    </div>
  );
};

export default App;
