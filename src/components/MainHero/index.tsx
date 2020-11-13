import React from 'react'
import Button from '../Button'

import { Container } from './styles'

const MainHero: React.FC = () => {
  
  return (
    <Container>
      <div className="mainHero wrapperColumn">
        <h3>SAIA DO ESCURO, CHEGOU A SOLUÇÃO EM ENERGIA SOLAR</h3>
        <h2>Somos a ATLÂNTICA SOLAR</h2>
        <p>A Atlântica Solar, em sua parceria com a Canadian Solar, que possibilita empresas a gerarem energia de forma limpa e barata, através da tecnologia de painéis fotovoltáicos, comumente conhecida como energia solar. Fazemos a análise de viabilidade, juntamente com o design e estruturação da instalação completa. Trabalhamos em parceria com os melhores fornecedores e técnicos para instalação e manutenção  dos painéis e inversores para atender com eficiência suas necessidades energéticas.</p>
        <Button text="Saiba Mais" link="/sobre"/>
      </div>
    </Container>
  );
};

export default MainHero
