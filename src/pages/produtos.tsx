import React from 'react'
import Head from 'next/head'

import { Container } from './produtos_styles'

import heroImg from '../assets/images/hero.png'
import kit_1 from '../assets/images/kitcanadian-1.jpg'

import Navbar2 from '../components/Navbar2'
import Hero from '../components/Hero'
import TextRightSmall from '../components/TextRightSmall'
import TextLeftSmall from '../components/TextLeftSmall'
import Footer from '../components/Footer'

const ProductsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Atlântica Solar - Produtos</title>
      </Head>
      <Navbar2 current="Produtos" />
      <Container>
      <Hero image={heroImg} current="Produtos" title="Conheça nossa linha"/>
      <div className="mainContainer">
        <div className="wrapperColumn">
          <div className="products">
            <h2>Nossa Linha de produtos </h2>
            
             <TextRightSmall 
              image={kit_1}
              imgText="Atlântica Solar" 
              title="Paineis e inversores"
            >
              <p>
                Contamos com uma linha diversa de painéis fotovoltaicos, com configurações diferentes parra cada situação, utilizaremos sempre o que trará melhor custo-benefício para sua empresa, contanto sempre com a qualidade impar que a Canadian nos proporciona.<br/><br/>
                Os inversores da Canadian Solar possuem o melhor custo-benefício, alinhando preço justo com qualidade impecável. Nossos inversores podem chegar a mais de 20 anos de vida útil, trazendo confiabilidade e segurança para o investimento da sua empresa.<br/><br/>
                <p style={{fontStyle:'bold', fontSize:24, marginBottom:16}} >Inversores monofásicos</p>
                Os inversores monofásicos  de 3-5kW, são ideias para  pequenos projetos, com tensão de saída de 220V a 230V.<br/><br/>
                <p style={{fontStyle:'bold', fontSize:24, marginBottom:16}} >Inversores Trifásicos</p>
                Os inversores trifásico  de 7-125kW, são ideias para  médios e grandes  projetos, com tensão de saída de 220V a 480V.</p>

            </TextRightSmall>
             <TextLeftSmall 
              image={heroImg}
              imgText="Atlântica Solar" 
              title="Canadian Solar"
              text="Líder mundial de módulos solares, a Canadian Solar desenvolve projetos de alta qualidade além de possuir fábrica no Brasil. A marca é conhecida pela eficiência em fabricar módulos seguros dentro dos padrões de confiança europeia e em todo mundo."
            />

            
          </div>
        </div>
      </div>
      </Container>
      <Footer />
    </>
  );
}

export default ProductsPage;
