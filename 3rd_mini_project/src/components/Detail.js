import React from "react";

import { Grid, Text, Button } from "../elements";
import { actionCreators as todoActions } from "../redux/modules/todo";

import styled from "styled-components";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const Detail = ({ closeModal }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const title = useSelector(state => state.todo.todo.title);
    const date = useSelector(state => state.todo.todo.date);


    return (
        <React.Fragment>
            <Grid
                width="100vw"
                height="100vh"

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
                                console.log("test");
                                closeModal(false);
                            }}
                        >
                            작성취소
                        </Button>
                        <Button
                            width="200px"
                            _onClick={() => {

                            }}
                        >
                            작성완료
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );

};


export default Detail;