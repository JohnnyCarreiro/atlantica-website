import Head from 'next/head'
import React from 'react'
import { Container } from '../../styles/medias_styles'

import Navbar2 from '../../components/Navbar2'
import Hero from '../../components/Hero'
import TextLeftSmall from '../../components/TextLeftSmall'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

import heroImg from '../../assets/images/hero.png'
import mediumBusiness from '../../assets/images/mediumBusiness.jpg'



const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Atlântica Solar - Pequenas empresas</title>
      </Head>
      <Navbar2 current="Servicos" />
      <Container>
        <Hero image={heroImg} current="Serviços/médias" title="Do tamanho da sua empresa"/>
        <div className="mainContainer">
          <div className="wrapperColumn">
            <div className="content">
              <h2>Médias empresas</h2>
              <TextLeftSmall 
                image={mediumBusiness}
                imgText="Atlântica Solar" 
                title="Alcance novos horizontes"
                >
                <p>
                Prepare-se para o próximo passo, um planta de energia solar em sua empresa pode de ajuda-la de inúmeras formas. Um dos mais importantes é que sua empresa passa a investir na própria geração de energia e o custo que sua empresa tinha com as contas deste serviço se tornarão receitas.<br/><br/>
                Podemos fazer o projeto de várias formas, sempre visando o que será melhor para sua empresa hoje.<br/><br/>  
                Partindo do básico, podemos desenhar uma solução onde o custo do investimento com a usina solar, diluído em até 60 meses, seja equivalente aos gastos atualmente com as contas de energia.  Se sua empresa já tem planos bem definidos de crescimento e ja consegue estimar o consumo futuro de kiloWatts, poderemos leva isso em conta. Enfim, venha tomar um café conosco ou agende uma vista técnica.<br/><br/>
                Tudo depende de onde sua empresa quer chegar!
                </p>
              </TextLeftSmall>
              {/* <p>
                Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Quem manda na minha terra sou euzis!Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Quem manda na minha terra sou euzis!
              </p> */}
              <div className="cta">
                <h2>Veja o que podemos fazer pela sua empresa</h2>
                <p>Temos um time dedicado de profissionais dispostos a desenvolver as melhores soluções para sua empresa. Entre em contato e descubra o valor da sua economia e investimentos, se existirem.</p>
                <div className="btn">
                  <Button text="Solicite Agora" link="../solicite/visita_tecnica" />
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

export default AboutPage
