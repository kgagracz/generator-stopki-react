import styled from "styled-components";

export const StyledTypography = styled.div`
    z-index: 10;
    background-color: #fff;
    width: 300px;
    min-height: 300px;
    position: absolute;
    left: 420px;
    top: 50px;
    box-shadow: 1px 1px 8px #d9d9d9, -1px -1px 8px #ffffff;
    opacity: 0;
    transition: all .1s ease-in-out;
    svg {
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
        transition: all .2s ease;
        &:hover {
            transform: rotate(90deg);
        }
    }
`