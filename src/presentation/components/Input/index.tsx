import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = props => {
  return (
    <Container>
      <input {...props} />

      <span role="img" aria-label="🔴">
        🔴
      </span>
    </Container>
  );
};

export default Input;
