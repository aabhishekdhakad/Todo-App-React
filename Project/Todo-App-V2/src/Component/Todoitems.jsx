import Todoitem from "./Todoitem";

const Todoitems = ({ todoItems }) => {
  return(
    <div className="item-container">
        {todoItems.map((item) => (
             <Todoitem todoName={item.name} todoDate={item.dueDate}></Todoitem>
        ))}
    
    <Todoitem todoName="Milk" todoDate="01/12/2024"></Todoitem>
  </div>
  )

};

export default Todoitems;
