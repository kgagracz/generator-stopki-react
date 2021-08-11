import React, { Component } from 'react';
import { StyledTypography } from './StyledComponents/StyledTypgraphy';
import {GrClose} from 'react-icons/gr';
const Typography = (props) => {

    const changeTypography = (target, property, value) => {
        document.getElementById(target).style[property] = value;
        console.log(target, property, value)
    }
    
    return ( 
    <>
        <StyledTypography>
            <GrClose onClick={() => props.toggleTypography()}/>
            <input onChange={(e) => changeTypography(props.target, 'color', e.target.value)} type="color" name="" id=""/>
            <input onChange={(e) => changeTypography(props.target, 'fontSize', String(e.target.value)+'px')} type="number" name="" id="" />
        </StyledTypography>
    </> 
    );
}
 // TODO id kazdego elementu w stopce musi byc rowne key od obiektu ze state oraz klucz kazdego inpouta musi byc rowny key
export default Typography;