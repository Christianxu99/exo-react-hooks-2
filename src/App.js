import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const COUNTRIES_WORLD = [
  {
    name :"algerie",
    continent :"afrique",
    img :"https://media.gettyimages.com/vectors/flag-of-algeria-vector-id1063898146?s=2048x2048",
  },
  {
    name :"egypte",
    continent :"afrique",
    img :"https://media.gettyimages.com/vectors/flag-of-egypt-vector-id537287209?s=2048x2048",
  },
  {
    name :"maroc",
    continent :"afrique",
    img :"https://media.gettyimages.com/photos/morocco-flag-picture-id182822520?s=2048x2048",
  },
  {
    name :"argentine",
    continent :"amerique",
    img :"https://media.gettyimages.com/photos/argentina-flag-picture-id1129861116?s=2048x2048",
  },
  {
    name :"bresil",
    continent :"amerique",
    img :"https://media.gettyimages.com/vectors/flag-of-the-brazil-vector-id176430982?s=2048x2048",
  },
  {
    name :"canada",
    continent :"amerique",
    img :"https://media.gettyimages.com/photos/canadian-flag-with-nice-satin-texture-picture-id171263903?s=2048x2048",
  },
  {
    name :"mexique",
    continent :"amerique",
    img :"https://media.gettyimages.com/vectors/flag-of-mexico-vector-id537287305?s=2048x2048",
  },
  {
    name :"cuba",
    continent :"amerique",
    img :"https://media.gettyimages.com/photos/cuba-flag-picture-id1129851123?s=2048x2048",
  },
  {
    name :"japon",
    continent :"asie",
    img :"https://media.gettyimages.com/vectors/flag-of-japan-vector-id537287287?s=2048x2048",
  },
  {
    name :"chine",
    continent :"asie",
    img :"https://media.gettyimages.com/vectors/flag-of-china-vector-id537287169?s=2048x2048",
  },
  {
    name :"inde",
    continent :"asie",
    img :"https://media.gettyimages.com/vectors/flag-of-india-vector-id472317739?s=2048x2048",
  },
  {
    name :"turquie",
    continent :"asie",
    img :"https://media.gettyimages.com/vectors/red-flag-of-turkey-with-white-symbol-vector-id472330089?s=2048x2048",
  },
  {
    name :"finlande",
    continent :"europe",
    img :"https://media.gettyimages.com/vectors/flag-of-finland-with-a-blue-cross-vector-id472317405?s=2048x2048",
  },
  {
    name :"france",
    continent :"europe",
    img :"https://media.gettyimages.com/vectors/flag-of-france-vector-id657672390?s=2048x2048",
  },
  {
    name :"belgique",
    continent :"europe",
    img :"https://media.gettyimages.com/vectors/flag-of-belgium-vector-id483320865?s=2048x2048",
  },
  {
    name :"espagne",
    continent :"europe",
    img :"https://media.gettyimages.com/vectors/flag-of-spain-icon-with-no-background-vector-id176621296?s=2048x2048",
  },

 ]

function App() {
  const [countries, setCountries] = useState(COUNTRIES_WORLD)

  const deleteCountryByName = (name) => {
    const filteredCountries = countries.filter((country) => country.name !== name)
    return setCountries(filteredCountries);
  }

  const findByContinent = (continent) => {
    const filteredContinent = COUNTRIES_WORLD.filter((country) => country.continent === continent)
    return setCountries(filteredContinent);
  }

  const searchByName = (event) => {
    const textValue = event.target.value;
    const filteredCountries = COUNTRIES_WORLD.filter((country) => country.name.includes(textValue)) ;
    return setCountries(filteredCountries);
  }

  return (
    <div>
      <div>
        <span>Recherche : </span>
        <input onChange={(event) => searchByName(event)} />
      </div>
      <button style={{ backgroundColor: "green" }} onClick={() => setCountries(COUNTRIES_WORLD)} >reset</button>
      <button style={{ backgroundColor: "yellow" }} onClick={() => findByContinent("afrique")} >afrique</button>
      <button style={{ backgroundColor: "red" }} onClick={() => findByContinent("amerique")} >amerique</button>
      <button style={{ backgroundColor: "blue" }} onClick={() => findByContinent("asie")} >asie</button>
      <button style={{ backgroundColor: "orange" }} onClick={() => findByContinent("europe")} >europe</button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {countries.map((country, index) => {
          return (
            <div
            key={country.name}
            style={{
              width: "calc((100% / 6) - 20px)",
              margin: "10px",
            }}
            >
              <img src= {country.img} style={{ width: "100%" }}/>
              <div>
                {country.name}
              </div>
              <div>
                {country.continent}
              </div>   
              <button 
                style={{ backgroundColor: "purple" }} 
                onClick={() => deleteCountryByName(country.name)}
              
              >
                supprimez
              </button>



            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
