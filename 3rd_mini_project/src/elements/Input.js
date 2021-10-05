import React from "react";
import styled from "styled-components";

const Input = (props) => {
    const { width, height, type, placeholder, children, _onChange } = props

    const styles = { width, height, type };

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
    type: "text",
    placeholder: "문구를 입력해주세요",
    _onChange: () => { }
}

const InputElement = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
    type: ${props => props.type};
    placeholder: ${props => props.placeholder};
`;

export default Input;