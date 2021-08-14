import React, { Component, useEffect } from 'react';

import { StyledSignatureContainer } from './StyledComponents/StyledSignatureContainer';
import { StyledButton } from './StyledComponents/Button.style';
import Signature from './Signature';
const GeneratorOutput = (props) => {
  return ( 
        <>
          <StyledSignatureContainer>
            <Signature company={props.company} signature={props.signature}/>
            <textarea name="" id="code" cols="30" rows="10"></textarea>
            <div>
                <StyledButton onClick={() => props.copyCode()}>Kopiuj</StyledButton>
            </div>
          </StyledSignatureContainer>
        </>
     );
}
 
export default GeneratorOutput;