import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const updateHandler = () => {
        console.log('update');
    }
  return (
    <div>
        <h2>Todos List</h2>
        <ul className='todoList'>
        {todos.map(todo => (
            <li key={todo.id}>
                {todo.text}
                <div>
                <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
                </div>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Todos