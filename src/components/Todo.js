import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

const Todo = () => {
  const todos = useSelector((state) => state);

  const [todo, setTodo] = useState("");
  const dispatch = useDispatch()

  const handleSubmit= ()=>{
    
  }
  return (

    <div>
      <div onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          name=""
          id=""
        />
        <button>Add</button>
      </div>
    </div>
  );
};

export default Todo;
