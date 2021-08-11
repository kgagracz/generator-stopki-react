import React, { Component } from 'react';
import { StyledTypography } from './StyledComponents/StyledTypgraphy';
import {GrClose} from 'react-icons/gr';
const Typography = (props) => {

    const changeTypography = (target, property, value) => {
        document.getElementById(target).style[property] = value;
    }

    return ( 
    <>
        <StyledTypography>
            <GrClose onClick={() => props.toggleTypography()}/>
            <input onChange={(e) => changeTypography('name-output', 'color', e.target.value)} type="color" name="" id=""/>
            <input onChange={(e) => changeTypography('name-output', 'fontSize', e.target.value)} type="number" name="" id="" />
        </StyledTypography>
    </> 
    );
}
 
export default Typography;