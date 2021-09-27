import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

import { editWordFB } from "./redux/modules/words";
import { Theme, Word, Input, Container, Content, AddWordBtn } from "./Styled";

const EditWord = () => {
    const history = useHistory();
    const dispatch = useDispatch();    
    const word_list = useSelector((state) => state.words.word);
    // console.log(word_list[0].id);
    const params = useParams();  
    // console.log(params.index);
    const word_index = params.index;
    // console.log(word_list[word_index].id);     

    const editWord = React.useRef(null);
    const editExplain = React.useRef(null);
    const editExample = React.useRef(null);
    // console.log(editWord, editExample, editExplain);

    return(
        <>
        <Theme>단어 수정하기</Theme>
        <Container>
            <Content>
                <Word>단어: {word_list[word_index].word}</Word>
                <Input type="text" ref={editWord} maxLength="18" />
            </Content>
            <Content>
                <Word>설명: {word_list[word_index].explain}</Word>
                <Input type="text" ref={editExplain} maxLength="18" />
            </Content>
            <Content>
                <Word>예시: {word_list[word_index].example}</Word>
                <Input type="text" ref={editExample} maxLength="18" />
            </Content>
            <div>
                <AddWordBtn onClick={() => {
                    history.push("/");
                }}>돌아가기</AddWordBtn>
                <AddWordBtn onClick={() => {
                    dispatch(editWordFB({
                        id: word_list[word_index].id, 
                        word: editWord.current.value==="" ? word_list[word_index].word : editWord.current.value,
                        explain: editExplain.current.value==="" ? word_list[word_index].explain : editExplain.current.value,
                        example: editExample.current.value==="" ? word_list[word_index].example : editExample.current.value,
                    }));
                    history.push("/");
                }}>수정하기</AddWordBtn>
            </div>
        </Container>
        </>
    );
};



export default EditWord