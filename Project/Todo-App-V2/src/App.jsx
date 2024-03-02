import AddTodo from "./Component/AddTodo";
import AppName from "./Component/AppName";

import "../src/App.css";
import Todoitems from "./Component/Todoitems";

function App() {
  const todoItems = [
    {
      name: "Milk-Shake",
      dueDate: "29/04/02",
    },
    {
      name: "Amul Lassii",
      dueDate: "18/01/23",
    },
    {
      name: "Cold Drinks",
      dueDate: "04/10/24",
    },
    {
      name: "Pizza",
      dueDate: "12/11/21",
    },
    {
      name: "Burger",
      dueDate: "06/09/22",
    },
    {
      name: "Patize",
      dueDate: "14/01/24",
    },
    {
      name: "Cheese Patice",
      dueDate: "29/02/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Todoitems todoItems={todoItems}></Todoitems>
    </center>
  );
}

export default App;
