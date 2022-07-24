import { useEffect, useState } from 'react'
import './App.css';

//import components
import Cards from './components/Cards';

function App() {
  let [sets, setSets] = useState([])
  let [select, setSelect] = useState("x")
  let [cards, setCards] = useState([])
  useEffect(() => {
    fetch('https://api.magicthegathering.io/v1/sets')
      .then((res) => res.json())
      .then((res) => setSets(res.sets))
  })

  useEffect(() => {
    fetch(`https://api.magicthegathering.io/v1/cards?set=${select}`)
      .then((res) => res.json())
      .then((res) => setCards(res.cards))
  }, [select])


  return (
    <>
      <select onChange={(e) => setSelect(e.target.value)}>
        {sets.map((set, index) => { return <option value={set.code} key={index}>{set.name}</option> })}
      </select>

      <Cards cards={cards} />
    </>
  );
}

export default App;
