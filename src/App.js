import './App.css';
import Alphabet from "./components/Alphabet"
import Drawing from "./components/Drawing"
import Letters from "./components/Letters"

import { useEffect, useState } from "react"

function App() {  
  const [secretWord, setWord] = useState("")
  const [attempts, setAttempts] = useState([])

  useEffect(() => {
    fetchNewWord()
  }, [])

  function resetGame() {
    setAttempts([])
    fetchNewWord()
  }

  function fetchNewWord() {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => {
        setWord(data[0])
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  function setupGame() {
    const failedAttempts = attempts.filter( chr => !secretWord.split("").includes(chr) )
    const gameOver = failedAttempts.length == 6
    const gameWon = secretWord.split("").every(letter => attempts.includes(letter))
    console.log(secretWord)
    console.log(attempts, secretWord)
    if (gameOver) {
      return(
        <div className='flex flex-col items-center gap-3'>        
          <p className="text-3xl text-red-500"> Game over you lost </p>
          <button onClick={resetGame} className="bg-green-500 text-green-50 rounded-sm p-2">
            Reset Game
          </button>
        </div>
      )
    } else if (gameWon) {
      return(
        <div className='flex flex-col items-center gap-3'>        
          <p className="text-3xl text-green-500"> Congrats you won the game! </p>
          <button onClick={resetGame} className="bg-green-500 text-green-50 rounded-sm p-2">
            Reset Game
          </button>
        </div>
      )
    } else {      
      return(
        <div className="grid grid-cols-2">
          <Alphabet attempts={attempts} selectLetter={setAttempts} />
          <div className="flex flex-col w-full">
            <Drawing word={secretWord} attempts={attempts}/>
            <Letters word={secretWord} attempts={attempts}/>
          </div>
        </div>
      )
    }
  }

  function showLoader() {
    return (
      <p> Loading up game </p>
    )
  }

  return (
    <div className="w-full p-6">
      <h1 className='text-blue-500 text-4xl text-center my-16'> Hangman </h1>
      {(secretWord != "") ? setupGame() : showLoader() }
    </div>
  );
}

export default App;
