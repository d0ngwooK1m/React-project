import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";

import { loadWordFB } from "./redux/modules/words";
import Words from "./Words";
import AddWord from "./AddWord";
import EditWord from "./EditWord";
import Loading from "./Loading";



//useEffect, 디펜던시 어레이, 굳이 안해도 된다?
//기존에 있던 initialState가 mount 된 다음 작동하는 방식인 듯하다. https://www.zerocho.com/category/React/post/5f9a6ef507be1d0004347305

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  // console.log(history);
  // console.log(location.pathname);
  //현재 위치를 추적하려면 useLocation을 사용해야한다.

  React.useEffect(() => {
    async function run () {
      dispatch(loadWordFB());
    };
    run();
  }, [dispatch]);

  const is_loaded = useSelector((state) => state.words.is_loaded);

  return (
    <div className="App">
        <Display>
          <Container>
            <Switch>
              <Route path="/" exact component={Words}/>

              <Route path="/addword" exact component={AddWord}/>

              {is_loaded && <Route path="/editword/:index" exact component={EditWord} />}
            </Switch>
            {
              (location.pathname === "/") && <AddBtn onClick={() => {
                  history.push("/addword");
              }}>➕</AddBtn>
            }
            
          </Container>
          {!is_loaded && <Loading/>}        
        </Display>
    </div>
  );
}

const Display = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const AddBtn = styled.button`
    width: 60px;
    height: 60px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    border: 1px solid #eee;
    border-radius: 50%;
    background-color: #bcdcf8;
    cursor: pointer;
`;

const Container = styled.div`
  width: 350px;
  height: 550px;
  border: 1px solid black;
  position: relative;
`;

export default App;
