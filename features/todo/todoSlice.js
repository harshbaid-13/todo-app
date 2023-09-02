import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  loading: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setLoading: (state, action) => {
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
      const todo = state.todos.findIndex(
        (obj) => obj._id === action.payload._id
      );
      state.todos[todo].title = action.payload.title;
      state.todos[todo].description = action.payload.description;
      state.todos[todo].status = action.payload.status;
    },
  },
});
export const { setLoading, setTodos, addTodo, deleteTodo, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
