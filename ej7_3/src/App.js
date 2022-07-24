import { useEffect, useState } from 'react'
import './App.css';

function App() {
  let [tipos, setTipos] = useState([])
  let [select, setSelect] = useState("")
  let [pokemon, setPokemon]= useState([])
  useEffect(() => { fetch('https://pokeapi.co/api/v2/type/').then((res) => res.json()).then((res) => { setTipos(res.results) }) })
  useEffect(()=>{ fetch(select).then((res)=> res.json()).then((res)=>{
    let pokemons = res.pokemon
    let pokemonRandom = []
    for (let i = 0; i < 3; i++) {
      pokemonRandom.push(pokemons[Math.floor(Math.random()*pokemons.length)].pokemon.name)
    }
    setPokemon(pokemonRandom)
  })}, [select])
  return (
    <>
    <select onChange={(e)=>setSelect(e.target.value)}>
      {tipos.map((tipo, index) => { return <option key={index} value={tipo.url}>{tipo.name}</option> })}
    </select>

    <ul>
      {pokemon.map((pokemon, index)=>{return <li key={index}>{pokemon}</li>})}
    </ul>
    </>
  );
}

export default App;
