import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledButton } from './StyledComponents/Button.style';

import Typography from './Typography';

import {CgMathMinus} from 'react-icons/cg';
import {BsPencil} from 'react-icons/bs'

import { StyledInput, StyledLabelContainer } from './StyledComponents/Input.style';
const Form = (props) => {

    useEffect(() => {
        const codeOutput = document.getElementById('code');
        const signatureCode = document.getElementById('Tabela_01').outerHTML;
        codeOutput.innerHTML = signatureCode;
        })

    let signature = props.signature;

    const changeData = (name, value) => {
        const data = Object.create(signature)
        signature[name] = value;
        return signature;
    }

    const [displayTypography, setDisplayTypography] = useState(false);
    const toggleTypography = () => {
        setDisplayTypography(!displayTypography);
    }

    const toggleElement = (target) => {
        let element = document.getElementById(target);
        console.log(element)
        if (element.style.display !== 'none') {
            element.style.display = 'none';
        } 
        else if (element.style.display === 'none'){
            element.style.display = 'block';
        }
    }

    let inputsToShow = Object.assign({}, signature);
    const nonChangableElements = [
        'logo', 'avatarUrl', 'fbUrl', 'igUrl', 'liUrl', 'bannerImgUrl', 'bannerLinkUrl'
    ];
    //todo przeiterowanie i wyrzucenie obiektów których nie poowinno się wyswietlac jako inputy
    // rozróżnianie popupow typografii mozna usuwac klucze obiektow iterujac po tablicy 

    const [iconClicked, setIconClicked] = useState(false);

    const displayInputs = Object.keys(signature).map(key => {
        return( <>
            <StyledLabelContainer>
                <StyledInput name={key} onChange={(e) => changeData(e.target.name, e.target.value)} placeholder={signature[key]} id={signature[key]}/>
                <BsPencil target={key} onClick={() => toggleTypography()}/>
                <CgMathMinus onClick={() => toggleElement(key)}/>
            </StyledLabelContainer>
        </>)
        }
    ) 
    
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
            {displayInputs}
            {displayTypography ? 
            <Typography signature={props.signature} toggleTypography={toggleTypography}/>
            : null }
            <StyledLabelContainer>
                <StyledButton onClick={() => handleClick(signature)}>Generuj </StyledButton>
            </StyledLabelContainer>
        </StyledForm>
    </> );
}
 
const StyledForm = styled.div`
    width: 100%;
`

export default Form;