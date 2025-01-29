import React from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";


const TodoItem = ({a}) => {


  return (
    <div
      style={{
       backgroundColor:a.completed? "green":"pink",
       textDecoration:a.completed? "line-through":"none",     
       borderRadius: "5px",
      }}
      className="todo-list"
    >
      <h2 className="todoText">{a.task}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
// onClick={()=>degistir()}
      
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
     // onClick={()=>degistir()}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
