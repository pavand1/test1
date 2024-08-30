import { useState, MouseEvent } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState<string>("");

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="w-1/2 h-full m-auto shadow-md bg-gray-200 p-4">
        <h1 className='w-1/5 m-auto'>Taks Manager</h1>
        <form onSubmit={e => e.preventDefault()} className='flex justify-center mt-4'>
          <input type="text" placeholder='Enter task' value={task} onChange={(e) => setTask(e.target.value)} className='mr-1 p-2 w-4/5 border border-black rounded'/>
          <button onClick={handleButtonClick} className='w-1/5 ml-1 p-2 border border-black rounded bg-sky-100'>Add Task</button>
        </form>

        <div>open tasks</div>
        <div>closed tasks</div>
      </div>
    </>
  )
}

export default App
