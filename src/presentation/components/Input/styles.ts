import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid var(--primaryLight);
  line-height: 40px;
  border-radius: 4px;
  width: 100%;

  display: flex;
  align-items: center;

  &:focus {
    outline-color: var(--primaryLight);
  }

  & + div {
    margin-top: 8px;
  }

  input {
    background-color: transparent;
    flex: 1;
    padding: 10px;
  }

  span {
    margin-right: 10px;
    cursor: help;
  }
`;
