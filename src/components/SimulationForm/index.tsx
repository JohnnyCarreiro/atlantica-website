import React, {FormEvent, useState} from 'react';
import api from '../../services/api';
import Input from '../Input';
import TextArea from '../TextArea';
import Router from 'next/router';

import bluePrint from '../../assets/images/bluePrint.jpg'

import { Container } from './styles';

interface SimulationProps{
  sourceFrom:string
  title:string
  text?:string
  image?:string
}

const SimulationForm: React.FC<SimulationProps> = ({image,sourceFrom,title, text, children}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [value, setValue] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [observation, setObservation] = useState('')

  const handleSubmitingForm = (event:FormEvent) => {
    event.preventDefault()
    api.post('/simulations',{
      source:sourceFrom,
      name,
      email,
      phone,
      company,
      value,
      zipcode,
      observation,
    }).then((response)=>{
      response.statusText
      alert('Contato Enviado com sucesso!')
      Router.push('/')
    }).catch(()=>{
      alert('Erro ao enviar Contato')
      setTimeout(1000);
  })
  }
  
  return (
    <Container>
      <h2>Solicite sua Simulação</h2>
      <h3>Descubra o potencial de economia que sua empresa pode ter</h3>
      <div className="content">
        <div className="mainText">
          <img src={image ? image : bluePrint} alt="image text"/>
          <small>Simulação por nossa conta</small>
          <h3> {title} </h3>
          {text ? <p> {text} </p> : children }
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
          <Input 
            required 
            name="company" 
            label="Nome da empresa *" 
            value={company}
            onChange={(e)=>{setCompany(e.target.value)}}
          />
          <div className="dobleInput">
            <div className="input">
              <Input 
                required 
                type="text" 
                name="value" 
                label="Valor da última conta *" 
                value={value}
                onChange={(e)=>{setValue(e.target.value)}}
              />
            </div>
            <Input 
              required 
              type="text" 
              name="zipcode" 
              label="C.E.P *" 
              value={zipcode}
              onChange={(e)=>{setZipcode(e.target.value)}}
            />
          </div>
          <TextArea 
            name="observation" 
            label="Faça uma observação"
            value={observation}
            onChange={(e)=>{setObservation(e.target.value)}}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </Container>
  );
};

export default SimulationForm;
