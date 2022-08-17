import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, expandList }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [productSearch, setProductSearch] = useState("")
  const [onSearch, setSearch] = useState("")
  
let list = [...items]
  function handleCategoryChange(event) {
    setSelectedCategory(event);
  }

  function handleSearchChange(event){
    console.log(event.target.value)
    setSearch(event.target.value)
    setProductSearch(event.target.value)
      }


  let itemsToDisplay = list.filter((item) => {
    if (selectedCategory === "All") return true;

    return (item.category === selectedCategory);
  });

  itemsToDisplay = itemsToDisplay.filter((item) => {
      return (item.name.includes(productSearch));
  });
function addElement(newItem){
 list = [...items, newItem]
 expandList(list)
}
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addElement}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={onSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
