import React, { Component } from 'react';
import styled from 'styled-components';

const Form = (props) => {
    let values = props.state.signature.values;
    const displayInputs = Object.keys(values).map(key => 
            <input name={key} onChange={(e) => props.changeSignatureData(e.target.name, e.target.value)} placeholder={values[key]} />
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