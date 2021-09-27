import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { deleteWordFB } from "./redux/modules/words";
import { Theme, Word, Line } from "./Styled";

const Words = () => {
    const word_list = useSelector((state) => state.words.word);
    // console.log(word_list[0].id);
    // console.log(props);  
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <>
        <Theme>My Dictionary</Theme>
        <Container>
            {word_list.map((val, idx) => {
                return (
                    <WordCard key={idx} onClick={() => {
                        history.push("/editword/" + idx);
                    }}>
                        <ThemeContainer>
                            <Word>
                                단어
                            </Word>
                            <DeleteBtn onClick={(e) => {
                                e.stopPropagation();
                                dispatch(deleteWordFB(word_list[idx].id));
                            }} >✖</DeleteBtn>
                        </ThemeContainer>
                        <Explain>
                            {val.word}
                        </Explain>
                        <Line/>

                        <Word>
                            설명
                        </Word>
                        <Explain>
                            {val.explain}
                        </Explain>
                        <Line/>

                        <Word>
                            예시
                        </Word>
                        <Example>
                            {val.example}
                        </Example>
                    </WordCard>
                );
            })}        
        </Container>
        </>
    );
};

const Container = styled.div`
    width: 320px;
    height: 485px;
    margin: auto;
    border: 1px solid gray;
    background-color: #eee;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll; 
`;

const WordCard = styled.div`
    width: 300px;
    height: 170px;
    margin: 5px 0px;
    background-color: orange;
`;

const ThemeContainer = styled.div`
    display: flex;
    justify-content: space-between; 
`;

const DeleteBtn = styled.button`
    width: 25px;
    height: 25px;
    margin: 5px;
    border: 1px solid red;
    border-radius: 50%;
    background-color: red;
    cursor: pointer;
`;

const Explain = styled.div`
    margin-left: 5px;
`;

const Example = styled.div`
    margin-left: 5px;
    color: white;
`;



export default Words;