import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import TodoItem from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <Addtodo></Addtodo>
      <div className="items-container">
        <TodoItem></TodoItem>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
