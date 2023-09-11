
import { useEffect, useState } from "react"
import Country from "./Countries/Country";
import './Contries.css';

const Contries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])


  return (
    <div >
      <h1 className="text-4xl text-center">Countries :{countries.length}</h1>
      <div className="contry-container">
      {
        countries.map(country =><Country country={country}></Country>)
      }
      </div>
      
    </div>
  )
}

export default Contries
