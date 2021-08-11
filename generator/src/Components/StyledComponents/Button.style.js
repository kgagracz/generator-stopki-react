import styled from "styled-components";
import { styles } from "./styleVariables";


export const StyledButton = styled.button `
  width: 25%;
  background-color: ${styles.mainColor};
  display: inline;
  border-radius: 50px;
  font-size: 15px;
  border: none;
  padding: 10px 10px;
  text-align: center;
  height: 100%;
  transition: all .2s;
  color: white;
  margin: 15px 5px;
  box-shadow: 1px 1px 6px #d9d9d9, -1px -1px 6px #ffffff;
  :hover {
    cursor: pointer;
    border-radius: 50px;
    background: #0562f8;
    box-shadow: inset 20px 20px 60px #0453d3,
                inset -20px -20px 60px #0671ff;
  }
`