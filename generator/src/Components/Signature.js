import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from './StyledComponents/signatureStyleVariables';

import Netsendo from './Companies/Netsendo';
import Ecat from './Companies/Ecat';
import Aderlo from './Companies/Aderlo';
import BusinessDreams from './Companies/BusinessDreams';

const Signature = (props) => {

        if (props.company === 'netsendo') {
            return <Netsendo signature={props.signature}/>
        } else if (props.company === 'ecat') {
            return <Ecat signature={props.signature}/>
        } else if (props.company === 'aderlo') {
            return <Aderlo signature={props.signature}/>
        } else if (props.company === 'bd') {
            return <BusinessDreams signature={props.signature}/>
        }
}

export default Signature;