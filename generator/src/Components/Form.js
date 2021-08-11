import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from './StyledComponents/Button.style';

import {CgMathMinus} from 'react-icons/cg';
import {BsPencil} from 'react-icons/bs'

import { StyledInput, StyledLabelContainer } from './StyledComponents/Input.style';
const Form = (props) => {
    let signature = props.signature;

    const changeData = (name, value) => {
        const data = Object.create(signature)
        signature[name] = value;
        return signature;
    }

    const displayInputs = Object.keys(signature).map(key => {
        return( <>
            <StyledLabelContainer>
                <StyledInput name={key} onChange={(e) => changeData(e.target.name, e.target.value)} placeholder={signature[key]} id={signature[key]}/>
                <BsPencil name={key} onClick={() => props.toggleTypography()}/>
                <CgMathMinus />
            </StyledLabelContainer>
        </>)
        }
    ) 
    
        
    return ( <>
        <StyledForm>
            {displayInputs}
            <StyledLabelContainer>
                <StyledButton onClick={() => props.changeSignatureData(signature)}>Generuj </StyledButton>
            </StyledLabelContainer>
        </StyledForm>
    </> );
}
 
const StyledForm = styled.div`
    width: 100%;
`

export default Form;