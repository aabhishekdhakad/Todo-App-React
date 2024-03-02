import Singleitem from "./Singleitem";


const FoodyItems = ( {itemss} ) => {

  return (
    <ul className="list-group">
      {itemss.map((item) => (
       <Singleitem key={item} foodItems={item}></Singleitem>
      ))}
    </ul>
  );
};

export default FoodyItems;
