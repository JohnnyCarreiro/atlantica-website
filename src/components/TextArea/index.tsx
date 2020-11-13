import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name:string,
  label:string,
}

const TextArea: React.FC<TextareaProps> = ({name,label, ...rest}) =>{
  return(
    <Container>
      <div className="textarea-block">
          <label htmlFor={name}>{label}</label>
          <textarea  id={name} {...rest}/>
      </div>
    </Container>
  )
}

export default TextArea;
