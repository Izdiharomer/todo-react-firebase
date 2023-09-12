import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import './index.css';
import { Suspense } from 'react';
import Loader from './Loader';

//test

function Todo({todo, handleCompleteTodo, deleteTodo}) {

    const completedStyle = {
        textDecoration: todo.completed ? 'line-through' : 'none',
        
      };

      

  return (
    <Suspense fallback={<Loader />}>
    <li>
        <div className='todo-container'>
            <input onChange={() => handleCompleteTodo(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} className='checkboxButton'/>
            <p onClick={() => handleCompleteTodo(todo)} style={completedStyle}>{todo.text}</p>
            
        </div>
        <button onClick={() => deleteTodo(todo.id)}  className='deleteButton'>{<FaRegTrashAlt/>}</button>
    </li>
    </Suspense>
    
  )
}

export default Todo