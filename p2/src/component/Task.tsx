type Fprops = {
    isChecked: boolean, onClick: () => void, text: string
}

const Task = ({isChecked, onClick, text}: Fprops) => {
  return (
    <div className='cursor-pointer flex items-center m-1 p-1' onClick={onClick}>
        <input type="checkbox" checked={isChecked} className='cursor-pointer'/>
        <label htmlFor="task label" className='ml-2 cursor-pointer' style={isChecked ? {textDecorationLine: "line-through"}: {}}>{text}</label>
    </div>
  )
}

export default Task