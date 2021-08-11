import React, { Component } from 'react';
import { styles } from '../StyledComponents/signatureStyleVariables';
const Netsendo = (props) => {
    return ( 
        <>        
            <table id="Tabela_01" style={styles.table} leftMargin="0" topMargin="0" marginWidth="0" marginHeight="0" width="600" cellPadding="0" cellSpacing="0">
                <tr>
                    <td colSpan="3" style={{display: 'flex', justifyContent: 'center',}}>
                        <img id="image-output" src="https://netsendo.com/wp-content/uploads/2021/06/julia-dylag.png" widtd="150" height="150" alt="profil" style={{objectFit:'contain'}}></img>
                    </td>
                    <td rowSpan="3" style={{padding: 0}}>
                        <p 
                        id="nameSurname" 
                        class="name-typography-output" 
                        data-output-target="name" 
                        style={styles.name}>
                            {props.signature.nameSurname ? props.signature.nameSurname : null}
                        </p>
                        <p 
                        id="position" 
                        data-output-target="position" 
                        class="position-typography-output" 
                        style={styles.posistion}>
                            {props.signature.position ? props.signature.position  : null}
                        </p>
                        <ul style={styles.ul}>
                            <li style={styles.li}>
                                <span style={styles.bold}>tel: </span> <span id="tel1" data-output-target="phone">
                                    {props.signature.tel1 ? props.signature.tel1 : null}
                                </span> 
                            </li>
                            <li style={styles.li} id="tel2"><span style={styles.bold}>tel: </span> <span data-output-target="phone2">
                                    {props.signature.tel2 ? props.signature.tel2 : null}
                                </span> 
                            </li>
                            <li style={styles.li}><span style={styles.bold}>email: </span> <span id="email" data-output-target="email">
                                    {props.signature.email ? props.signature.email : null}
                                </span>
                             </li>
                            <li style={styles.li} id="website" data-output-target="website"><a style={{textDecoration: 'none'}}>
                                {props.signature.website ? props.signature.website : null}
                            </a>
                            </li>
                        </ul> 
                    </td> 
                </tr>
                <tr>
                    <td colSpan="3" style={styles.flexCC}>
                        <a href="http://netsendo.pl"><img src="https://netsendo.com/wp-content/uploads/2021/07/logo-mailing.png " alt="logo"></img></a>
                    </td>
                </tr>
                <tr style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 0'}}>
                    <td>
                        <a style={styles.SMLinks} id="fbUrl" href={props.signature.fbUrl}>
                            <img src="http://stopka.ec-at.com/img/fb.png" widtd="20" height="20" alt=""></img>
                        </a>
                    </td>
                    <td>
                        <a style={styles.SMLinks} id="igUrl" href={props.signature.igUrl}>
                            <img src="http://stopka.ec-at.com/img/ig.png" widtd="21" height="21" alt=""></img>
                        </a>
                    </td>
                    <td>
                        <a style={styles.SMLinks} id="liUrl" href={props.signature.liUrl}>
                            <img src="http://stopka.ec-at.com/img/in.png" widtd="20" height="20" alt=""></img>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td colSpan="7">
                        <a id="bannerLinkUrl" href={props.signature.bannerLinkUrl}>
                            <img id="bannerImgUrl" src={props.signature.bannerImgUrl} width="600px" height="110" alt="baner"></img>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td colSpan="7">
                        <p style={styles.bottomText} id="bottomText" data-output-target="bottom-text">{props.signature.bottomText}</p>
                    </td>
                </tr>
            </table>
        </>
     );
}
 
export default Netsendo;
