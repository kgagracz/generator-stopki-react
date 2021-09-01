import React, { Component, useState } from 'react'

import InputField from './InputField';
import Typography from '../Typography';

import { StyledLabelContainer } from '../StyledComponents/Input.style';

import {CgMathMinus} from 'react-icons/cg';
import {BsPencil} from 'react-icons/bs';
const initialCurrent = { target:'', id: '', display: false }
const Inputs = (props) => {
    const [current, setCurrentFieldActive] = useState(initialCurrent)

    return ( 
        <>
            <Typography
                target={current.target}
                id={current.id}
                display={current.display}
                signature={props.signature}
                toggleTypography={setCurrentFieldActive}
            />
            <InputField 
                type='text'
                signature={props.signature}
                name='nameSurname'
                label='Imie i nazwisko'
                id='nameSurname-input'
                placeholder='Ania Kowalska'
                toggleElement={props.toggleElement}
                toggleTypography={() => setCurrentFieldActive({ target: 'nameSurname', id: 'nameSurname-typography', display: !current.display})}
            />
            <InputField
                type='text'
                signature={props.signature}
                name='position'
                label='Stanowisko'
                id='position-input'
                placeholder='Programista'
                toggleElement={props.toggleElement}
                toggleTypography={() => setCurrentFieldActive({ target: 'position', id: 'position-typography', display: !current.display})}
            />
            <InputField
                type='text'
                signature={props.signature}
                name='tel1'
                label='Telefon'
                id='tel1-input'
                placeholder='+48 111 111 111'
                toggleElement={props.toggleElement}
                toggleTypography={() => setCurrentFieldActive({ target: 'tel1', id: 'tel1-input', display: !current.display})}

            />
            <InputField
                type='text'
                signature={props.signature}
                name='tel2'
                label='Telefon 2'
                id='tel2-input'
                placeholder='+48 222 222 222'
                toggleElement={props.toggleElement}
                toggleTypography={() => setCurrentFieldActive({ target: 'tel2', id: 'tel2-input', display: !current.display})}
            />
            <InputField 
                type='text'
                signature={props.signature}
                name='email'
                label='E-mail'
                id='email-input'
                placeholder='imie.nazwisko@netsendo.pl'
                toggleElement={props.toggleElement}
                toggleTypography={() => setCurrentFieldActive({ target: 'email', id: 'email-input', display: !current.display})}
            />
            <InputField 
                type='text'
                signature={props.signature}
                name='fbUrl'
                label='Link do Facebooka'
                id='fbUrl-input'
                placeholder='https://www.facebook.com/NetSendoPL'
                toggleElement={props.toggleElement}
                toggleTypography={() => setCurrentFieldActive({ target: 'fbUrl', id: 'fbUrl-input', display: !current.display})}
            />
            <InputField 
                type='text'
                signature={props.signature}
                name='igUrl'
                label='Link do Instagrama'
                id='igUrl-input'
                placeholder='https://www.instagram.com/net_sendo/'
                toggleElement={props.toggleElement}
            />
            <InputField 
                type='text'
                signature={props.signature}
                name='liUrl'
                label='Link do Linked In'
                id='liUrl-input'
                placeholder='https://www.linkedin.com/company/netsendo/'
                toggleElement={props.toggleElement}
            />
            <InputField 
                type='text'
                signature={props.signature}
                name='bannerImgUrl'
                label='Link do banera (zdjęcie)'
                id='bannerImgUrl-input'
                placeholder='https://www.linkedin.com/company/netsendo/'
                toggleElement={props.toggleElement}
            />
            <InputField 
                type='text'
                signature={props.signature}
                name='bannerLinkUrl'
                label='Link do którego prowadzi baner'
                id='bannerLinkUrl-input'
                placeholder='https://www.linkedin.com/company/netsendo/'
                toggleElement={props.toggleElement}
            />
            <StyledLabelContainer>
                <label htmlFor='bottomText'>Dolny text</label>
                <BsPencil 
                target={'bottomText'}
                />
                <CgMathMinus onClick={() => props.toggleElement('bottomText')}/>
                <textarea 
                name='bottomText'
                id='bottomText-input'
                placeholder='Cześć, mam na imię Krystian i jestem początkującym, prężnie rozwijającym się front-end developerem.'
                toggleElement={props.toggleElement}
                toggleTypography={() => setCurrentFieldActive({ target: 'bottomText', id: 'bottomText-input', display: !current.display})}
                />
            </StyledLabelContainer>
        </>
     );
}
 
export default Inputs;