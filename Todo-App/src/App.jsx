import AddTodo from "./Component/AddTodo";
import AppName from "./Component/AppName";
import TodoItem1 from "./Component/Todoitem1";
import TodoItem2 from "./Component/Todoitem2";
import '../src/App.css'



function App() {
  return (
    <center className="todo-container">
      <AppName />
       <AddTodo />
       
       <div className='item-container'>
       < TodoItem1/>
       < TodoItem2/>
       </div>
       

    </center>
  );
}

export default App;
