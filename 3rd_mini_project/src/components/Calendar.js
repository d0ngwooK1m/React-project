import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import { Detail } from ".";


const Calendar = (props) => {
    const day = React.useRef(null);

    const todo = useSelector(state => state.todo.todo);
    const history = useHistory();
    // console.log(todo);
    const [modal, setModal] = React.useState(false);

    return (
        <React.Fragment>
            <FullCalendar
                ref={day}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                eventClick={() => {
                    setModal(true);
                }}
                events={[todo]}
                height="80vh"
            />
            {modal && <Detail closeModal={setModal} />}
        </React.Fragment>
    );
};


export default Calendar