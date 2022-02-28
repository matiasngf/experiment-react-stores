import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { addTodo } from 'store/todo'
import { TodoItem } from './components/TodoItem'

const Page = () => {
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()
  const [formKey, setFormKey] = useState(0)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = e.currentTarget.elements.namedItem('todo') as HTMLInputElement
    const text = input.value
    dispatch(addTodo(text))
    setFormKey(formKey + 1)
  }
  return (
    <div>
      <h2>My todos</h2>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <div>
        <form key={formKey} onSubmit={handleSubmit}>
          <input name='todo' placeholder='Add todo' />
        </form>
      </div>
    </div>
  )
}

export default Page
