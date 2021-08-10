import './App.css';
import {Link} from 'react-router';
import React, { Component } from 'react';

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
          avatarUrl: 'http://stopka.ec-at.com/img/avatar-woman.png',
          fbUrl: '',
          igUrl: '',
          liUrl: '',
          bannerImgUrl: '',
          bannerLinkUrl: '',
          bottomText: '',
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
      }
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

  render() { 
    return ( 
      <>
        <Preloader />
        <GeneratorForm state={this.state} changeSignatureData={this.changeSignatureData}/>
        <Signature />
      </> 
    );
  }
}
 
export default App;