import './App.css';
import {Link} from 'react-router';
import React, { Component } from 'react';
import styled from 'styled-components';

import Preloader from './Components/Preloader';
import Generator from './Components/Generator';
import CodeOutput from './Components/CodeOutput';
import Signature from './Components/Signature';
import { StyledSignatureContainer } from './Components/StyledComponents/StyledSignatureContainer';
 
class App extends Component {
  state = { 
    signature: {
          reset: false,
          refresh: false,
          nameSurname: 'Ania Kowalska',
          position: 'Specialista ds. sprzedaży',
          tel1: '+48 111 111 111', 
          tel2: '+48 222 222 222', 
          email: 'imie.nazwisko@firma.pl', 
          website: 'www.netsendo.pl', 
          logo: 'logo',
          avatarUrl: 'http://stopka.ec-at.com/img/avatar-woman.png',
          fbUrl: 'https://www.facebook.com/NetSendoPL/',
          igUrl: 'https://www.instagram.com/net_sendo/',
          liUrl: 'https://www.linkedin.com/company/netsendo/',
          bannerImgUrl: 'https://netsendo.com/wp-content/uploads/2021/06/netsendo-wyzszy-poziom-sprzedazy.jpg', 
          bannerLinkUrl: 'http://netsendo.pl',
          bottomText: 'bottom tekst',
        },
          
      company: 'netsendo',
   }

  componentDidMount() {

    setInterval(() => {
      document.getElementById('preloader').classList.remove('show-preloader');
    }, 700);

    const localstorageSignature = localStorage.getItem(`${this.state.company}-signature`);
    if (localstorageSignature) {
      this.setState({signature: JSON.parse(localstorageSignature)})
    } 
  }

  resetLocalstorage = () => {
    localStorage.removeItem(`${this.state.company}-signature`);
  }

  changeSignatureData = (signature) => {
    this.setState({signature: signature})
    localStorage.setItem(`${this.state.company}-signature`, JSON.stringify(signature));
  }
  
  changeCompany = (company) => {
    this.setState({company: company})
  }
  
  copyCode = () => {
    document.querySelector('#code').select();
    document.execCommand('copy');
    alert('Kod stopki został skopiowany do schowka');
  }

  render() { 
    return ( 
      <>
        <Preloader/>
        <AppWrapper>
          <Generator 
          company={this.state.company} 
          changeCompany={this.changeCompany} 
          signature={this.state.signature} 
          changeSignatureData={this.changeSignatureData}
          resetLocalstorage={this.resetLocalstorage}
          />
          <StyledSignatureContainer> 
            <Signature company={this.state.company} signature={this.state.signature}/>
            <CodeOutput company={this.state.company} signature={this.state.signature} copyCode={this.copyCode}/>  
          </StyledSignatureContainer>
        </AppWrapper>
      </>
    );
  }
}

const AppWrapper = styled.div`

`

export default App;