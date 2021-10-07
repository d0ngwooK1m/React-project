import React from "react";

import { Grid, Text, Button } from "../elements";
import todo, { actionCreators as todoActions } from "../redux/modules/todo";

import styled from "styled-components";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "redux-actions";

const Detail = ({ closeModal, title, date, id }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    // const todo = useSelector(state => state.todo.todo);
    // console.log(todo);
    // console.log(title, date)
    // console.log(date.split("-"))

    return (
        <React.Fragment>
            <Grid
                width="100vw"
                height="100vh"
                flex="flex"
                is_align="center"
                z_index="999"
                position
            >
                <Grid
                    flex="flex"
                    width="500px"
                    height="500px"
                    flex_direction="column"
                    is_align="center"
                    is_justify="space-between"
                    backgroundColor="cyan"
                    margin="0px auto"
                >
                    <Grid
                        width="500px"
                    >
                        <Grid
                            flex="flex"
                            width="500px"
                            is_justify="end"
                        >
                            <Button
                                width="50px"
                                _onClick={() => {
                                    closeModal(false);
                                }}
                            >✖</Button>
                        </Grid>
                        <Text
                            label={"일정내용"}
                            size="30px"
                            bold
                        >
                            {title}
                        </Text>
                    </Grid>
                    <Grid
                        width="500px"
                    >
                        <Text
                            label={"일시"}
                            size="30px"
                            bold
                        >
                            {date}
                        </Text>
                    </Grid>

                    <Grid
                        flex="flex"
                        is_justify="space-between"
                        width="500px"
                    >
                        <Button
                            width="200px"
                            _onClick={() => {
                                dispatch(todoActions.deleteTodoFB(id));
                                closeModal(false);
                            }}
                        >
                            할일삭제
                        </Button>
                        <Button
                            width="200px"
                            _onClick={() => {
                                dispatch(todoActions.doneTodoFB(id));
                                closeModal(false);
                            }}
                        >
                            할일완료
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );

};


export default Detail;