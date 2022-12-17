import logo from './logo.svg';
import { useState,useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component"
import { getApis } from './helpers/getApi';
import './App.css';

function App() {
  const[usuarios,getUsuarios]=useState([]);
  const[noMore,setNomore]=useState(true)
  const[page,setPage]=useState(20)
 useEffect(()=>{
  getApis().then((response)=>getUsuarios(response.results))
 },[])


 const fetchComments = async()=>{
  const res= await fetch(`https://pokeapi.co/api/v2/ability/?limit=${page}`)
  const data = await res.json()
  return data.results
 }

 const fetchData = async()=>{
    const server = await fetchComments();
    getUsuarios([...usuarios,...server])
 if(server.length === 0){
  setNomore(false)
 }
 setPage(page+20)
 }



  return (
    <InfiniteScroll
    dataLength={usuarios.length}
    next={fetchData}
    hasMore={noMore}
    loader={<h4>Cargando...</h4>}
    endMessage={
      <p style={{textAling:"center"}}>
        <b>Listo lo lograste</b>
      </p>
    }
    >
      {usuarios.map((items,index)=>(
        <>
        <img loading='lazy' 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`} alt="imagenes" height="250" width="350"/>
        <h1>{items.name}</h1>
        </>
      ))}

    </InfiniteScroll>
  );
}

export default App;
