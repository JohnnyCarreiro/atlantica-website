import React from 'react';

import { Container } from './styles';
interface TextLeftSmallProps{
  image:string
  imgText:string
  title:string
  subTitle:string
  text?:string
}

const TextRightSmall: React.FC<TextLeftSmallProps> = ({image, imgText, title, subTitle, text, children}) => {
  return (
    <Container>
      <h1>{title}</h1>
      <h2> {subTitle} </h2>
      <div className="contentWrapper">
        <div className="imgWrapper" >
          <img src={image} alt={imgText} />
        </div>
        <div className="textWrapper">
          <p> {text ? text : children} </p>
        </div>
      </div>
    </Container>
  );
};

export default TextRightSmall;
