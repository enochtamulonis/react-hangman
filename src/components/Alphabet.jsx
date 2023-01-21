import Letter from "./Alphabet/Letter"

function Alphabet({ attempts, selectLetter }) {
  const letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ]

  function onLetterSelected(letter) {
    selectLetter([...attempts, letter])
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-3">
      {letters.map((letter, idx) => (<Letter letter={letter} isUsed={attempts.includes(letter)} onClick={onLetterSelected} key={idx}/>))}
    </div>
  )
}

export default Alphabet 