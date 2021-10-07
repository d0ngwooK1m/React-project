import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { db } from "../../shared/firebase";
import { collection, doc, addDoc, getDocs, deleteDoc, updateDoc } from "@firebase/firestore";

//1
const LOAD_TODO = "LOAD_TODO";
const ADD_TODO = "ADD_TODO";
const DONE_TODO = "DONE_TODO";
const DELETE_TODO = "DELETE_TODO";
const WATCH_DONE = "WATCH_DONE";

//2
const loadTodo = createAction(LOAD_TODO, (todo) => ({ todo }));
const addTodo = createAction(ADD_TODO, (todo) => ({ todo }));
const doneTodo = createAction(DONE_TODO, (done_todo) => ({ done_todo }));
const deleteTodo = createAction(DELETE_TODO, (id) => ({ id }));
const watchDone = createAction(WATCH_DONE, (done) => ({ done }));

//3
const initialState = {
    todo: [],
    watch_done: true,
};

//5

const loadTodoFB = () => {
    return async function (dispatch, getState, { history }) {
        try {
            const querySnapshot = await getDocs(collection(db, "todo"));
            let todo = [];
            querySnapshot.forEach((doc) => {
                todo.push({ id: doc.id, ...doc.data() });
            })
            // console.log(todo);

            dispatch(loadTodo(todo));
        } catch (e) {
            console.log("loadTodoFB error", e)
        }
    }
}

const addTodoFB = (title = "", date = "") => {
    return async function (dispatch, getState, { history }) {
        try {
            console.log(title, date)
            const todo = {
                title: title,
                date: date,
                order: 2,
                done: false,
            }
            const docRef = await addDoc(collection(db, "todo"), todo);
            console.log(`docId: ${docRef.id}`);
            dispatch(addTodo(todo))
        } catch (e) {
            console.error("addTodoFB error", e);
        }


    }
}

const doneTodoFB = (id) => {
    return async function (dispatch, getState, { history }) {
        try {
            const idx = getState().todo.todo.findIndex(val => val.id === id)
            // console.log(getState().todo.todo[idx]);
            const done_todo = {
                ...getState().todo.todo[idx],
                done: true,
            }
            await updateDoc(doc(db, "todo", id), done_todo);

            dispatch(doneTodo(done_todo));
        } catch (e) {
            console.log("doneTodoFB error", e);
        }
    }
}

const deleteTodoFB = (id) => {
    return async function (dispatch, getState, { history }) {
        try {
            await deleteDoc(doc(db, "todo", id));
            dispatch(deleteTodo(id));
        } catch (e) {
            console.log("deleteTodoFB error", e);
        }
    }
};

//4
export default handleActions({
    [LOAD_TODO]: (state, action) => produce(state, (draft) => {
        draft.todo = action.payload.todo;
    }),
    [ADD_TODO]: (state, action) => produce(state, (draft) => {
        draft.todo.unshift(action.payload.todo)
    }),
    [DONE_TODO]: (state, action) => produce(state, (draft) => {
        const todo = [];
        draft.todo.filter((val, idx) => {
            if (draft.todo[idx].id === action.payload.done_todo.id) {
                return todo.push(action.payload.done_todo);
            } else {
                return todo.push(draft.todo[idx]);
            }
        })
        draft.todo = todo;
    }),
    [DELETE_TODO]: (state, action) => produce(state, (draft) => {
        const todo = [];
        draft.todo.filter((val, idx) => {
            if (draft.todo[idx].id !== action.payload.id) {
                return todo.push(val);
            };
        });

        draft.todo = todo;
    }),
    [WATCH_DONE]: (state, action) => produce(state, (draft) => {
        draft.watch_done = action.payload.done;
        console.log(action.payload.done);
    })
}, initialState);

//5
const actionCreators = {
    addTodo,
    doneTodo,
    watchDone,
    loadTodoFB,
    addTodoFB,
    doneTodoFB,
    deleteTodoFB,
}

export { actionCreators };