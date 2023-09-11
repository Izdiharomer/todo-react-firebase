import React, {useState, useEffect} from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import {  collection, onSnapshot, query, updateDoc, doc, addDoc, deleteDoc } from '@firebase/firestore';
import Todo from './Todo';
import {db} from './firebase';
import { async } from '@firebase/util';
import { useTranslation } from 'react-i18next';
import './translation.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [theme, setTheme] = useState('light'); 
  
const { t, i18n } = useTranslation();
const changeLanguage = lng => {
  i18n.changeLanguage(lng);
};


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
    <div className='test'>
      <div>
  <input
    id="language-toggle"
    placeholder="tr"
    className="check-toggle check-toggle-round-flat"
    type="checkbox"
    onChange={(e) => {
      const languageText = document.getElementById('language-text'); 
      if (e.target.checked) {
        changeLanguage('tr'); 
        languageText.style.color = 'white'; 
      } else {
         
        languageText.style.color = ''; 
      }
    }}
  />
  <label for="language-toggle"></label>
  <span id="language-text" className="on">Tr</span>
  
</div>

    <div className='container' >
      <div className='sub_container'>

        <h1>{t("title")}</h1>
        <form onSubmit={createTodo}>
          <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          type='text'
           placeholder={t('placeholder')}
           ></input>
          <button type='submit' className='addButton'>  <AiOutlinePlus/> </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} handleCompleteTodo={handleCompleteTodo} deleteTodo={deleteTodo} />
            ))}
        </ul>
        {todos.length === 0 ? <p>{t("message")}</p> : <p>{t('app.todos', { count: todos.length })}</p>}
        <br/>
        <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
          color: theme === 'light' ? '#000000' : '#ffffff',
          padding: '2%',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
         {theme === 'light' ? t('dark-mode') : t('light-mode')}
      </button>
        
      </div>
    </div>
    </div>

  );
}

export default App;

