import React from "react";

import { AddButtons, Calendar } from "../components";
import { Grid } from "../elements";

import styled from "styled-components";

const Mainpage = () => {
    return (
        <React.Fragment>
            <StyleWrapper>
                <Grid
                    height="100vh"
                >
                    <Calendar />
                    <AddButtons />
                </Grid>
            </StyleWrapper>
        </React.Fragment>
    );
};

const StyleWrapper = styled.div`
    background-image: url("https://images.unsplash.com/photo-1504253163759-c23fccaebb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    background-size: cover;
    .fc-button.fc-prev-button, .fc-button.fc-next-button, .fc-button.fc-button-primary{
        background: #81BEF7;
        background-image: none;
    };
    .fc-day-today {
        background-color: inherit !important;
    }
    .fc-today-button{
        display: none;
    }
    color: black;
    background-color: aliceblue;
`;

export default Mainpage;