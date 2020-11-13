import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTimes, FaBars, FaCaretDown } from 'react-icons/fa'
import Dropdown from '../Dropdown';

import { BottomNavBar, Header, NavItems, NavItemsMobile, NavContainer } from './styles';

const Navbar: React.FC = () => {
  const [ display, setDisplay ] = useState(false)
  const [ dropdown, setDropdown ] = useState(false)

  const handleShowingMenu = () => {
    setDisplay(!display)
    setDropdown(false)
  }
  const closeMobileMenu = () => {
    setDisplay(false)
  }
  const handleSetingDropdown = () => {
    setDropdown(!dropdown)
  }
  return (
      <Header>
        <div className="topNavContainer" >
          <div className="contactsContainer">
            <div className="socialMediaContainer">
              <ul>
                <li><a href="#"><FaFacebookSquare /></a></li>
                <li><a href="#"><FaInstagramSquare /></a></li>
                <li><a href="#"><FaLinkedinIn /></a></li>
              </ul>
				  	</div>
            <div className="contactContainer">
              <a href="#">+55 11 9 9999-9999</a>
              <a href="#">contato@atlanticasolar.com.br</a>
            </div>
          </div>
        </div>
        <BottomNavBar>
          <NavContainer >
            <div className="LogoPlaceHolder" >
              <a href="#">LOGO</a>
            </div>
            <div className="menuIcon" onClick={handleShowingMenu}>
              { display ? <FaTimes /> : <FaBars /> }
            </div>
            <NavItems>
              <ul className={display ? 'active' : ''} >
                <li className="menuItem" >
                  <a onClick={closeMobileMenu} href="/">Inicio</a>
                </li>
                <li className="menuItem" >
                  <a onClick={closeMobileMenu} href="/sobre">Sobre</a>
                </li>
                <li className="menuItem" >
                  <a onClick={closeMobileMenu} href="/">Produtos</a>
                </li>
                <li className="menuItem" >
                  <a 
                    onClick={handleSetingDropdown} 
                    onMouseEnter={()=>setDropdown(true)} 
                    href="#"
                  >
                    Serviços <FaCaretDown/>
                  </a>
                  { dropdown && <Dropdown /> }
                </li>
                <li className="menuItem" >
                  <a onClick={closeMobileMenu} href="/">Contato</a>
                </li>
              </ul>
            </NavItems>
          </NavContainer>            
        </BottomNavBar>
        <NavItemsMobile>
              <ul className={display ? 'active' : ''} >
                <li className="menuItem" >
                  <a onClick={closeMobileMenu} href="/">Inicio</a>
                </li>
                <li className="menuItem" >
                  <a onClick={closeMobileMenu} href="/sobre">Sobre</a>
                </li>
                <li className="menuItem" >
                  <a onClick={closeMobileMenu} href="/">Produtos</a>
                </li>
                <li className="menuItem" >
                  <a 
                    onClick={handleSetingDropdown} 
                    onMouseEnter={()=>setDropdown(true)} 
                    href="#"
                  >
                    Serviços <FaCaretDown/>
                  </a>
                  { dropdown && <Dropdown /> }
                </li>
                <li className="menuItem" >
                  <a onClick={closeMobileMenu} href="/">Contato</a>
                </li>
              </ul>
            </NavItemsMobile>
      </Header>      
  );
};

export default Navbar;
