import { useState, MouseEvent, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { data, dataType } from './data';
import Task from './component/Task';

function App() {
  const [allTasks, setAllTasks] = useState<dataType[]>(data);
  const [task, setTask] = useState<string>("");
  
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if(!task) return;
    const taskId = uuidv4();
    setAllTasks(prev => [...prev, {id: taskId, text: task, isChecked: false}])
    setTask("");
  }
  const handleCheckUncheck = (t: dataType) => {
    setAllTasks(prev => prev.map((task: dataType) => {
        if(task.id === t.id) return {
          ...task,
          isChecked: !t.isChecked,
        }
        return task;
    }));
  }

  return (
    <>
      <div className="w-1/2 h-full m-auto shadow-md bg-gray-200 p-4">
        <h1 className='w-1/5 m-auto'>Taks Manager</h1>
        <form onSubmit={e => e.preventDefault()} className='flex justify-center mt-4'>
          <input type="text" placeholder='Enter task' value={task} onChange={(e) => setTask(e.target.value)} className='mr-1 p-2 w-4/5 border border-black rounded'/>
          <button onClick={handleButtonClick} className='w-1/5 ml-1 p-2 border border-black rounded bg-sky-100'>Add Task</button>
        </form>
        <div className='h-full flex flex-col'>
        <div className='flex-1'>
          <h2 className='w-1/2 m-auto'>Open Tasks</h2>
          {!allTasks.filter(item => !item.isChecked).length?"No Tasks to Display": null}
          {allTasks.filter(item => !item.isChecked).map((t) => <Task key={t.id} isChecked={false} onClick={() => handleCheckUncheck(t)} text={t.text}/>)}          
        </div>
        <div className='flex-1 '>
          <h2 className='w-1/2 m-auto'>Closed Tasks</h2>
          {!allTasks.filter(item => item.isChecked).length?"No Tasks to Display": null}
          {allTasks.filter(item => item.isChecked).map((item) => <Task key={item.id} isChecked onClick={() => handleCheckUncheck(item)} text={item.text}/>)}          
        </div>
        </div>   
      </div>
    </>
  )
}

export default App
