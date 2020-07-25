import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';
import Spinner from '../Spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  ...rest
}) => {
  return (
    <Container type="button" {...rest}>
      {loading ? <Spinner /> : children}
    </Container>
  );
};

export default Button;
