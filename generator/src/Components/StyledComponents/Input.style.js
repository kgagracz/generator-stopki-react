import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    background-color: transparent;
    border-radius: 20px;
    border: 1px solid #e4e4e4;
    padding: 10px;
    margin: 10px;
    box-shadow: inset 1px 1px 3px #d9d9d9, inset -1px -1px 3px #ffffff;
    &:focus {
        outline: none;
    }
`

export const StyledLabelContainer= styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    label {
        width: 80%;
        display: inline;
    }
`