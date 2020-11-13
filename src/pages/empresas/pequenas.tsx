import Head from 'next/head'
import React from 'react'
import { Container } from './pequenas_styles'

import Navbar2 from '../../components/Navbar2'
import Hero from '../../components/Hero'
import TextLeftSmall from '../../components/TextLeftSmall'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

import heroImg from '../../assets/images/hero.png'
import smallBusiness from '../../assets/images/smallBusiness.jpg'


const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Atlântica Solar - Pequenas empresas</title>
      </Head>
      <Navbar2 current="Servicos" />
      <Container>
        <Hero image={heroImg} current="Serviços/pequenas" title="Do tamanho da sua empresa"/>
        <div className="mainContainer">
          <div className="wrapperColumn">
            <div className="content">
              <h2>Pequenas empresas</h2>
              <TextLeftSmall 
                image={smallBusiness}
                imgText="Atlântica Solar" 
                title="Comece a pensar grande"
              >
                <p>
                Sabemos as dificuldades que empresas pequenas enfrentam antes de se estabilizarem, começarem a investir e crescer.<br/> <br/>
                Sabendo desses, e outros, desafios então iremos desenhar uma solução em energia solar, para que este investimento diluído em até 60 meses, possam ser equivalentes ao valor que sua empresa gasta hoje com energia elétrica.<br/><br/>
                Isso te proteje dos aumentos das tarifas futuras e após o período final do investimento, sua empresa terá este capital disponível para investir em outras áreas.<br/><br/>
                Tudo depende de onde sua empresa quer chegar!
                </p>
              </TextLeftSmall>
              {/* <p>Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Quem manda na minha terra sou euzis!Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Quem manda na minha terra sou euzis!</p> */}
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
