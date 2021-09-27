import React from "react";
import styled from "styled-components";

const Loading = () => {
    return (
        <>
        <Background>
            <Comment>Loading...👀</Comment>
        </Background>
        </>
    );
};

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: cornsilk;
`

const Comment = styled.div`
    font-size: 2rem;
    font-weight: bold;
`;

export default Loading;