import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 12px;
`;

export const UserText = styled.p`
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const AccentText = styled.span`
  color: white;
`;

export const Button = styled.button`
width: 150px;
height: 40px;
padding: 5px 20px;
align-items: center;
margin: 0 auto;
font-size: 18px;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
column-gap: 5px;
color: white;
background-color: transparent;
border: 1px solid transparent;
border-radius: 5px;
box-shadow: inset 0 5px 15px 4px rgba(0, 0, 0, 0.2);
transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
  border: 1px solid rgba(191, 0, 244, 0.2);
  box-shadow: inset 0 5px 10px 4px rgba(191, 0, 244, 0.2);
}
`;