import Head from 'next/head'
import React from 'react'
import { Container } from './simulacao_styles'

import Navbar2 from '../../components/Navbar2'
import Hero from '../../components/Hero'
import SimulationForm from '../../components/SimulationForm'
import Footer from '../../components/Footer'
import TextLeftSmall from '../../components/TextLeftSmall'
import TextRightSmall from '../../components/TextRightSmall'
import TextRightMain from '../../components/TextRightMain'

import heroImg from '../../assets/images/hero.png'
import install from '../../assets/images/solar/instalation.jpg'
import convert from '../../assets/images/solar/conversion.jpg'
import distro from '../../assets/images/solar/distribution.jpg'



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
            <h2>Como Funciona a Energia Solar</h2>
            <TextRightSmall 
              image={install}
              imgText="image"
              title='Capitação'
            >
              <p>
              A luz do sol é captada durante o dia pelos painéis solares, conhecidos também como módulos fotovoltaicos, e transformada em energia. Para uma melhor eficiência na conversão da radiação solar em energia elétrica, é fundamental que a radiação solar incida diretamente nas células fotovoltaicas. Portanto, quanto maior a incidência de luz direta no painel solar, maior será a produção de energia.<br/><br/>
              Com isso, haverá uma liberação ininterrupta de corrente elétrica que será capturada pelos filamentos condutores dos painéis fotovoltaicos e enviadas aos inversores.
              </p>
            </TextRightSmall>
            <TextLeftSmall
              image={convert}
              imgText="image"
              title='Conversão'
            >
              <p>
              Depois de enviada para o inversor interativo, a corrente contínua será transformada em alternada já que é esse tipo de corrente que é usada em residências e empresas.<br/><br/>
              Lembrando que para ser usada na rede elétrica local, a energia solar passa pelo inversor solar, dispositivo que converte e fornece as características necessárias para seu uso.
              </p>
            </TextLeftSmall>
            <TextRightSmall 
              image={distro}
              imgText="image"
              title='Benefícios'
            >
              <p>
              Com todas estas etapas sua empresa pode usufruir perfeitamente da energia elétrica gerada pelos painéis fotovoltaicos. Caso a energia gerada seja maior que a do consumo, ela é distribuída diretamente à concessionária de energia da sua região, gerando créditos em energia que podem ser utilizados em até 60 meses.
              </p>
            </TextRightSmall>
            <TextRightMain
              image={heroImg}
              imgText="image"
              title='Somos a ATLÂNTICA SOLAR'
              subTitle='Apaixonados por soluções em energia'
              text="A Atlântica Solar, em sua parceria com a Canadian Solar, que possibilita empresas a gerarem energia de forma limpa e barata, através da tecnologia de painéis fotovoltáicos, comumente conhecida como energia solar. Fazemos a análise de viabilidade, juntamente com o design e estruturação da instalação completa. Trabalhamos em parceria com os melhores fornecedores e técnicos para instalação e manutenção  dos painéis e inversores para atender com eficiência suas necessidades energéticas."
            />
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
