import React, { InputHTMLAttributes } from 'react'
import { FaArrowRight } from 'react-icons/fa'

import { Container } from './styles'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name:string,
  label:string,
}

const Input: React.FC<InputProps> = ({name,label, ...rest}) =>{
  return(
    <Container onSubmit={()=>{}}>
      <div className="input-block">
          <input type="text" id={name} {...rest} placeholder={label} />
          <button type="submit"><div><FaArrowRight/></div> </button>
      </div>
    </Container>
  )
}

export default Input
