import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { createWordFB } from "./redux/modules/words";
import { Theme, Word, Input, Container, Content, AddWordBtn } from "./Styled";

const AddWord = () => {
    const history = useHistory();
    const dispatch = useDispatch();



    const word = React.useRef(null);
    const explain = React.useRef(null);
    const example = React.useRef(null);

    return (
        <>
        <Theme>단어 추가하기</Theme>
        <Container>
            <Content>
                <Word>단어</Word>
                <Input type="text" ref={word} maxLength="18"/>
            </Content>
            <Content>
                <Word>설명</Word>
                <Input type="text" ref={explain} maxLength="18"/>
            </Content>
            <Content>
                <Word>예시</Word>
                <Input type="text" ref={example} maxLength="18"/>
            </Content>
            <div>
                <AddWordBtn onClick={() => {
                    history.push("/");
                }}>돌아가기</AddWordBtn>
                <AddWordBtn onClick={() => {
                    dispatch(createWordFB({ word: word.current.value, explain: explain.current.value, example: example.current.value}));
                    window.location.replace("/");
                }}>추가하기</AddWordBtn>
            </div>
        </Container>
        </>
    );
};



export default AddWord;