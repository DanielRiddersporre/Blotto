import { useState } from 'react'
import './App.css'

function App() {
  const [bingoCards, setBingoCards] = useState<number[][]>([])
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  const createBingoCard = () => {
    const newBingo = Array.from({length: 5}, () =>
      Math.floor(Math.random() * 75) + 1
    )
    setBingoCards(prev => [...prev, newBingo])
    setCurrentIndex(bingoCards.length)
  }

  return (
    <>
      <div className='flex flex-col bg-violet-200 h-full w-full overflow-hidden'>
        <div className='flex p-3 items-start bg-violet-950'>
          <div className='min-w-[35%]'>
            <button className='text-white font-bold rounded-md bg-violet-500 p-2 active:bg-violet-400' onClick={createBingoCard}>Skapa Bingo</button>
          </div>
          <div className="flex overflow-x-auto space-x-3 no-scrollbar">
            {bingoCards.map((_, index) => ( 
              <button
                key={index}
                className={`text-white font-bold rounded-md bg-violet-500 p-2 w-10 flex-shrink-0
                  ${currentIndex === index ? 'bg-violet-700' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                {index+1}
              </button>
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-center items-center'>
          {currentIndex !== null ? (
            <div>
              {/* Här kan du rendera din Bingo-komponent senare */}
              <p>Bingobricka #{currentIndex + 1}:</p>
              <p>{bingoCards[currentIndex].join(', ')}</p>
            </div>
          ) : (
            <p>Skapa en ny bingobricka för att börja spela!</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App
