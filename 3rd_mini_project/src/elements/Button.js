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
    height: "40px",
    color: "white",
    backgroundColor: "black",
    text: "text",
    borderRadius: "0px",
    _onClick: () => { },
}

const Btn = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.color};
    comment: ${(props) => props.comment};
    background-color: ${(props) => props.backgroundColor};

`;

export default Button;