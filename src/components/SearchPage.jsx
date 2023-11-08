import React, { useState } from 'react'

const SearchPage = ({response}) => {
  const [search, setSearch]=useState('')
  const [data,setData] = useState([])
  function renderFn(){
    const updatedData = response?.filter((item)=> {
      return item.name === search
      })
      setData(updatedData)

  }

  return (
    <div>
      <h1>Search Input</h1>
  <input 
  placeholder='search name ...'
  type='text'
 value={search}
 onChange={(e)=> setSearch(e.target.value)}
  /> 

  <button onClick={renderFn}>POISK</button>
 { console.log('work')}

 {data?.map((item) => <p>{item.name}</p>)}



 
    </div>
  )
} 

export default  SearchPage
