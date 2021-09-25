import {db} from "../../firebase";
import { addDoc, collection, getDocs } from "@firebase/firestore";

//Action
const LOAD = "words/LOAD";
const CREATE = "words/CREATE";

const initialState = {
    word: [
        {
            word: "리덕스하다",
            explain: "복잡하고 어지러움을 표현",
            example: "이 과제 정말 리덕스하네🤪"
        }
    ]
}
//얘가 어떻게든 실행이 되고 나서 App.js의 loadWordFB가 작동한다!

//Action Creators
export const loadWord = (word) => {
    return {type: LOAD, word};
}

export const createWord = (word) => {
    return {type: CREATE, word};
}

//MiddleWare(FB)
export const loadWordFB = () => {
    return async function(dispatch) {
        const word_data = await getDocs(collection(db, "words"));
        console.log(word_data);

        let word_list = [];
        word_data.forEach((word) => {
            console.log(word.data());
            word_list.push({...word.data()});
        });

        console.log(word_list);

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

//reducer
export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case "words/LOAD":
            console.log(action.word[0]);
            
            return {word: action.word};
        
        case "words/CREATE":
            console.log(state);
            const new_words = [...state.word, action.word];
            return {word: new_words};
        
        default:
            return state;
    }
}

