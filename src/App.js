import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Form from "./components/Form";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  return (
    <div className='col-md-6 mx-auto app-container'>
      <h3 className='text-center mb-4 title'>Todo App</h3>
      <Form />
      <TodoContainer />
    </div>
  );
};

export default App;
