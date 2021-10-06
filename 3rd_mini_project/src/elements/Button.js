import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { width, height, color, backgroundColor, borderRadius, children, _onClick } = props;

    const styles = {
        width: width,
        height: height,
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
    }

    return (
        <React.Fragment>
            <Btn
                {...styles}
                onClick={_onClick}
            >{children}</Btn>
        </React.Fragment>
    );
};

Button.defaultProps = {
    width: "100%",
    color: "white",
    backgroundColor: "black",
    text: "text",
    borderRadius: "0px",
    _onClick: () => { },
}

const Btn = styled.button`
    width: ${props => props.width};
    height: 40px;
    color: ${props => props.color};
    comment: ${props => props.comment};
    border-radius: ${props => props.borderRadius};
    background-color: ${props => props.backgroundColor};
    box-sizing: border-box;
    cursor: pointer;
`;

export default Button;