import styled from "styled-components";

export const Theme = styled.h3`
  margin: 10px;
`;

export const Word = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin: 5px;
`;

export const Input = styled.input`
    width: 90%;
    height: 30px;
    display: block;
    margin: 20px auto;
`;

export const Line = styled.hr`
    margin: 3px 0;
`;

export const Container = styled.div`
    width: 300px;
    height: 485px;
    margin: auto;
    border: 1px solid gray;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

export const Content = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid black;
`;

export const AddWordBtn = styled.button`
    width: 100%;
    height: 50px;
    cursor: pointer;
    margin-top: 6px;
`;