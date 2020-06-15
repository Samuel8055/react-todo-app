import React, { useContext } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { TodoContext } from "../context/Context";

const TodoItem = ({ item, id }) => {
  const { deleteItemHandler, editItemHandler, editStatus } = useContext(
    TodoContext
  );

  return (
    <li className='d-flex justify-content-between align-items-center list-item'>
      <span>
        {/* <input type='checkbox' className='mr-3' /> */}
        {item.item}
      </span>
      <span className='d-flex'>
        <button
          className='btn edit-btn text-info'
          onClick={() => editItemHandler(id)}
          disabled={editStatus ? true : false}
        >
          <FaPen />
        </button>
        <button
          className='btn trash-btn text-danger'
          onClick={() => deleteItemHandler(id)}
          disabled={editStatus ? true : false}
        >
          <FaTrash />
        </button>
      </span>
    </li>
  );
};

export default TodoItem;
