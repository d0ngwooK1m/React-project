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
    const [newTodo, setNewTodo] = React.useState(todo);
    const watch_done = useSelector(state => state.todo.watch_done);
    console.log(watch_done);
    const history = useHistory();
    // console.log(todo);
    const [modal, setModal] = React.useState(false);
    const [title, setTitle] = React.useState();
    const [date, setDate] = React.useState();
    const [id, setId] = React.useState();


    React.useEffect(() => {
        const check = todo.reduce((acc, cur) => {
            if (cur.done) {
                return [...acc, {
                    id: cur.id,
                    title: cur.title,
                    date: cur.date,
                    order: cur.order,
                    done: true,
                    color: "red",

                }]
            } else if (!cur.done && !watch_done) {
                return [...acc, {
                    id: cur.id,
                    title: cur.title,
                    date: cur.date,
                    order: cur.order,
                    done: false,
                    display: "none",

                }]
            } else if (!cur.done && watch_done) {
                return [...acc, cur]
            }
            // console.log(acc, cur);
        }, []);
        setNewTodo(check);
    }, [watch_done, todo])
    // console.log(is_done)

    return (
        <React.Fragment>
            <FullCalendar
                ref={day}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                eventClick={(e) => {
                    setModal(true);
                    // console.log(e.event);
                    setTitle(e.event.title);
                    setDate(e.event.startStr);
                    setId(e.event.id)
                }}
                events={newTodo}
                eventOrder="start"
                height="80vh"
            />
            {modal && <Detail closeModal={setModal} title={title} date={date} id={id} />}
        </React.Fragment>
    );
};


export default Calendar