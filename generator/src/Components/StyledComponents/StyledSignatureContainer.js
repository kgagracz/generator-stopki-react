import styled from "styled-components";

export const StyledSignatureContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    margin: 50px;
    position: relative;
    table {
        box-shadow: 1px 1px 4px #d9d9d9, -1px -1px 4px #ffffff;
        position: fixed;
    }
    #code {
        box-shadow: 1px 1px 4px #d9d9d9, -1px -1px 4px #ffffff;
        resize: none;
        margin: 50px;
        height: 150px;
        width: 600px;
        position: fixed;
        bottom: 150px;
        background-color: transparent;
        border-radius: 20px;
        border: 1px solid #e4e4e4;
        padding: 10px;
        margin: 10px;
        overflow: hidden;
        &:focus {
            outline: none;
        }
    }
`