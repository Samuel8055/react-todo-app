import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { TodoProvider } from "./context/Context";

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,
  document.querySelector("#root")
);
