import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemCategory, setNewCategory] = useState("Produce")
  const [itemName, setNewItem] = useState("")

  function newCategoryChange(event){
    setNewCategory(event.target.value)
  }
  function newName (event){
    setNewItem(event.target.value)
  }
  function logNewItem(event){
    event.preventDefault();
    const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };
   onItemFormSubmit(newItem)
   }
  
  

  return (
    <form className="NewItem" onSubmit={logNewItem}>
      <label>
        Name:
        <input type="text" name="name" onChange={newName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={newCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
