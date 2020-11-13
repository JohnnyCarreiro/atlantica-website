import React from 'react';

import { Container } from './styles';

interface TextRightSmallProps{
  image:string
  imgText:string
  title:string
  text?:string
  linkText?:string
  link?:string
}

const TextRightSmall: React.FC<TextRightSmallProps> = ({image, imgText, title, text, linkText, link,children}) => {
  return (
    <Container>
      <div className="imgWrapper" >
        <img src={image} alt={imgText} />
      </div>
      <div className="textWrapper">
        <h3> {title} </h3>
        {text ? <p> {text} </p> : children}
        <a href={link}><small> {linkText} </small></a>
      </div>
    </Container>
  );
};

export default TextRightSmall;
