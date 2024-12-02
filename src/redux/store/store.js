import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "../features/counter/counterSlice";
import todoReduce from "../features/todo/todoSlice";
import userReduce from './../features/user/userSlice';
export default configureStore({
  reducer: {
     counter: counterReduce, 
     todos: todoReduce ,
     users : userReduce
    },
});
