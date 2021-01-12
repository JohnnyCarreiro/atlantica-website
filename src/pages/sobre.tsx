import Head from 'next/head'
import React from 'react'
import { Container } from '../styles/sobre_styles'

import Navbar2 from '../components/Navbar2'
import Hero from '../components/Hero'
import TextRightMain from '../components/TextRightMain'

import TextLeftSmall from '../components/TextLeftSmall'
import Footer from '../components/Footer'

import heroImg from '../assets/images/hero.png'
import atlantica from '../assets/images/solar/atlantica.jpg'

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Atlântica Solar - Sobre</title>
      </Head>
      <Navbar2 current="Sobre" />
      <Container>
        <Hero image={heroImg} current="Sobre" title="Somos a ATLÂNTICA SOLAR S.A."/>
        <div className="mainContainer">
          <div className="wrapperColumn">
            <TextRightMain
              image={atlantica}
              imgText="Atlântica Solar S.A." 
              title="Nossa História"
              subTitle="" 
              text=""
            >
              <p>A Atlântica Solar S.A., em sua parceria com a Canadian Solar, que possibilita empresas a gerarem energia de forma limpa e barata, através da tecnologia de painéis fotovoltáicos, comumente conhecida como energia solar. Fazemos a análise de viabilidade, juntamente com o design e estruturação da instalação completa. Trabalhamos em parceria com os melhores fornecedores e técnicos para instalação e manutenção dos painéis e inversores para atender com eficiência suas necessidades energéticas.<br/><br/>
              A Atlântica Solar S.A. foi criada com o intuito de explorar a área e tecnologias em geração de energia limpa e sustentável através dos painéis de células fotovoltaicas. Com toda a bagagem que temos hoje estamos aptos a utilizar deste conhecimento e tecnologias para solucionar problemas em relação a geração de energia elétrica para suprir as necessidades e redução de custos para empresas de todos os portes e segmentos.<br/><br/>
              Seus idealizados estão constantemente engajados em buscar parceiros, tecnologias e treinar seus colaboradores, para que a Atlântica Solar SA possa se focar em solucionar problemas e não em ser mais uma empresa que vende e instala painéis solares.</p>
            </TextRightMain>
            <div className="partiners">
              <h2>Nossos Parceiros</h2>
              <TextLeftSmall 
                image={heroImg}
                imgText="Atlântica Solar S.A." 
                title="Canadian Solar"
                text=""
              >
                <p>Hoje com nossa parceria com  a Canadian Solar, uma das maiores empresas do setor de energia solar fotovoltaica, podemos proporcionar um atendimentos mais rápido e eficiente a nossos clientes. Uma vez que os produtos fabricados pela Canadian contam com uma fábrica situada no Brasil o que reduz custos e tempo de entrega. Tudo visando, alta tecnologia, responsabilidade e entrega continua de nossos serviços.<br/><br/>
                A Canadian Solar Inc. é uma empresa de capital aberto que fabrica módulos fotovoltaicos solares e executa projetos solares em larga escala.</p>
              </TextLeftSmall>
            </div>
          </div>
        </div>
        
      </Container>
      <Footer />
    </>
  );
}

export default AboutPage