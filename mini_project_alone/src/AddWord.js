import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { createWordFB } from "./redux/modules/words";
import { Theme, Word, Input } from "./Styled";

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
                <Input type="text" ref={word}/>
            </Content>
            <Content>
                <Word>설명</Word>
                <Input type="text" ref={explain}/>
            </Content>
            <Content>
                <Word>예시</Word>
                <Input type="text" ref={example}/>
            </Content>
            <AddWordBtn onClick={() => {
                dispatch(createWordFB({ word: word.current.value, explain: explain.current.value, example: example.current.value}));
                history.push("/");
            }}>추가하기</AddWordBtn>
        </Container>
        </>
    );
};

const Container = styled.div`
    width: 300px;
    height: 485px;
    margin: auto;
    border: 1px solid gray;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

const Content = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid black;
`;

const AddWordBtn = styled.button`
    width: 100%;
    height: 50px;
    cursor: pointer;
`;

export default AddWord;