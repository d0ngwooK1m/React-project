import React from "react";
import styled from "styled-components";

const Input = (props) => {
    const { width, height, alignCenter, type, placeholder, children, _onChange } = props

    const styles = { width, height, alignCenter, type };

    return (
        <React.Fragment>
            <label>{children}
                <InputElement
                    {...styles}
                    onChange={_onChange}
                    placeholder={placeholder}
                />
            </label>
        </React.Fragment>
    );
};

Input.defaultProps = {
    width: "100%",
    height: "40px",
    is_align: false,
    type: "text",
    placeholder: "문구를 입력해주세요",
    _onChange: () => { }
}

const InputElement = styled.input`
    ${props => props.width ? `width: ${props.width}` : ""};
    ${props => props.height ? `height: ${props.height}` : ""};
    ${props => props.alignCenter ? `display: flex; align-items:center;` : ""};
    ${props => props.type ? `type: ${props.type}` : ""};
    ${props => props.placeholder ? `placeholder: ${props.placeholder}` : ""};
    box-sizing: border-box;
`;

export default Input;