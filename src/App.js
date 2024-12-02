import "./App.css";
import Counter from "./components/Counter";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserData from './components/UserData';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Counter />,
        },
        {
          path: "/todo",
          element: <TodoList />,
        },
        {
          path: "/user",
          element: <UserData/>},
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
