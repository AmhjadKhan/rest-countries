import React, { useState } from 'react'
import './contry.css';

export default function Country({country, handleVisitedCou}) {
  // console.log(country)
  const {name, flags,languages,area,capital} = country;
  const [visit, setVisit] = useState(false)

  const handleVisit = () =>{
    setVisit(!visit)
  }

  
  return (
    <div className='country'>
      <h2 className='text-center text-3xl'>Name: {name?.common}</h2>
      <img className='mt-10 flag-image' src={flags.png} alt="" />
      <h2 className='text-center text-2xl'>Name Offi: {name?.official}</h2>
      <h2 className='text-center text-3xl'>Language: {languages?.eng}</h2>
      <h2 className='text-center text-3xl'>Land: {area} Sq</h2>
      <h2 className='text-center text-3xl'>Capital: {capital}</h2>

      <button className='btn btn-secondary' onClick={()=>handleVisitedCou(name?.common)}>Mark Visited</button> <br/>
      <button className='btn btn-primary' onClick={() => handleVisit(country.name.common)}>{visit ? 'visited' : 'Going' }</button>
      {visit ? 'I was visit this country' : 'i want to visit'}
      <br />
      <input className='input mt-10' type="text" placeholder='comment' />
    </div>
  )
}
