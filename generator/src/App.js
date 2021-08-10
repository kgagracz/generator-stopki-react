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
        values: {
          nameSurname: 'Ania Kowalska',
          position: 'Specialista ds. sprzedaży',
          tel1: '+48 111 111 111',
          tel2: '+48 222 222 222',
          email: 'imie.nazwisko@firma.pl',
          website: 'www.netsendo.pl',
          logo: 'logo url',
          avatarUrl: 'http://stopka.ec-at.com/img/avatar-woman.png',
          fbUrl: 'social url',
          igUrl: 'social url',
          liUrl: 'social url',
          bannerImgUrl: 'baner img',
          bannerLinkUrl: 'baner link',
          bottomText: 'bottom tekst',
        },
        labels: {
          nameSurname: 'Imię i nazwisko',
          position: 'Stanowisko',
          tel1: 'Numer telefonu',
          tel2: 'Numer telefonu 2',
          email: 'E-mail',
          website: 'Strona internetowa',
          avatarUrl: 'Adres url avatara',
          fbUrl: 'Link do Facebooka',
          igUrl: 'Link do Instagrama',
          liUrl: 'Link do LinkedIn',
          bannerImgUrl: 'Adres url banera',
          bannerLinkUrl: 'Link do którego prowadzi baner',
          bottomText: 'Dolny tekst',
        }
      },
      company: 'netsendo'
   }

  componentDidMount() {
    document.getElementById('preloader').remove();
  }

  changeSignatureData = (name, value) => {
    console.log(name)
    console.log(value)
    this.setState({
      name:value
    })
  }

  changeCompany = (company) => {
    this.setState({company: company})
  }

  render() { 
    return ( 
      <>
        <Preloader/>
        <AppWrapper>
          <GeneratorForm changeCompany={this.changeCompany} state={this.state} changeSignatureData={this.changeSignatureData}/>
          <div>
            <Signature company={this.state.company} signature={this.state.signature}/>
          </div>
        </AppWrapper> 
      </>
    );
  }
}
 
const AppWrapper = styled.div`
  display: flex;
`

export default App;