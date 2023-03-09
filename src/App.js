import { createBrowserHistory } from "history";
import React, { useState } from "react";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
 
  return (
    <>
     <h1>hello</h1>
    </>
  );
}

export default App;
