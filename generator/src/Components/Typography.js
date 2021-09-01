import React, { Component } from 'react';
import { StyledTypography, TypographyHead, TypographyBody, TypographyInputField } from './StyledComponents/StyledTypgraphy';
import {GrClose} from 'react-icons/gr';
const Typography = (props) => {

    const changeTypography = (target, property, value) => {
        document.getElementById(target).style[property] = value;
    }

    return ( 
    <>
        <StyledTypography id={props.id} style={{display: props.display ? 'block' : 'none' }}>
            <TypographyHead>
                <h3>Imię</h3>
                <GrClose onClick={props.toggleTypography}/>
            </TypographyHead>
            <TypographyBody>
                <TypographyInputField>
                    <p>Kolor</p>
                    <input onChange={(e) => changeTypography(props.target, 'color', e.target.value)} type="color" name="" id=""/>
                </TypographyInputField>
                <TypographyInputField>
                    <p>Rozmiar</p>
                    <input onChange={(e) => changeTypography(props.target, 'fontSize', String(e.target.value)+'px')} type="number" name="" id="" />
                </TypographyInputField>
            </TypographyBody>
        </StyledTypography>
    </> 
    );
}
 // TODO id kazdego elementu w stopce musi byc rowne key od obiektu ze state oraz klucz kazdego inpouta musi byc rowny key
export default Typography;