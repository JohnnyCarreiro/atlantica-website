import React from 'react';

import { Container } from './styles';
interface TextLeftSmallProps{
  image:string
  imgText:string
  title:string
  text?:string
  linkText?:string
  link?:string
}

const TextLeftSmall: React.FC<TextLeftSmallProps> = ({image, imgText, title, text, linkText, link, children}) => {
  return (
    <Container>
      <div className="textWrapper">
        <h3>{title}</h3>
        {text ? <p> {text} </p> : children}
        <a href={link}><small> {linkText} </small></a>
      </div>
      <div className="imgWrapper" >
        <img src={image} alt={imgText} />
      </div>
    </Container>
  );
};

export default TextLeftSmall;
