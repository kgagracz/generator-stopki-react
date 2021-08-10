import React, { Component } from 'react';
import styled from 'styled-components';

const Signature = () => {

    const styles = {
        table: {
            boxSizing: 'border-box',
            fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
        },
        name: {
            margin: '0 10px',
            fontSize: '28px',
            color: '#5d2772',
            fontWeight: 'bold',
        },
        posistion: {
            color:'#cae01c',
            margin: '0 0 0 10px',
            fontStyle: 'italic',
            fontSize: '18px',
        },
        ul: {
            listStyleType: 'none',
            fontSize: '14px',
            color: 'grey',
            padding: '0 0 0 10px',
        },
        li: {
            width: '100%',
            margin: 0,
            padding: 0,
        },
        bottomText: {
            color: '#5d2772',
            fontSize: '13px',
            textAlign: 'center',
            padding: '3px',
        },
        bold: {
            fontWeight: 'bold'
        },
        flexCC: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        SMLinks: {
            paddingLeft: '10px'
        },
    }

    return ( 
        <>
                <table id="Tabela_01" style={styles.table} leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" width="600" cellpadding="0" cellspacing="0">
                    <tr>
                        <td colspan="3" style={{display: 'flex', justifyContent: 'center',}}>
                            <img id="image-output" src="https://netsendo.com/wp-content/uploads/2021/06/julia-dylag.png" widtd="150" height="150" alt="profil" style={{objectFit:'contain'}}></img>
                        </td>
                        <td rowspan="3" style={{padding: 0}}>
                            <p 
                            id="name-output" 
                            class="name-typography-output" 
                            data-output-target="name" 
                            style={styles.name}>
                                Ania Kowalska
                            </p>
                            <p 
                            id="position-output" 
                            data-output-target="position" 
                            class="position-typography-output" 
                            style={styles.posistion}>
                                Specialista ds. sprzedaży
                            </p>
                            <ul style={styles.ul}>
                                <li style={styles.li}><span style={styles.bold}>tel: </span> <span id="phone-output" data-output-target="phone">+48 123 123 123</span> </li>
                                <li style={styles.li} id="phone2-output"><span style={styles.bold}>tel: </span> <span data-output-target="phone2">+48 123 123 123</span> </li>
                                <li style={styles.li}><span style={styles.bold}>email: </span> <span id="email-output" data-output-target="email">name@netsendo.pl</span> </li>
                                <li style={styles.li} id="website-output" data-output-target="website"><a style={{textDecoration: 'none'}}>www.netsendo.pl</a></li>
                            </ul> 
                        </td> 
                    </tr>
                    <tr>
                        <td colspan="3" style={styles.flexCC, { padding: '10px 0 0 0' }}>
                            <a href="http://netsendo.pl"><img src="https://netsendo.com/wp-content/uploads/2021/07/logo-mailing.png " alt="logo"></img></a>
                            </td>
                    </tr>
                <tr style={styles.flexCC, { padding: '15px'} }>
                    <td>
                        <a style={styles.SMLinks} id="fb-output" href="https://www.facebook.com/NetSendoPL">
                            <img src="http://stopka.ec-at.com/img/fb.png" widtd="20" height="20" alt=""></img>
                        </a>
                    </td>
                    <td>
                        <a style={styles.SMLinks} id="ig-output" href="https://www.instagram.com/net_sendo/">
                            <img src="http://stopka.ec-at.com/img/ig.png" widtd="21" height="21" alt=""></img>
                        </a>
                    </td>
                    <td>
                        <a style={styles.SMLinks} id="li-output" href="https://www.linkedin.com/company/netsendo/">
                            <img src="http://stopka.ec-at.com/img/in.png" widtd="20" height="20" alt=""></img>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td colspan="7">
                        <a id="banner-link-output" href="http://netsendo.pl">
                            <img id="banner-url-output" src="https://netsendo.com/wp-content/uploads/2021/06/netsendo-wyzszy-poziom-sprzedazy.jpg" width="600px" height="110" alt="baner"></img>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td colspan="7"><p style={styles.bottomText} id="bottom-output" data-output-target="bottom-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, at tenetur aliquam voluptatum ipsam reprehenderit officiis voluptate assumenda iste. Molestiae optio ipsam porro repellendus nam labore laboriosam dicta beatae ducimus?</p></td>
                </tr>
            </table>
        </>
     );
}

export default Signature;