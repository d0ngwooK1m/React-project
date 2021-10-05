import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const { flex, is_align, is_justify, width, margin, padding, backgroundColor, textCenter, children, _onClick } = props;

    const styles = {
        flex: flex,
        is_align: is_align,
        is_justify: is_justify,
        width: width,
        margin: margin,
        padding: padding,
        backgroundColor: backgroundColor,
        textCenter: textCenter,
    }

    return (
        <React.Fragment>
            <GridBox {...styles}
                onClick={_onClick}
            >{children}</GridBox>
        </React.Fragment>
    );
};

Grid.defaultProps = {
    flex: false,
    is_align: false,
    is_justify: false,
    width: "100%",
    margin: false,
    padding: false,
    backgroundColor: false,
    textCenter: false,
    _onClick: () => { }
}

const GridBox = styled.div`
    flex: ${props => props.flex};
    align-items: ${props => props.is_align};
    justify-content: ${props => props.is_justify};
    width: ${props => props.width};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    background-color: ${props => props.backgroundColor};
    ${(props) => props.center ? `text-align: center` : ""};
`;

export default Grid;