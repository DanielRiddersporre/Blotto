import { useState, useEffect } from 'react';
import './App.css';
import BingoCard from './components/BingoCard';

function App() {

  type BingoCardType = {
    columns: number[][];        // 5 kolumner × 15 nummer
    marked: boolean[][];        // samma dimension, håller markerade nummer
  };
  
  const [bingoCards, setBingoCards] = useState<BingoCardType[]>(() => {
    const saved = localStorage.getItem("bingoCards");
    return saved ? JSON.parse(saved) : [];
  });

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Spara automatiskt i localStorage när bingoCards ändras
  useEffect(() => {
    localStorage.setItem("bingoCards", JSON.stringify(bingoCards));
  }, [bingoCards]);

  const handleCreateBingoCard = () => {
    const newCard = createBingoCard();
    setBingoCards(prev => [...prev, newCard]);
    setCurrentIndex(bingoCards.length);
  };

  // Hantera klick på ett nummer
  const handleToggleNumber = (rowIndex: number, colIndex: number) => {
    if (currentIndex === null) return;

    setBingoCards(prev => {
      const newCards = [...prev];
      const card = { ...newCards[currentIndex] };
      const newMarked = card.marked.map(col => [...col]);
      newMarked[colIndex][rowIndex] = !newMarked[colIndex][rowIndex];
      card.marked = newMarked;
      newCards[currentIndex] = card;
      return newCards;
    });
  };

  return (
    <>
      <div className='flex flex-col bg-violet-200 h-full w-full overflow-hidden'>
        <div className='flex p-3 items-start bg-violet-950'>
          <div className='min-w-[20%]'>
            <button className='text-white font-bold rounded-md bg-violet-500 p-2 w-15 active:bg--400' onClick={handleCreateBingoCard}>+</button>
          </div>
          <div className="flex overflow-x-auto space-x-3 no-scrollbar">
            {bingoCards.map((_, index) => ( 
              <button
                key={index}
                className={`text-white font-bold rounded-md bg-violet-500 p-2 w-10 flex-shrink-0
                  ${currentIndex === index ? 'bg-yellow-400' : ''}`}
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
              <BingoCard 
                columns={bingoCards[currentIndex].columns} 
                marked={bingoCards[currentIndex].marked} 
                onToggle={handleToggleNumber} 
              />
            </div>
          ) : (
            <p>Skapa en ny bingobricka för att börja spela!</p>
          )}
        </div>
      </div>
    </>
  );
}

// Skapar en bingobricka med markeringsstate
function createBingoCard(): { columns: number[][]; marked: boolean[][] } {
  const columns = [
    getUniqueRandomNumbers(15, 1, 15),
    getUniqueRandomNumbers(15, 16, 30),
    getUniqueRandomNumbers(15, 31, 45),
    getUniqueRandomNumbers(15, 46, 60),
    getUniqueRandomNumbers(15, 61, 75)
  ];

  const marked = columns.map(col => col.map(() => false));

  return { columns, marked };
}

// Hjälpfunktion för unika nummer
function getUniqueRandomNumbers(count: number, min: number, max: number): number[] {
  const numbers: number[] = [];
  while (numbers.length < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(num)) numbers.push(num);
  }
  return numbers;
}

export default App;
