import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodyItems from "./Component/FoodyItems";
import ErrorMes from "./Component/ErrorMes";







function App() {

  // let foodItems = [];
  let foodItems = ["Pulse", "Green Vegetables", "Milk", "Tomato"];

  // type-1
  // if(foodItems.length === 0) {
  //   return <h1>I am still hungry</h1>
  // }

  // Type-3
  // let emptyMessage =
  // foodItems.length === 0 ? <h1>I am still hungry</h1> : null;
  return (
  
    <>
      <h1>Healthy Food</h1>
      {/* Type-2 */}
       {/* {foodItems.length === 0 ? <h1>I am still hungry</h1> : null} */}

{/* Type-3 */}
       {/* {emptyMessage} */}

       {/* {foodItems.length === 0 && <h1>I am still hungry</h1>} */}
       <ErrorMes itemss={foodItems}></ErrorMes>
        <FoodyItems itemss={foodItems}></FoodyItems>
    </>
  );
}

export default App;
