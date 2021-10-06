import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const { flex, position, flex_direction, is_align, is_justify, width, height, margin, padding, z_index, backgroundColor, textCenter, children, _onClick } = props;

    const styles = {
        flex: flex,
        position: position,
        flex_direction: flex_direction,
        is_align: is_align,
        is_justify: is_justify,
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        z_index: z_index,
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
    position: false,
    flex_direction: false,
    is_align: false,
    is_justify: false,
    width: "100vw",
    height: "50px",
    margin: false,
    padding: false,
    z_index: null,
    backgroundColor: false,
    textCenter: false,
    _onClick: () => { }
}

const GridBox = styled.div`
    ${props => props.flex ? `display: ${props.flex}` : ""};
    ${props => props.position ? "position:fixed; left:0px; top:0px;" : ""};
    ${props => props.flex_direction ? `flex-direction: ${props.flex_direction}` : ""};
    ${props => props.is_align ? `align-items: ${props.is_align}` : ""};
    ${props => props.is_justify ? `justify-content: ${props.is_justify}` : ""};
    width: ${props => props.width};
    height: ${props => props.height};
    ${props => props.margin ? `margin: ${props.margin}` : ""};
    ${props => props.padding ? `padding: ${props.padding}` : ""};
    ${props => props.z_index ? `z-index: ${props.z_index}` : ""};
    ${props => props.backgroundColor ? `background-color: ${props.backgroundColor}` : ""};
    ${(props) => props.center ? `text-align: center` : ""};
    box-sizing: border-box;
`;

export default Grid;