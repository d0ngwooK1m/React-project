import React from "react";

import { Grid, Text, Button } from "../elements";
import { actionCreators as todoActions } from "../redux/modules/todo";

import { useDispatch } from "react-redux";
import styled from "styled-components";

const Detail = ({ closeModal, title, date, id }) => {
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
                _onClick={() => {
                    closeModal(false);
                }}
            >
                <StyleWrapper>
                    <Grid
                        flex="flex"
                        width="100%"
                        height="100%"
                        flex_direction="column"
                        is_align="center"
                        is_justify="space-between"
                        margin="0px auto"
                        _onClick={(e) => {
                            e.stopPropagation();
                        }}

                    >
                        <Grid
                            width="100%"
                        >
                            <Grid
                                flex="flex"
                                width="100%"
                                is_justify="end"
                            >
                                <Button
                                    width="20%"
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
                            width="100%"
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
                            width="100%"
                        >
                            <Button
                                width="30%"
                                _onClick={() => {
                                    dispatch(todoActions.deleteTodoFB(id));
                                    closeModal(false);
                                }}
                            >
                                할일삭제
                            </Button>
                            <Button
                                width="30%"
                                _onClick={() => {
                                    dispatch(todoActions.doneTodoFB(id));
                                    closeModal(false);
                                }}
                            >
                                할일완료
                            </Button>
                        </Grid>
                    </Grid>
                </StyleWrapper>
            </Grid>
        </React.Fragment>
    );

};

const StyleWrapper = styled.div`
    background-image: url("https://banner2.cleanpng.com/20180224/oiw/kisspng-airplane-airliner-aircraft-boeing-777-airbus-aircraft-5a91fde55e6c87.8260020815195171573868.jpg");
    background-color: #E0F2F7;
    background-size: contain;
    width: 500px;
    height: 500px;
    margin: auto;
    @media screen and (max-width: 500px) {
        width: 100vw;
    }
`;

export default Detail;