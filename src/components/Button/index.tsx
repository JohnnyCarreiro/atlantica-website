import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';
interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>{
  text:string
  link:string
}
const Button: React.FC<ButtonProps> = ({text, link, ...rest}) => {
  return (
    <Container>
      <a href={link} {...rest} > {text} </a>
    </Container>
  );
};

export default Button;
