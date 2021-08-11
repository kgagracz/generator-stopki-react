import React, { Component, useState } from 'react';
import styled from 'styled-components';

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
            </StyledLabelContainer>
        </>)
        }
    ) 
    
        
    return ( <>
        <StyledForm>
            {displayInputs}
            <button onClick={() => props.changeSignatureData(signature)}>kliknij </button>
        </StyledForm>
    </> );
}
 
const StyledForm = styled.div`

`

export default Form;