import './App.css';
import {Link} from 'react-router';
import React, { Component } from 'react';
import styled from 'styled-components';

import Preloader from './Components/Preloader';
import GeneratorForm from './Components/GeneratorForm';
import Signature from './Components/Signature';


class App extends Component {
  state = { 
      signature : {
          nameSurname: ['Ania Kowalska', 'Imię i nazwisko'],
          position: ['Specialista ds. sprzedaży', 'Stanowisko'],
          tel1: ['+48 111 111 111', 'Numer telefonu'],
          tel2: ['+48 222 222 222', 'Numer telefonu 2'],
          email: ['imie.nazwisko@firma.pl', 'E-mail'],
          website: ['www.netsendo.pl', 'Strona internetowa'],
          logo: ['logo url'],
          avatarUrl: ['http://stopka.ec-at.com/img/avatar-woman.png', 'Adres Url avatara'],
          fbUrl: ['social url', 'Link do Facebooka'],
          igUrl: ['social url', 'Link do Instagrama'],
          liUrl: ['social url', 'Link do LinkedIn'],
          bannerImgUrl: ['baner img', 'Adres Url banera'],
          bannerLinkUrl: ['baner link', 'Link do którego prowadzi baner'],
          bottomText: ['bottom tekst', 'Dolny tekst'],
      },
      company: 'netsendo'
   }

  componentDidMount() {
    document.getElementById('preloader').remove();
    document.querySelector('#tet').textContent = document.querySelector('#Tabela_01').outerHTML
  }

  changeSignatureData = (name, value) => {

  }

  changeCompany = (company) => {
    this.setState({company: company})
  }

  render() { 
    return ( 
      <>
        <Preloader/>
        <AppWrapper>
          <GeneratorForm changeCompany={this.changeCompany} signature={this.state.signature} changeSignatureData={this.changeSignatureData}/>
          <div>
            <Signature company={this.state.company} signature={this.state.signature}/>
          </div>
          <textarea name="" id="tet" cols="30" rows="10"></textarea>
        </AppWrapper> 
      </>
    );
  }
}
 
const AppWrapper = styled.div`
  display: flex;
`

export default App;