import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-col bg-violet-200 h-full w-full overflow-hidden'>
        <div className='flex p-3 items-start bg-violet-950'>
          <div className='min-w-[35%]'>
            <button className='text-white font-bold rounded-md bg-violet-500 p-2 active:bg-violet-400'>Skapa Bingo</button>
          </div>
          <div className="flex overflow-x-auto space-x-3 no-scrollbar">
            {/*Make this part horizontally scrollable and buttons should be added dynamically */}
            <button className='text-white font-bold rounded-md bg-violet-500 p-2 w-10 flex-shrink-0'>1</button>
            <button className='text-white font-bold rounded-md bg-violet-500 p-2 w-10 flex-shrink-0'>2</button>
            <button className='text-white font-bold rounded-md bg-violet-500 p-2 w-10 flex-shrink-0'>3</button>
            <button className='text-white font-bold rounded-md bg-violet-500 p-2 w-10 flex-shrink-0'>4</button>
            <button className='text-white font-bold rounded-md bg-violet-500 p-2 w-10 flex-shrink-0'>5</button>
            <button className='text-white font-bold rounded-md bg-violet-500 p-2 w-10 flex-shrink-0'>6</button>
            <button className='text-white font-bold rounded-md bg-violet-500 p-2 w-10 flex-shrink-0'>7</button>
          </div>
        </div>
        <div className='flex flex-1 justify-center items-center'>
          {/*This part is for the bingo card and it should be added dynamically*/}
          <p>Skapa en ny bingobricka för att börja spela!</p>
        </div>
      </div>
    </>
  )
}

export default App
