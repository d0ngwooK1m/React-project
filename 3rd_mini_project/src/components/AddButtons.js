import React from "react";

import { Grid, Button } from "../elements";

import { useHistory } from "react-router";

// import 

const AddButtons = (props) => {
    const history = useHistory();

    return (
        <React.Fragment>
            <Grid
                flex="flex"
                flex_direction="column"
                is_align="flex-end"
            >
                <Button
                    width="100px"
                >
                    완료된 일정 보기
                </Button>
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