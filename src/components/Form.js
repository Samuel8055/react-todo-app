import React, { useContext, useRef, useEffect } from "react";
import { TodoContext } from "../context/Context";

const Form = () => {
  const { item, editStatus, changeHandler, submitHandler } = useContext(
    TodoContext
  );

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className='col-md-10 mx-auto mt-4'>
      <form className='d-flex justify-content-center' onSubmit={submitHandler}>
        <div className='form-group w-100'>
          <input
            type='text'
            className='form-control'
            placeholder='Add a new task...'
            value={item}
            onChange={changeHandler}
            ref={ref}
          />
        </div>

        <div className='form-group ml-3'>
          {editStatus ? (
            <button type='submit' className='btn btn-info'>
              Edit
            </button>
          ) : (
            <button type='submit' className='btn add-btn'>
              Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
