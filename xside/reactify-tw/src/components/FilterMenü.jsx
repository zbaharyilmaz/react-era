import menu from "../mock/data";
import React, {useState} from "react";

const FilterMenu = () => {
  const [selectedCategory, setselectedCategory] = useState("All")
  const filteredMenu= selectedCategory==="All"? menu :menu.filter(item=>item.category===selectedCategory)

  return (
    <div>
        <h1>Filter Menü</h1>
        <select onChange={(e)=>setselectedCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Drink">Drink</option>
            <option value="Snack">Snack</option>
            <option value="Dessert">Dessert</option>
        </select>
        <ul>
        {
            filteredMenu.map((item)=>(
                <li key={item.id}>{item.name}--{item.price}$ </li>
            ))
        }
        </ul>
    </div>
  );
};

export default FilterMenu;