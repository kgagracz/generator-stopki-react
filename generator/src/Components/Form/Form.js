import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledButton, StyledSecondaryButton } from '../StyledComponents/Button.style';
import { StyledLabelContainer } from '../StyledComponents/Input.style';

import Typography from '../Typography';
import Inputs from './Inputs';

const Form = (props) => {

    let signature = props.signature

    useEffect(() => {
        const codeOutput = document.getElementById('code');
        const signatureCode = document.getElementById('Tabela_01').outerHTML;
        codeOutput.innerHTML = signatureCode;
        })


    const toggleElement = (target) => {
        let element = document.getElementById(target);
        if (element.style.display !== 'none') {
            element.style.display = 'none';
        } 
        else if (element.style.display === 'none'){
            element.style.display = 'block';
        }
    }
    
    const removeHiddenElements = () => {
        let allElements = [...document.querySelectorAll('#Tabela_01 *')];
        allElements.forEach(element => {
            if (element.style.display === 'none') { 
                element.remove();
            }
        })
    }

    const handleClick = (signature) =>{
        removeHiddenElements(); 
        props.changeSignatureData(signature);
    }

    return ( <>
        <StyledForm>
            <Inputs signature={props.signature} toggleElement={toggleElement}/>

            <StyledLabelContainer>
                <StyledButton onClick={() => handleClick(signature)}>Generuj </StyledButton>
                <StyledSecondaryButton onClick={() => props.resetLocalstorage()}>Resetuj</StyledSecondaryButton>
            </StyledLabelContainer>
        </StyledForm>
    </> );
}
 
const StyledForm = styled.div`
    width: 100%;
`

export default Form;