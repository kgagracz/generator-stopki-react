import React, { Component } from 'react'

import InputField from './InputField';

const Inputs = (props) => {
    return ( 
        <>
            <InputField 
            type='text'
            signature={props.signature}
            name='nameSurname'
            label='Imie i nazwisko'
            id='nameSurname-input'
            placeholder='Ania Kowalska'
            toggleElement={props.toggleElement}
            toggleTypography={props.toggleTypography}
            />
            <InputField 
            type='text'
            signature={props.signature}
            name='position'
            label='Stanowisko'
            id='position-input'
            placeholder='Programista'
            toggleElement={props.toggleElement}
            toggleTypography={props.toggleTypography}
            />
            <InputField 
            type='text'
            signature={props.signature}
            name='tel1'
            label='Telefon'
            id='tel1-input'
            placeholder='+48 111 111 111'
            toggleElement={props.toggleElement}
            toggleTypography={props.toggleTypography}
            />
            <InputField 
            type='text'
            signature={props.signature}
            name='tel2'
            label='Telefon 2'
            id='tel2-input'
            placeholder='+48 222 222 222'
            toggleElement={props.toggleElement}
            toggleTypography={props.toggleTypography}
            />
            <InputField 
            type='text'
            signature={props.signature}
            name='email'
            label='E-mail'
            id='email-input'
            placeholder='imie.nazwisko@netsendo.pl'
            toggleElement={props.toggleElement}
            toggleTypography={props.toggleTypography}
            />
            <InputField 
            type='text'
            signature={props.signature}
            name='fbUrl'
            label='Link do Facebooka'
            id='fbUrl-input'
            placeholder='https://www.facebook.com/NetSendoPL'
            toggleElement={props.toggleElement}
            toggleTypography={props.toggleTypography}
            />
            <InputField 
            type='text'
            signature={props.signature}
            name='igUrl'
            label='Link do Instagrama'
            id='igUrl-input'
            placeholder='https://www.instagram.com/net_sendo/'
            toggleElement={props.toggleElement}
            toggleTypography={props.toggleTypography}
            />
            <InputField 
            type='text'
            signature={props.signature}
            name='liUrl'
            label='Link do Linked In'
            id='liUrl-input'
            placeholder='https://www.linkedin.com/company/netsendo/'
            toggleElement={props.toggleElement}
            toggleTypography={props.toggleTypography}
            />
            <InputField 
            type='text'
            signature={props.signature}
            name='bannerLinkUrl'
            label='Link do którego prowadzi baner'
            id='bannerLinkUrl-input'
            placeholder='https://www.linkedin.com/company/netsendo/'
            toggleElement={props.toggleElement}
            toggleTypography={props.toggleTypography}
            />
        </>
     );
}
 
export default Inputs;