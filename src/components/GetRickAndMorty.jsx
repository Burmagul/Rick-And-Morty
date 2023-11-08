import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from "styled-components"
import SearchPage from './SearchPage'


const GetRickAndMorty = () => {

const [get, setGet]=useState([]);
const [error, setError] = useState("");

useEffect(() => {
    const getPost = async () => {
      try {
        const respons = await fetch(
          `https://rickandmortyapi.com/api/character`
        );
        const data = await respons.json();
        setGet(data);
        console.log(data);
      } catch (error) {
        setError (error.massage);
      }
    };
    getPost();
  }, []);


  if (error) {
    return <div>{error}</div>;
  }

  return (

    <Div>
      <SearchPage response={get.results}/>
    <Title>Rick and Morty</Title>

<hr></hr>

        {get.results?.map(( { name, status,gender,image,id} ) => {
          return (

            <div key={id}>
              <TD>{name}</TD>
              <div className={status === "Dead" ? "diet" : "alive"}>status:</div>
              <p>{status}</p> 
              <p>{gender}</p>
              <img src={image} alt='chel'/>
             
            </div>
          );
        })}
      
    
  </Div>
  )
}

export default GetRickAndMorty

const Title=styled.h1`
font-size: 45px;
color: #253342
`
const Div=styled.p`
display: flex;
justify-content: center;
margin-top: 50px;
flex-direction: column;
`

const TD = styled.div`
//   border: 1px solid;
`;

