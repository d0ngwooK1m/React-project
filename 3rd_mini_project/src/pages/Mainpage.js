import React from "react";

import { AddButtons, Calendar } from "../components";
import { Grid } from "../elements";

const Mainpage = () => {
    return (
        <React.Fragment>
            <Grid
                height="100vh"
            >
                <Calendar />
                <AddButtons />
            </Grid>
        </React.Fragment>
    );
};

export default Mainpage;