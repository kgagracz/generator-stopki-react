// TODO 
// Trzeba zrobić osobną tablicę, która będzie zbierać wpisane dane i podmieniać tablice ze state na tą tablice

import './App.css';
import {Link} from 'react-router';
import React, { Component } from 'react';
import styled from 'styled-components';

import Preloader from './Components/Preloader';
import GeneratorForm from './Components/GeneratorForm';
import GeneratorOutput from './Components/GeneratorOutput';
 
class App extends Component {
  state = { 
    signature: {
          nameSurname: 'Ania Kowalska',
          position: 'Specialista ds. sprzedaży',
          tel1: '+48 111 111 111', 
          tel2: '+48 222 222 222', 
          email: 'imie.nazwisko@firma.pl', 
          website: 'www.netsendo.pl', 
          logo: 'logo',
          avatarUrl: 'http://stopka.ec-at.com/img/avatar-woman.png',
          fbUrl: 'social url',
          igUrl: 'social url',
          liUrl: 'social url',
          bannerImgUrl: 'baner img', 
          bannerLinkUrl: 'baner link',
          bottomText: 'bottom tekst',
        },
          
      company: 'netsendo',
   }

  componentDidMount() {
    document.querySelector('#code').textContent = document.querySelector('#Tabela_01').outerHTML;
    setInterval(() => {
      document.getElementById('preloader').classList.remove('show-preloader');
    }, 700);
  }

  changeSignatureData = (signature) => {
    this.setState({signature: signature})
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
          <GeneratorForm company={this.state.company} changeCompany={this.changeCompany} signature={this.state.signature} changeSignatureData={this.changeSignatureData}/>
          <GeneratorOutput company={this.state.company} signature={this.state.signature} copyCode={this.copyCode}/>
        </AppWrapper> 
      </>
    );
  }
}

const AppWrapper = styled.div`
  display: flex;
`

export default App;