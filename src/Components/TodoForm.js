import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const  [value, Setvalue] = useState("");

  const handleSubmit = e =>{
    e.preventDefault();

    addTodo(value);

    Setvalue("");
  }

  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className="todo-input" placeholder='What is the task today?' value={value} onChange={(e) => Setvalue(e.target.value)} />
      <button type="submit" className='todo-btn'>Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm
