import React, { useState } from 'react';
import { MenuItems } from './MenuItems'

import { Container } from './styles';

const Dropdown: React.FC = () => {
  const [ click, setClick ] = useState(false)
  console.log(click)
  // const handleClick = () => {
  //   setClick(!click)
  // }
//onClick={()=> setClick(false)}
  return (
    <Container className={ click ? 'clicked' : '' } onMouseLeave={()=>setClick(true)}>
        <ul className='dropdownMenu'>
          { MenuItems.map((menuItem, index) => (
            <li key={index} className={menuItem.cName}  >
                <p>{ menuItem.title } </p>
                {menuItem.services.map((service,index)=>(
                  <li key={index}>
                    <a 
                      className={service.cName} 
                      href={service.path} 
                      onClick={()=> setClick(false)} 
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
            </li>
          )) }
        </ul>
    </Container>
  );
};

export default Dropdown;
