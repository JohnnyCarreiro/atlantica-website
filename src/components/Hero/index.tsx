import React from 'react';
import { MdArrowForward } from 'react-icons/md'

import { Container } from './styles';

interface HeroProps {
  image?:string
  current:string
  title:string
}

const Hero: React.FC<HeroProps> = ({image,current,title}) => {
  return (
    <Container>
      <div 
        className="hero" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0,0, 0.3), rgba(0, 0, 0, 0.3)),url(${image})`, 
          backgroundSize:'cover', 
          backgroundPosition:'bottom',
          backgroundRepeat: 'no-repeat',
          }}
      >
        <div className="navText">
          <div className="wrapperColumn">
            <h2>{title}</h2>
            <div className="navigation">
              <a href="/">Início</a>
              <MdArrowForward/>
              <p> {current} </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
