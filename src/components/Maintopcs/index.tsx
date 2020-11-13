import React from 'react'
import { FiSun } from 'react-icons/fi'

import { Container } from './styles'

interface MaintopcsProps {
  title:string
  text:string
}

const Maintopcs: React.FC<MaintopcsProps> = ({title, text}) => {
  return (
    <Container>
      <a href="#">
        <FiSun className="Icon-sun"/>
        <h3> {title} </h3>
        <p> {text} </p>
      </a>
    </Container>
  );
};

export default Maintopcs
