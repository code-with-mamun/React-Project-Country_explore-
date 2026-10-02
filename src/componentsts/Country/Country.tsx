import { useState } from "react";
import type { countryType } from "../../type";
import './Country.css'
export interface CountryProps {
    country: countryType
    handleVisitedCountries:(country:countryType)=> void
    handleVisitedFlag : (flag:string) => void
}

const Country = ({ country,handleVisitedCountries,handleVisitedFlag }: CountryProps) => {
const [visited, setVisited] = useState<boolean>(false)
const handleVisited = () =>{
    // setVisited(true)
    //     if(visited){
    //       setVisited(false)  
    //     } else {
    //         setVisited(true)
    //     }
            setVisited(!visited)
            handleVisitedCountries(country)
 }

    return (
       <div className={`country ${visited ? 'country-visited' : 'country'}`}>
        <h3>{country.name.common}</h3>
        <img src={country.flags.flags.png} alt="" />
        <p>Population:</p>
        <p>Capital:</p>
        <button onClick={handleVisited}>
            {visited? 'Visited':'Did not Visit'}
        </button>
        <button onClick={() =>handleVisitedFlag(country.flags.flags.png)} >Flags</button>
       </div> 
    )
}

export default Country;