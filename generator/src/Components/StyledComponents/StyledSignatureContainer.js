import styled from "styled-components";

export const StyledSignatureContainer = styled.div`
    width: 600px;
    display: flex;
    justify-content: center;
    right: 20%;
    flex-wrap: wrap;
    padding-top: 50px;
    margin: 50px;
    position: fixed;
    table {
        box-shadow: 1px 1px 4px #d9d9d9, -1px -1px 4px #ffffff;
    }
    #code {
        box-shadow: 1px 1px 4px #d9d9d9, -1px -1px 4px #ffffff;
        resize: none;
        height: 150px;
        width: 600px;
        bottom: 150px;
        background-color: transparent;
        border: 1px solid #e4e4e4;
        padding: 10px;
        margin: 50px 0;
        overflow: hidden;
        &:focus {
            outline: none;
        }
    }
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button {
        width: 250px;
    }
`