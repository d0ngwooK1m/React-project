import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router"
import { useSelector } from "react-redux";

import { Theme, Word, Line } from "./Styled";

const Words = () => {
    const history = useHistory();
    const word_list = useSelector((state) => state.words.word);
    console.log(word_list);  

    return (
        <>
        <Theme>My Dictionary</Theme>
        <Container>
            {word_list.map((val, idx) => {
                return (
                    <WordCard key={idx}>
                        <Word>
                            단어
                        </Word>
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
    height: 160px;
    margin: 5px 0px;
    background-color: orange;
`;

const Explain = styled.div`
    margin-left: 5px;
`;

const Example = styled.div`
    margin-left: 5px;
    color: white;
`;



export default Words;