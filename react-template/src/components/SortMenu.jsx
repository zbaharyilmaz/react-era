import { useState } from "react";
import menu from "../mock/data";


const SortMenu = () => {
    const [sortKey, setSortKey] = useState("price")
    const sortedMenu=menu.
  return (
    <h1>Sort Menu</h1>
    <div>
        <select onChange={(e)=>setSortKey(e.target.value)}name="" id="">
          <option value="price">Price</option>   
          <option value="name">Name</option>   
        </select>
        <ul>
        {menu.map((item)=>(
                <li key={item.id}>{item.name}--{item.price}$ </li>
            ))
        }
        </ul>
    </div>

  );
};

export default SortMenu;