import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {

const{yapılacaklar}=useSelector(state=>state.todoReducer)

  return (
    <div>
      <div>
        {yapılacaklar.map((a) => (
          <TodoItem a={a} key={a.id}
         />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
