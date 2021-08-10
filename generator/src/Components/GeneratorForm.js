import { StyledGeneratorForm } from "./StyledComponents/GeneratorForm.style";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import styled from "styled-components";
import { styles } from "./StyledComponents/styleVariables";

import { StyledButton } from "./StyledComponents/Button.style";

import Form from "./Form";
const GeneratorForm = (props) => {
    return ( <>
        <StyledGeneratorForm>

                <h1>Wybierz motyw</h1>
                <StyledThemeSwitchersContainer>
                    <Router>
                        <Link>Netsendo</Link>
                        <Link> EC-AT</Link>
                        <Link>Aderlo</Link>
                        <Link>BD</Link>
                    </Router>
                </StyledThemeSwitchersContainer>
                <Form changeSignatureData={props.changeSignatureData} state={props.state}/>

        </StyledGeneratorForm>
    </> );
}
 
const StyledThemeSwitchersContainer = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: center;
    width: 100%;
    padding: 0 0 20px 0;
    top: 0;
    a {
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
        :hover {
            cursor: pointer;
            border-radius: 50px;
            background: #0562f8;
            box-shadow: inset 20px 20px 60px #0453d3,
                    inset -20px -20px 60px #0671ff;
        }
    }
`

export default GeneratorForm;