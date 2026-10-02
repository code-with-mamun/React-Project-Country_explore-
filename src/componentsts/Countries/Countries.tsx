// Countries.ts
import { use, useState } from "react";
import type { countryType } from "../../type";
import Country from "../Country/Country";
import './Countries.css'
export interface CountriesProps {
  countriesPromise: Promise<countryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  
  // const [visitedCountries,setVisitedCountries]= useState<countryType[]>([])
  const [visitedCountries,setVisitedCountries] = useState<countryType[]>([]);
  const handleVisitedCountries = (country:countryType):void =>{
     
    if (visitedCountries.includes(country)){
      const remaining = visitedCountries.filter(v => v !==country)
      setVisitedCountries(remaining)
    } else{

      const newVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }
    
  }

  const [visitedFlags,setVisitedFlags] = useState<string[]>([])
  const handleVisitedFlag = (flag:string):void =>{
    
    if (visitedFlags.includes(flag)){
      const remainingFlags = visitedFlags.filter(f => f !== flag)
      setVisitedFlags(remainingFlags)
    } else{
      const newVisitedFlag = [...visitedFlags,flag]
        setVisitedFlags(newVisitedFlag)
    }
    
    }
  
  const countries1 = use(countriesPromise);
  console.log(countries1);
  return (
<div >
      <h2>visited Countries: {visitedCountries.length} </h2>
      <h2>visited Flags: {visitedFlags.length} </h2>
      <h2>Countries: {countries1.length} </h2>

    <div className="countries">
          {countries1.map((iran) => (
          <Country key={iran.ccn3.ccn3} 
          country={iran} 
          handleVisitedCountries={handleVisitedCountries}
          handleVisitedFlag = {handleVisitedFlag}
          ></Country>
        ))}
    </div>
      
    </div>
  );
}
