import React, {FormEvent, useState} from 'react';
import dynamic from 'next/dynamic'
import { useRouter }  from 'next/router'

import Input from '../Input';
import TextArea from '../TextArea';

import { FaPhone, FaMapMarker } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

import { Container } from './styles';
import api from '../../services/api';


const ContactForm: React.FC = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [observation, setObservation] = useState('')

  const router = useRouter()

  const handleSubmitingForm = (event:FormEvent) => {
    event.preventDefault()
    api.post('/contacts',{
      name,
      email,
      phone,
      observation,
    }).then((response)=>{
      response.statusText
      alert('Contato Enviado com sucesso!')
      router.push('/')
    }).catch(()=>{
      alert('Erro ao enviar Contato')
      setTimeout(1000);
  })
  }

  const Map = dynamic(
    ()=>import('../Map'),
    {
      loading: ()=> <p>Mapa Carrgando</p>,
      ssr:false
    }
  )
  return (
    <Container>
      <h1>Contatos</h1>
      <h3>Venha tomar um café conosco, ou se preferir deixe-nos uma mensagem, que entraremos em contato!</h3>
      <div className="content">
        <div className="mainText">
        <Map />
          <h2>Informações</h2>
          <h3>Estes são os nossos principais contatos, estamos ansiosos para falar com você e ver como podemos te ajudar!</h3>
          <div className="contacts">
            <div className="phone">
              <a href="tel:+5511998253434"><FaPhone />+55 11 99825-3434</a>
            </div>
            <div className="address">
            <a><FaMapMarker />Rua Gustavo Ambrust, Nova Campinas, Campinas - SP</a>
            </div>
            <div className="email">
              <a href="mailto:contato@atlanticasolar.com.br"><MdMail />contato@atlanticasolar.com.br</a>
            </div>
          </div>
        </div>
        <form action="submit" method="POST" className="mainForm" onSubmit={handleSubmitingForm}>
          <small>Os campos com * são obrigatórios</small>
          <Input 
            required 
            name="name" 
            label="Nome *" 
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          <Input 
            required 
            name="email" 
            label="E-mail *"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <Input 
            required 
            name="phone" 
            label="Telefone com DDD *"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}} 
          />        
            
          <TextArea 
            name="observation" 
            label="Deixe a sua mensagem"
            value={observation}
            onChange={(e)=>{setObservation(e.target.value)}} 
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;
