import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
// import { ConnectedRouter } from "connected-react-router";

import Calendar from "../pages/Calendar";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={Calendar} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
