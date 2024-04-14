import { useState } from 'react'
import './App.css'

const TravelDestinationApp = () => {
const [continent, setContinent] = useState('');
const [destination, setDestination] = useState('')
const [display, setDisplay] = useState("block")

  const questions = {
    question: "Select Your Preferred Continent:",
    options: {
      Asia: ["Japan", "Thailand", "India"],
      Europe: ["France", "Italy", "Spain"],
      "North America": ["USA", "Canada", "Mexico"],
    },
  };

  const submitHandler = () => {
    setDisplay("none")
  }

  return(
    <div>
    <h1>Travel Destination App</h1>
    <section style={{display: display}}>
      <label>{questions.question}</label>
      <select onChange={(event)=>setContinent(event.target.value)}>
      <option value="">--Select Continent--</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="North America">North America</option>
      </select>
      <br/><br/>
      {
        continent && (
          <section>
          <label>Select Your preferred Destination:</label><br/>
            {questions.options[continent].map((option, i )=>(
            <div key={i}>
               <input type='radio'
                 value={option}
                 name={`question`}
                 onChange={(event)=> setDestination(event.target.value)}/>
              {option}
            </div>
            ))}
          </section>
        )
      }
          <br/>
          <button onClick={submitHandler}>Submit</button>
    </section>
      {display !== "block" && (
        <section>
          <h3>Thank You for Sharing Your Preference!</h3>
          <p>Preferred Continent: {continent}</p>
          <p>Preferred Destination: {destination}</p>
        </section>
      )}
    </div>
  )
}


const MusicPreferenceApp = () => {
  const [genre, setGenre] = useState('')
  const [subGenre, setSubGenre] = useState('')
  const [display, setDisplay] = useState("block")

  const questions = {
    question: "Which type of music do you prefer?",
    options: {
      Rock: ["Classic Rock", "Alternative Rock", "Indie Rock"],
      Pop: ["Pop Rock", "Synth-pop", "Electropop"],
      "Hip Hop": ["East Coast Hip Hop", "West Coast Hip Hop", "Trap Music"],
    },
  };

  const submitClickHandler = () => {
    setDisplay("none")
  }

  return(
    <div>
       <h1>Music Preference App</h1>
      <section style={{display: display}}>
      <label>{questions.question}</label>
      <select onChange={(event)=>setGenre(event.target.value)}>
        <option value="">--Selelct Genre--</option>
        <option value="Rock">Rock</option>
        <option value="Pop">Pop</option>
        <option value="Hip Hop">Hip Hop</option>
      </select>
      <br/><br/>
      {genre && (
        <section>
           <label>Select Your Prefered Subgenre:</label>
          {questions.options[genre].map((option, i)=>(
          <div key={i}>
          <input type='radio'
            value={option}
            name='question'
            onChange={(event)=>setSubGenre(event.target.value)}/>
          {option}
          </div>
          ))}
        </section>
      )}
      <br/>
       <button onClick={submitClickHandler}>Submit</button>
        </section>
      {display != "block" && (
      <>
        <h3>Thank You for Sharing Your Preference!</h3>
        <p>Selected Genre: {genre}</p>
        <p>Selected Sub Genre: {subGenre}</p>
      </>
      )
      }
      
    </div>
  )
}


export default function App() {
  return (
    <main>
      <TravelDestinationApp/>
      <MusicPreferenceApp/>
    </main>
  )
}
