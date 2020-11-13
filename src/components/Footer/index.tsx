import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa'
import Inputnews from '../Inputnews'

import { Container } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="wrapperColumn">
        <div className="footerWrapper">
          <div className="about">
            <h3>Sobre</h3>
            <p>
            Nossa missão é trazer tecnologias para que possamos ajudar empresas a solucionar problemas energéticos e reduzir gastos. Fazendo com que essas empresas possam investir mais em pesquisas e reduzir custos de produção, que irá impactar diretamente e positivamente seus consumidores.
            </p>
          </div>
          <div className="newsLetter">
            <h3>News Letters</h3>
            <p>
              Acompanhe nossa novidades se inscrevendo abaixo.
            </p>
            <Inputnews name="newsletter" label="Seu melhor e-mail" />
          </div>
          <div className="socialMedia">
            <h3>Mídias Sociais</h3>
            <p>
              Acompanhe-nos em nossa redes sociais!
            </p>
            <ul>
                <li><a><FaFacebookSquare /></a></li>
                <li><a><FaInstagramSquare /></a></li>
                <li><a><FaLinkedinIn /></a></li>
              </ul>
          </div>
        </div>
        <small><a href="#">Copyright ©2020 Todos os direitos reservado | Powered by CONNECT Gestão Digital de Negócios</a></small>
      </div>
      
    </Container>
  );
};

export default Footer
