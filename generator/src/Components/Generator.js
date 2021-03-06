import { StyledGenerator } from "./StyledComponents/Generator.style";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import styled from "styled-components";
import { styles } from "./StyledComponents/styleVariables";

import Typography from "./Typography";

import { StyledButton } from "./StyledComponents/Button.style";

import Form from "./Form/Form";
import { useState } from "react";
const Generator = (props) => {

    return ( <>
        <StyledGenerator>

                <h1>Wybierz motyw</h1>
                <StyledThemeSwitchersContainer>
                    <Router>
                        <StyledButton onClick={() => props.changeCompany('netsendo')}>Netsendo</StyledButton>
                        <StyledButton onClick={() => props.changeCompany('ecat')}> EC-AT</StyledButton>
                        <StyledButton onClick={() => props.changeCompany('aderlo')}>Aderlo</StyledButton>
                        <StyledButton onClick={() => props.changeCompany('bd')}>BD</StyledButton>  
                    </Router>
                </StyledThemeSwitchersContainer>
                <Form changeSignatureData={props.changeSignatureData} signature={props.signature} toggleTypography={props.toggleTypography} resetLocalstorage={props.resetLocalstorage}/>

        </StyledGenerator>
    </> );
}
 
const StyledThemeSwitchersContainer = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;
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

export default Generator;