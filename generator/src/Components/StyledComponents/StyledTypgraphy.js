import styled from "styled-components";
import {styles} from "./styleVariables";

export const StyledTypography = styled.div`
    z-index: 10;
    background-color: #fff;
    width: 300px;
    min-height: 300px;
    position: absolute;
    left: 420px;
    top: 50px;
    box-shadow: 1px 1px 8px #d9d9d9, -1px -1px 8px #ffffff;
    transition: all .1s ease-in-out;
    border-radius: 10px;
    svg {
        position: absolute;
        right: 10px;
        cursor: pointer;
        transition: all .2s ease;
        path {
            stroke: #fff;
        }
        &:hover {
            transform: rotate(90deg);
        }
    }
`

export const TypographyHead = styled.div`
    height: 35px;
    padding: 10px;
    background-color: ${styles.mainColor};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 10px 10px 0 0;
`

export const TypographyBody = styled.div`
    padding: 20px;
`

export const TypographyInputField = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    p {
        display: inline-block;
    }
    input {
        display: inline-block;
        text-align: right;
        width: 50px;
    }
` 