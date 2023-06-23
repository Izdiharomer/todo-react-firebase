import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import './index.css'

function Todo({todo, handleCompleteTodo, deleteTodo}) {

    const completedStyle = {
        textDecoration: todo.completed ? 'line-through' : 'none',
        
      };

      

  return (
    <li>
        <div className='todo-container'>
            <input onChange={() => handleCompleteTodo(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} className='checkboxButton'/>
            <p onClick={() => handleCompleteTodo(todo)} style={completedStyle}>{todo.text}</p>
            
        </div>
        <button onClick={() => deleteTodo(todo.id)}  className='deleteButton'>{<FaRegTrashAlt/>}</button>
    </li>
    
  )
}

export default Todo