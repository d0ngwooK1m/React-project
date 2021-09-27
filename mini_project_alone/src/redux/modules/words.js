import {db} from "../../firebase";
import { doc, collection, addDoc, getDocs, updateDoc, deleteDoc } from "@firebase/firestore";

//Action
const LOAD = "words/LOAD";
const CREATE = "words/CREATE";
const EDIT = "words/EDIT";
const DELETE = "words/DELETE";

const initialState = {
    word: [
        {
            word: "리덕스하다",
            explain: "복잡하고 어지러움을 표현",
            example: "이 과제 정말 리덕스하네🤪"
        }
    ],
    is_loaded: false,
}
//얘가 어떻게든 실행이 되고 나서 App.js의 loadWordFB가 작동한다!

//Action Creators
export const loadWord = (word) => {
    return {type: LOAD, word};
}

export const createWord = (word) => {
    return {type: CREATE, word};
}

export const editWord = (word) => {
    return {type: EDIT, word}
}

export const deleteWord = (id) => {
    return {type: DELETE, id}
} 

//MiddleWare(FB)
export const loadWordFB = () => {
    return async function(dispatch) {
        const word_data = await getDocs(collection(db, "words"));
        // const button_visible = await getDocs(collection(db, "button_visible"));
        // console.log(word_data);
        // console.log(button_visible);

        let word_list = [];
        word_data.forEach((word) => {
            // console.log(word.id);
            return word_list.push({ id: word.id, ...word.data() });
        });

        // console.log(word_list);

        dispatch(loadWord(word_list));
    }
}

export const createWordFB = (word) => {
    return async function(dispatch) {
        await addDoc(collection(db, "words"), word);

        const word_data = {
            word: word.word,
            explain: word.explain,
            example: word.example
        }

        dispatch(createWord(word_data));
    }
};

export const editWordFB = (word) => {
    return async function(dispatch) {
        await updateDoc(doc(db, "words", word.id), {
            word: word.word,
            explain: word.explain,
            example: word.example,
        });

        const edit_word_data = {
            id: word.id,
            word: word.word,
            explain: word.explain,
            example: word.example,
        }

        dispatch(editWord(edit_word_data));
    }
};

export const deleteWordFB = (id) => {
    console.log(id);
    return async function (dispatch) {
        await deleteDoc(doc(db, "words", id));
        
        dispatch(deleteWord(id));
    }
};

//reducer
export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case "words/LOAD":
            // console.log(action.word[0]);
            
            return {word: action.word, is_loaded: true};
        
        case "words/CREATE":
            // console.log(state);
            const new_words = [...state.word, action.word];
            return {word: new_words, is_loaded: true};
        
        case "words/EDIT":
            // console.log(action.word);
            // console.log(state);
            const edit_words = [];

            state.word.filter((val, idx) => {
                if (val.id === action.word.id) {
                    return edit_words.push(action.word);
                } 
                else {
                    return edit_words.push(val);
                }
            })

            return {word: edit_words, is_loaded: true};
        
        case "words/DELETE":
            const clean_word = [];
            state.word.filter((val, idx) => {
                if(state.word[idx].id !== action.id) {
                    return clean_word.push(val);
                }
            });    
            console.log(clean_word);

            return {word: clean_word, is_loaded: true};

        default:
            return state;
    }
}

