import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/servicos_styles'

import heroImg from '../assets/images/hero.png'
import bluePrintImg from '../assets/images/bluePrint.jpg'

import smallBusiness from '../assets/images/smallBusiness.jpg'
import mediumBusiness from '../assets/images/mediumBusiness.jpg'
import bigBusiness from '../assets/images/bigBusiness.jpg'


import Navbar2 from '../components/Navbar2'
import Hero from '../components/Hero'
import TextRightMain from '../components/TextRightMain'
import Footer from '../components/Footer'
import Services from '../components/Services'

const ServicesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Atlântica Solar - Serviços</title>
      </Head>
      <Navbar2 current="Serviços" />
      <Container>
      <Hero image={heroImg} current="Serviços" title="Soluções em Energia"/>
      <div className="mainContainer">
        <div className="wrapperColumn">
          <div className="services">
             <TextRightMain 
              image={bluePrintImg}
              imgText="Image project" 
              title="Nosso time de engenharia"
              subTitle="Projeto completo"
            >
              <p>
              Nossa empresa trabalha com um time de profissionais de diversas áreas para que possamos ter uma prestação de serviço mais assertiva, visando trazer Soluções para uma das principais necessidades das empresas hoje, Energia elétrica.<br/><br/>
              Como nossa parceria com a Canadian Solar, temos a nossa disposição o que há de melhor e mais tecnológico no segmento de geração de energia solar fotovoltaica, mas este não é o nosso maior diferencial. Nos destacamos na elaboração de projetos que venham a atender as necessidades energéticas atuais e futuras de cada empresa. Nossos serviços vão desde a viabilidade, design das plantas, acompanhamento e execução da implantação e  manutenção.
              </p>
            </TextRightMain>
            <div className="companyServices">
              <h1>Do Tamanho da sua empresa</h1>
              <h2>Soluções voltadas para cada porte, seguimento e finalidade de cada empresa</h2>
              <div className="servicesCards">
              <Services 
                  image={smallBusiness}
                  title="Pequenas"
                  text="Hoje um dos maiores gastos, seja qual for o tamanho da sua empresa, são os gatos com energia elétrica. Existimos para que sua empresa passe a investir mais em seus próprios negócios...Conheça mais a respeito da energia solar e como que isso pode ajudar a sua empresa a crescer!" 
                  link="/empresas/pequenas"
                />
                <Services 
                  image={mediumBusiness}
                  title="Médias"
                  text="Hoje um dos maiores gastos, seja qual for o tamanho da sua empresa, são os gatos com energia elétrica. Existimos para que sua empresa passe a investir mais em seus próprios negócios...Conheça mais a respeito da energia solar e como que isso pode ajudar a sua empresa a crescer!" 
                  link="/empresas/medias"
                />
                <Services 
                  image={bigBusiness}
                  title="Grandes"
                  text="Hoje um dos maiores gastos, seja qual for o tamanho da sua empresa, são os gatos com energia elétrica. Existimos para que sua empresa passe a investir mais em seus próprios negócios ...Conheça mais a respeito da energia solar e como que isso pode ajudar a sua empresa a crescer!" 
                  link="/empresas/grandes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </Container>
      <Footer />
    </>
  );
}

export default ServicesPage;
