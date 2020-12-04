import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTimes, FaBars } from 'react-icons/fa'
import logo from '../../assets/images/logo/logo_pb.svg'

import { BottomNavBar, Header, NavContainer } from './styles';
interface NavProps{
  current:string
}
const Navbar: React.FC<NavProps> = ({current}) => {
  const [ display, setDisplay ] = useState(false)

  const handleShowingMenu = () => {
    setDisplay(!display)
  }
  const closeMobileMenu = () => {
    setDisplay(false)
  }
  
  return (
      <Header>
        <div className="topNavbar">
          <div className="contactsContainer">
            <div className="socialMedia">
              <ul>
                <li><a href="#"><FaFacebookSquare/></a></li>
                <li><a href="#"><FaInstagramSquare/></a></li>
                <li><a href="#"><FaLinkedinIn/></a></li>
                <a href=""></a>
              </ul>
            </div>
            <div className="mainContacts">
              <ul>
                <li><a href="tel:+5511998253434">11 99825-3434</a></li>
                <li><a href="mailto:contato@atlanticasolar.com.br">contato@atlanticasolar.com.br</a></li>
              </ul>
            </div>
          </div>
        </div>
        <BottomNavBar>
          <NavContainer >
            <div className="logoPlaceHolder" >
              <a href="/"> <img src={logo} alt="Logo Atlântica Solar"/> </a>
            </div>
            <nav className={display ? 'showMenu' : ''}>
              <ul>
                <li className={current === 'Inicio' ? 'menuItem active' : 'menuItem'} >
                  <a className={current === 'Inicio' ? 'active' : ''} onClick={closeMobileMenu} href="/">Inicio</a>
                </li>
                <li className={current === 'Sobre' ? 'menuItem active' : 'menuItem'} >
                  <a className={current === 'Sobre' ? 'active' : ''} onClick={closeMobileMenu} href="/sobre">Sobre</a>
                </li>
                <li className={current === 'Produtos' ? 'menuItem active' : 'menuItem'} >
                  <a className={current === 'Produtos' ? 'active' : ''} onClick={closeMobileMenu} href="/produtos">Produtos</a>
                </li>
                <li className={current === 'Serviços' ? 'menuItem active' : 'menuItem'} >
                  <a className={current === 'Serviços' ? 'active' : ''} onClick={closeMobileMenu} href="/servicos">Serviços</a>
                </li>
                <li className={current === 'Contato' ? 'menuItem active' : 'menuItem'} >
                  <a className={current === 'Contato' ? 'active' : ''} onClick={closeMobileMenu} href="/contato">Contato</a>
                </li>
              </ul>
            </nav>
            <div className="menuIcon" onClick={handleShowingMenu}>
              { display ? <FaTimes /> : <FaBars /> }
            </div>
          </NavContainer>            
        </BottomNavBar>
      </Header>      
  );
};

export default Navbar;
