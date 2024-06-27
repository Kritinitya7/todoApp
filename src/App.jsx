import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "19/03/2024",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <Addtodo></Addtodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
