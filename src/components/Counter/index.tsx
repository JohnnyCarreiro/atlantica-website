import React from 'react'

import { Container } from './styles'

interface CounterProps{
  title:string
  number:string
}

const Counter: React.FC<CounterProps> = ({title, number}) => {
  return (
    <Container className="wrapperColumn">
      <div className="border wrapperColumn">
        <div className="sunBG wrapperColumn">
          <h3> {number} </h3>
        </div>
      </div>
      <h3> {title} </h3>
    </Container>
  );
};

export default Counter