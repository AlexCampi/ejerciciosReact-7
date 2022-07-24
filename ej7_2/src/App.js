import { useEffect, useState } from 'react'
import './App.css';

function App() {
  let [planetas, setPlanetas] = useState([])
  let [select, setSelect] = useState("")
  let [planeta, setPlaneta] = useState([])
  let [personajes, setPersonajes] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then((res) => res.json())
      .then((res) => setPlanetas(res.results))
  }, [])

  useEffect(() => {
    fetch(select)
      .then((res) => res.json())
      .then((res) => setPlaneta(res.residents))
  }, [select])

  useEffect(() => {
    Promise.all(planeta.map((url)=> fetch(url)))
    .then((respuesta) => Promise.all(respuesta.map((res)=>res.json())))
    .then((res)=>setPersonajes(res))
  }, [planeta])

  return (
    <>
      <select onChange={(e)=>setSelect(e.target.value)}>
        {planetas.map((planeta, index) => {
          return <option value={planeta.url} key={index}>{planeta.name}</option>
        })}
      </select>

      <ul>
        {personajes.map((personaje, index)=> {return <li key={index}>{personaje.name}</li>})}
      </ul>
    </>
  );
}

export default App;
