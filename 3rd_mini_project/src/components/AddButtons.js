import React from "react";

import { Grid, Button } from "../elements";
import { actionCreators as todoActions } from "../redux/modules/todo";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

// import 

const AddButtons = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const is_done = useSelector(state => state.todo.watch_done);

    return (
        <React.Fragment>
            <Grid
                flex="flex"
                flex_direction="column"
                is_align="flex-end"
            >
                {is_done ?
                    <Button
                        width="100px"
                        _onClick={() => {
                            dispatch(todoActions.watchDone(false))
                        }}
                    >
                        완료된 일정만 보기
                    </Button> :
                    <Button
                        width="100px"
                        _onClick={() => {
                            dispatch(todoActions.watchDone(true))
                        }}
                    >
                        모든 일정 보기
                    </Button>
                }
                <Button
                    width="45px"
                    height="45px"
                    borderRadius="25px"
                    _onClick={() => {
                        history.push("/addtodo");

                    }}
                >
                    ➕
                </Button>
            </Grid>
        </React.Fragment >
    );
};

export default AddButtons