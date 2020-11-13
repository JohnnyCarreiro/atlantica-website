import React from 'react';

import { Container } from './styles';
interface ServicesProps{
  image:string
  title:string
  text:string
  link:string
}

const Services: React.FC <ServicesProps> = ({image, title, text, link}) => {
  return (
    <Container>
      <div className="image">
        <img src={image} alt="algo"/>          
      </div>
      <h3>{title}</h3>
      <p> {text} </p>
      <a href={link}>Saiba Mais ...</a>
    </Container>
  );
};

export default Services;
