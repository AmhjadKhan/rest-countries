
import { useEffect, useState } from "react"
import Country from "./Countries/Country";
import './Contries.css';

const Contries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedcountries, setvisitedCountries] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCou = country =>{
     const newVisitedcountries = [...visitedcountries, country]
      setvisitedCountries(newVisitedcountries)
    }

  return (
    <div >
      <h1 className="text-4xl text-center">Countries :{countries.length}</h1>
      <h2 className="text-3xl font-bold">Visited Countries:{visitedcountries.length}</h2>
      <ul>

      </ul>
      <div className="contry-container">
      {
        countries.map(country =>
        <Country
        country={country} handleVisitedCou={handleVisitedCou}>           
        </Country>)
      }
      </div>
      
    </div>
  )
}

export default Contries
