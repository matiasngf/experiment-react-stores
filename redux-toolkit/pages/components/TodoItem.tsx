import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, TodoInterface, toggleTodo } from 'store/todo'

export interface ComponentProps {
  todo: TodoInterface
}

export const TodoItem = ({
  todo: { id, done, text }
}: React.PropsWithChildren<ComponentProps>) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteTodo(id))
  }
  const handleToggleTodo = () => {
    dispatch(toggleTodo(id))
  }
  return (
    <div>
      <div>
        <input type='checkbox' checked={done} onChange={handleToggleTodo} />
      </div>
      <div>{text}</div>
      <div>
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  )
}
