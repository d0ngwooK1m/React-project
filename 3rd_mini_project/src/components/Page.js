import React from "react";

import { Grid, Input, Button } from "../elements";
import { actionCreators as todoActions } from "../redux/modules/todo";

import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import moment from "moment";

const Page = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [title, setTitle] = React.useState();
    const [date, setDate] = React.useState();

    const sendTodo = () => {
        // const dateSplit = moment().year(date.split("-")[0]).month(date.split("-")[1] - 1).day(date.split("-")[2]);
        const strDate = date.split("-").join("");
        const strTime = `${new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours()}${new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()}${new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds()}`
        const newDate = moment(`${strDate} ${strTime}`).format();
        // console.log(newDate, strDate + strTime);
        dispatch(todoActions.addTodoFB(title, newDate));
    }

    // console.log(moment().format())

    return (
        <React.Fragment>
            <Grid
                flex="flex"
                height="500px"
                flex_direction="column"
                is_align="center"
                is_justify="center"
            >
                <Input
                    width="500px"
                    alignCenter
                    _onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                >
                    일정내용
                </Input>
                <Input
                    width="500px"
                    alignCenter
                    type="date"
                    _onChange={(e) => {
                        setDate(e.target.value);
                    }}
                >
                    일시
                </Input>
                <Grid
                    flex="flex"
                    is_justify="space-between"
                    width="500px"
                >
                    <Button
                        width="200px"
                        _onClick={() => {
                            history.push("/")
                        }}
                    >
                        작성취소
                    </Button>
                    <Button
                        width="200px"
                        _onClick={() => {
                            // console.log(todo);
                            // console.log(date);
                            sendTodo();
                            history.push("/");
                        }}
                    >
                        작성완료
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Page;