import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

  header {
    background-color: var(--primary);
    border-top: 40px solid var(--primaryDark);

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 40px;
    }

    h1 {
      color: var(--white);
      margin: 16px 0px 40px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-self: center;

    width: 400px;
    background-color: var(--white);
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 1px 3px -1px var(--black);

    h2 {
      color: var(--primaryDark);
      text-align: center;
      font-size: 20px;
      text-transform: uppercase;
    }
  }

  footer {
    background-color: var(--primary);
    height: 48px;
  }
`;

export const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 20px;
`;
