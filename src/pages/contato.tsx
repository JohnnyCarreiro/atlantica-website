import React from 'react'
import Head from 'next/head'

import { Container } from './conatato_styles'

import heroImg from '../assets/images/hero.png'

import Navbar2 from '../components/Navbar2'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const ServicesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Atlântica Solar - Contato</title>
      </Head>
      <Navbar2 current="Contato" />
      <Container>
      <Hero image={heroImg} current="Contato" title="Fala com a gente"/>
      <div className="mainContainer">
        <div className="wrapperColumn">
          <div className="contactsAndMap">
            <ContactForm />
          </div>
        </div>
      </div>
      </Container>
      <Footer />
    </>
  );
}

export default ServicesPage;
