import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export interface TodoInterface {
  id: string
  text: string
  done: boolean
}

type TodoState = TodoInterface[]

const initialState: TodoState = [{ id: '0', text: 'Use Redux', done: false }]

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        done: false
      }
      state.push(newTodo)
    },
    toggleTodo: (state, action) => {
      for (const todoIndex in state) {
        if (state[todoIndex].id === action.payload) {
          state[todoIndex].done = !state[todoIndex].done
          break
        }
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state = state.filter((todo) => todo.id !== action.payload)
      return state
    }
  }
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
