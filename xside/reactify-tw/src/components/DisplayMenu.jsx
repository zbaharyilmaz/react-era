import menu from "../mock/data";

const DisplayMenu = ({id,name,category, price}) => {
  return (
    <div>
        <h1>Menü</h1>
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

export default DisplayMenu;


