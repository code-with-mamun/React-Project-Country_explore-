// App.tsx
import ToggleMessage from "./Chatgpt";
import { Suspense } from "react";
import "./App.css";
import type { countryType } from "./type";
import Countries from "./componentsts/Countries/Countries";
// creat a promise to load data
const countriesPromise = async (): Promise<countryType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
};

function App() {
  return (
    <>
     <ToggleMessage></ToggleMessage>


      <h2>World on the Go....</h2>
      <Suspense fallback={<div>Loading....</div>}>
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </>
  );
}

export default App;
