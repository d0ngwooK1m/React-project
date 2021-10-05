import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
    const day = React.useRef(null);

    const handleDateClick = (arg) => {
        alert(arg.dateStr);
    };

    return (
        <React.Fragment>
            <FullCalendar
                ref={day}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleDateClick}
            />
        </React.Fragment>
    );
};

export default Calendar