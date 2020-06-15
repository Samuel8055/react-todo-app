import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/Context";

const TodoContainer = () => {
  const { items, clearItemsHandler, editStatus } = useContext(TodoContext);

  return (
    <div>
      <h5 className='text-center my-2'>Tasks</h5>

      {items.length > 0 ? (
        <>
          <ul className='list-group'>
            {items.map((item, index) => (
              <TodoItem key={index} item={item} id={item.id} />
            ))}
          </ul>
          <button
            className='btn btn-danger mt-3 d-block mx-auto'
            onClick={clearItemsHandler}
            disabled={editStatus ? true : false}
          >
            Clear all tasks
          </button>{" "}
        </>
      ) : (
        <p className='text-center text-muted mt-4'>No tasks yet! </p>
      )}
    </div>
  );
};

export default TodoContainer;
