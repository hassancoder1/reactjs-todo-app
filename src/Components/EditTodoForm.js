import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
  const  [value, Setvalue] = useState(task.task);

  const handleSubmit = e =>{
    e.preventDefault();

    editTodo(value, task.id);

    Setvalue("");
  }

  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className="todo-input" placeholder='Update Task' value={value} onChange={(e) => Setvalue(e.target.value)} />
      <button type="submit" className='todo-btn'>Update</button>
      </form>
    </div>
  )
}

export default EditTodoForm
