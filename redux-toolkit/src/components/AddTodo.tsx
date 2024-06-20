import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch()
    const inputField = useRef(null);
   useEffect(()=>{
    inputField.current.focus();
    inputField.current.style.outline = 'none'
    inputField.current.style.border = '1px solid #ccc'
    inputField.current.style.fontSize = '1em'
    inputField.current.style.padding = '0.6em 1.2em'
    inputField.current.style.borderRadius = '8px'
   },[input])
    

    const addTodoHandler = (e)=>{
        e.preventDefault();
        if(!input) return;
        dispatch(addTodo(input))
        setInput('')
        inputField.current.focus();

    }
  return (
    <form onSubmit={addTodoHandler}>
        <input 
        ref={inputField} 
        type="text" 
        placeholder='Add todo' 
        value={input} 
        onChange={(e)=> setInput(e.target.value)} />
        <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodo