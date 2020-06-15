import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

const TodoProvider = (props) => {
  const [item, setItem] = useState("");
  const [id, setId] = useState(uuidv4());
  const [items, setItems] = useState(() => {
    const localData = localStorage.getItem("items");
    return localData ? JSON.parse(localData) : [];
  });
  const [editStatus, setEditStatus] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id,
      item,
      isCompleted: false,
    };

    if (newTodo.item === "") {
      alert("Please add a task!");
    } else {
      const updatedItems = [...items, newTodo];
      setItems(updatedItems);
      setItem("");
      setId(uuidv4());
      setEditStatus(false);
    }
  };

  const changeHandler = (e) => {
    setItem(e.target.value);
  };

  const deleteItemHandler = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const clearItemsHandler = () => {
    setItems([]);
  };

  const editItemHandler = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    const editableItem = items.find((item) => item.id === id);

    setItems(filteredItems);
    setItem(editableItem.item);
    setEditStatus(true);
  };

  /* const handleCompleted = (id) => {
    const targetItem = items.find((item) => item.id === id);
    targetItem.isCompleted = !targetItem.isCompleted;
  }; */

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <TodoContext.Provider
      value={{
        changeHandler,
        submitHandler,
        items,
        item,
        editStatus,
        deleteItemHandler,
        clearItemsHandler,
        editItemHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
