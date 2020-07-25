import styled from 'styled-components';

export const Container = styled.button`
  background-color: var(--primary);
  line-height: 60px;
  color: var(--white);
  border-radius: 8px;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }
`;
