import React from "react";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { actionCreators as todoActions } from "../redux/modules/todo";
import { useDispatch, useSelector } from "react-redux";

import { Mainpage, Addpage } from "../pages";


function App() {
  const dispatch = useDispatch();
  const todo_length = useSelector(state => state.todo.todo).length;
  console.log(todo_length);

  React.useEffect(() => {
    dispatch(todoActions.loadTodoFB());
  }, [todo_length])

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Mainpage} />
        <Route path="/addtodo" exact component={Addpage} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
