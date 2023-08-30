import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 48px;
  text-align: center;
  color: white;
`;

export const UserText = styled.h2`
  text-align: center;
  font-size: 48px;
  letter-spacing: 0.3rem;
  text-shadow: 6px 3px #9c2ebd72;
  color: white;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const AccentText = styled.h2`
  text-align: center;
  font-size: 48px;
  letter-spacing: 0.3rem;
  text-shadow: 6px 3px #9c2ebd72;
  color: white;
`;
