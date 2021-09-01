import React, { Component, useEffect } from 'react';

import { StyledButton } from './StyledComponents/Button.style';

const CodeOutput = (props) => {
  return ( 
        <>
            <textarea name="" id="code" cols="30" rows="10"></textarea>
            <div>
                <StyledButton onClick={() => props.copyCode()}>Kopiuj</StyledButton>
            </div>
        </>
     );
}
 
export default CodeOutput;