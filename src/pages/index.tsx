import * as React from 'react'
import Head from 'next/head'
import Navbar2 from '../components/Navbar2'
import MainHero from '../components/MainHero'
import Maintopcs from '../components/Maintopcs'
import Counter from '../components/Counter'
import Services from '../components/Services'

import smallBusiness from '../assets/images/smallBusiness.jpg'
import mediumBusiness from '../assets/images/mediumBusiness.jpg'
import bigBusiness from '../assets/images/bigBusiness.jpg'

import install from '../assets/images/solar/instalation.jpg'
import convert from '../assets/images/solar/conversion.jpg'
import distro from '../assets/images/solar/distribution.jpg'

import { Container } from '../styles/Index_style'
import TextRightSmall from '../components/TextRightSmall'
import TextLeftSmall from '../components/TextLeftSmall'
import SimulationForm from '../components/SimulationForm'
import Footer from '../components/Footer'
// with-typescript-styled-components

const IndexPage = () => (
  <>
    <Head>
      <meta charSet="utf-8" lang="pt-br"/>
      <title>Atlantica Solar - Inicio</title>
      <link rel="icon" href="#"/>
    </Head>
    <Navbar2 current="Inicio"/>
    <div>
      <MainHero />
      <Container>
      <div className="wrapperRow">
        <div className="wrapperRow topcs">
          <Maintopcs 
            title="Referência" 
            text="A Canadian, nossa principal parceira, tem fabrica no Brasil, o que é uma vantagem de entrega e preços." 
          />
          <Maintopcs 
            title="Comprometimento" 
            text="Expertise e know-how na entrega de resultados." 
          />
          <Maintopcs 
            title="Flexibilidade" 
            text="Projetos desenhados de acordo coma as necessidades da usa empresa." 
          />
          <Maintopcs 
            title="Velocidade" 
            text="Equipe dedicada a solucionar problemas com rapidez e eficácia" 
          />
          
        </div>
      </div>
      <div className="energyNum">
        <div className="wrapperColumn">
          <h3>Energia que mais cresce no Brasil</h3>
          <p>Esses são apenas alguns números de como que a Energia Solar fotovoltática vem crescendo e seus investimentos aumentando</p>
          <div className="conter wrapperRow">
            <Counter title="No último ano (2019)" number="+ 212%" />
            <Counter title="Instalados" number="2,4 GW" />
            <Counter title="Sistemas fotovoltaicos" number="110 mil" />
            <Counter title="Investidos" number="R$ 4,8 bilhões" />
          </div>
        </div>
      </div>
        <div className="wrapperColumn">
          <div className="services">
            <h3>Setores com comprovada experiência</h3>
            <p>Estamos apaixonados por soluções amigáveis ao meio ambiente</p>
          </div>
          <div className="wrapperRow">
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
        <div className="process">
          <div className="wrapperColumn">
            <h2>Como Funciona a Energia Solar</h2>
            <TextRightSmall 
              image={install}
              imgText="image"
              title='Captação'
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
          </div>
        </div>
        <div className="simulation">
          <div className="wrapperColumn">
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
      </Container>
    </div>
    <Footer />
  </>
)

export default IndexPage
