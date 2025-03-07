import menu from "../mock/data";
import { useState } from "react";
const SearchMenu = () => {
const [search, setSearch] = useState("")
const filteredMenu=menu.filter(item=>item.name.toLowerCase().includes(search))
  return (

    <div>
        <h4>Search</h4>
        <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <ul>
        {
            menu.map((item)=>(
                <li key={item.id}>{item.name}--{item.price}$ </li>
            ))
        }
        </ul>
    </div>
  );
};

export default SearchMenu;


//