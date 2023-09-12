
import { useEffect, useState } from "react"
import Country from "./Countries/Country";
import './Contries.css';

const Contries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedcountries, setvisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCou = country =>{
     const newVisitedcountries = [...visitedcountries, country]
      setvisitedCountries(newVisitedcountries)
    }

    const handleVisitedFlag = flag =>{
      const NewVisitedFlag =[...visitedFlag, flag]
      setVisitedFlag(NewVisitedFlag)
    }

  return (
    <div >
      <h1 className="text-4xl text-center">Countries :{countries.length}</h1>
      {/* show country name  */}
      <div>
      <h2 className="text-3xl font-bold">Visited Countries:{visitedcountries.length}</h2>
      <ul>
         {
          visitedcountries.map(country => <li>{country.name.common}</li>)
         }
      </ul>
      </div>
      {/* show flag  */}
      <div className="flag-container">
        {
          visitedFlag.map(flag  => <img key={flag} src={flag}></img>)
        }
      </div>
      

      <div className="contry-container">
      {
        countries.map(country  =>
        <Country key={country.cca3}
        country={country}
         handleVisitedCou={handleVisitedCou}
         handleVisitedFlag={handleVisitedFlag}>           
        </Country>)
      }
      </div>
    </div>
  )
}

export default Contries
