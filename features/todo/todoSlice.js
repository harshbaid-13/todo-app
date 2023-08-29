import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  loading: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    editTodo: (state, action) => {
      objIndex = state.todos.findIndex((obj) => obj._id === action.payload._id);
      state.todos[objIndex].title = action.payload.title;
      state.todos[objIndex].description = action.payload.description;
      state.todos[objIndex].status = action.payload.status;
    },
  },
});
export const { loading, setTodos, addTodo, deleteTodo, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
