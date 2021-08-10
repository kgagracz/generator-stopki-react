import React, { Component } from 'react';
import styled from 'styled-components';

import { StyledInput } from './StyledComponents/Input.style';
const Form = (props) => {
    let values = props.signature;
    const displayInputs = Object.keys(values).map(key => 
        <>
            <label htmlFor={values[key][0]}>{values[key][1]}</label>
            <StyledInput name={key} onChange={(e) => props.changeSignatureData(e.target.name, e.target.value)} placeholder={values[key][0]} id={values[key][0]}/>
        </>
        )
        
    return ( <>
        <StyledForm>
            {displayInputs}
        </StyledForm>
    </> );
}
 
const StyledForm = styled.div`

`

export default Form;