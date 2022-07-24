import {useEffect, useState} from 'react'
import './App.css';
import Personajes from './components/Personajes';

function App() {
  let [personajes,setPersonajes] = useState([])
  let [next, setNext] = useState('')
  let [prev, setPrev] = useState('')
  let [url,setUrl] = useState('https://rickandmortyapi.com/api/character/')
    
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((res) =>{
          setPersonajes(res.results)
          setNext(res.info.next)
          setPrev(res.info.prev)
        })
      }, [url])
  return (
    <>
      <Personajes personajes={personajes}/>
      <button type='button' disabled={prev===null ?true :false} onClick={()=>setUrl(prev)}>Anterior</button>
      <button type='button' onClick={()=>setUrl(next)}>Siguiente</button>
    </>
  );
}

export default App;
