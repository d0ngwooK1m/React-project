import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//1
const ADD_TODO = "ADD_TODO";
const DONE_TODO = "DONE_TODO";

//2
const addTodo = createAction(ADD_TODO, (title, date) => ({ title, date }));
const doneTodo = createAction(DONE_TODO, (todo) => ({ todo }));

//3
const initialState = {
    todo: {},
};

//4
export default handleActions({
    [ADD_TODO]: (state, action) => produce(state, (draft) => {
        draft.todo = {
            title: action.payload.title,
            date: action.payload.date,
        }
        console.log(`?!${action.payload.title}`);
    }),
    [DONE_TODO]: (state, action) => produce(state, (draft) => {

    })
}, initialState);

//5
const actionCreators = {
    addTodo,
    doneTodo,
}

export { actionCreators };