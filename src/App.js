import React, {useState, useEffect} from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import {  collection, onSnapshot, query, updateDoc, doc, addDoc, deleteDoc } from '@firebase/firestore';

import Todo from './Todo';
import {db} from './firebase';
import { async } from '@firebase/util';



function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [theme, setTheme] = useState('light'); 
  

  
  useEffect( () => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todosArr = []
      QuerySnapshot.forEach((doc)=> {
        todosArr.push({...doc.data(), id: doc.id})
      });
      setTodos(todosArr)
    })

 
    return () => unsubscribe
  }, [])

   

   const handleCompleteTodo = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

 

  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert('Please type a todo here')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    })
    setInput('')
  }

 
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    
    <div className='container' >
      <div>
        <h1>Todo app</h1>
        <form onSubmit={createTodo}>
          <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          type='text'
           placeholder='Add Todo'
           ></input>
          <button type='submit' className='addButton'>  <AiOutlinePlus/> </button>
         
        </form>
        
        <ul>
          {todos.map((todo, index) => (
           
            <Todo key={index} todo={todo} handleCompleteTodo={handleCompleteTodo} deleteTodo={deleteTodo} />

            ))}
        </ul>

        {todos.length < 1 ? null : <p>{`You have ${todos.length} todos`}</p> }
        
        <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
          color: theme === 'light' ? '#000000' : '#ffffff',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {theme === 'light' ? 'Dark mode' : 'Light mode'}
      </button>
        
      </div>
    </div>
    
  );
}

export default App;

