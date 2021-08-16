import React, { Component } from 'react'
import styled from 'styled-components';

import { StyledInput, StyledLabelContainer } from '../StyledComponents/Input.style';

import {CgMathMinus} from 'react-icons/cg';
import {BsPencil} from 'react-icons/bs';

const InputField = (props) => {

    let signature = props.signature;

    const changeData = (name, value) => {
        const data = Object.create(signature)
        signature[name] = value;
        return signature;
    }

    return ( 
        <>
            <StyledLabelContainer>
                <label htmlFor={props.name}>{props.label}</label>
                <BsPencil 
                target={props.name}
                onClick={() => props.toggleTypography()}/>
                <CgMathMinus onClick={() => props.toggleElement(props.name)}/>
                <StyledInput 
                type={props.type}
                name={props.name}
                onChange={(e) => changeData(e.target.name, e.target.value)} 
                id={props.id}
                placeholder={props.placeholder}
                />
            </StyledLabelContainer>
        </> 
    );
}

const StyledLabel = styled.label`
    display: inline;
    width: 85%auto;
`

export default InputField;