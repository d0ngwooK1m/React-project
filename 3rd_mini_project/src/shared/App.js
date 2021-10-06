import React from "react";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { Mainpage, Addpage, Detailpage } from "../pages";


function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Mainpage} />
        <Route path="/addtodo" exact component={Addpage} />
        {/* <Route path="/detail" exact component={Detailpage} /> */}
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
