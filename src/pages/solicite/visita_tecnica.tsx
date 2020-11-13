import Head from 'next/head'
import React from 'react'
import { Container } from '../../styles/visita_tecnica_styles'

import Navbar2 from '../../components/Navbar2'
import Hero from '../../components/Hero'

import heroImg from '../../assets/images/hero.png'
import SimulationForm from '../../components/SimulationForm'
import Footer from '../../components/Footer'



const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Atlântica Solar - Pequenas empresas</title>
      </Head>
      <Navbar2 current="Serviços" />
      <Container>
        <Hero image={heroImg} current="Solicite/visita técnica" title="Do tamanho da sua empresa"/>
        <div className="mainContainer">
          <div className="wrapperColumn">
            <div className="content">
            <SimulationForm
                sourceFrom="mkt"
                title="Simulação"
              >
                <p>
                  Nosso time de engenheiros irá utilizar as informações básicas fornecidas através do formulário ao lado para poder fazer uma previsão do potencial de economia que sua empresa pode vir a ter.<br/><br/>
                  Com dados de local e valor médio de consumo mensal em energia elétrica. Poderemos usar nosso banco de dados com as informações da irradiação solar no seu CEP, com estes dados saberemos quais e quantas painéis solares e inversores serão necessários. E valor da conta com energia, mostrará qual será nosso limite de gastos para o projeto.<br/><br/>
                  Vale ressaltar que estes serão os valores aproximados, cada região possui um valor por kWatt/h diferente,  para que você tenha uma avaliação mais assertiva é necessário que você solicite uma visita técnica, onde será avaliada a área disponível para a implantação e poderemos fazer cálculos mais exatos.</p>
              </SimulationForm>
            </div>
          </div>
        </div>
        
      </Container>
      <Footer />
    </>
  );
}

export default AboutPage
