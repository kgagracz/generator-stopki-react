import styled from "styled-components";

export const StyledInput = styled.input`
    width: 80%;
    background-color: transparent;
    border-radius: 20px;
    border: 1px solid #e4e4e4;
    padding: 10px;
    margin: 10px;
    & :focus {
        outline: none;
    }
`