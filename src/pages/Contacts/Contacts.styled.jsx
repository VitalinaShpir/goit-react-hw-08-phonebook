import styled from '@emotion/styled';

export const MainContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: 2px solid #70009296;
border-radius: 10px;
width: 400px;
height: 600px;
padding: 40px 25px;
background: radial-gradient(ellipse at top, #c49ed59b, transparent),
  radial-gradient(ellipse at bottom, #8555bb9b, transparent);
box-shadow: 10px 5px 5px #8555bb9b;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  min-width: 350px;
`;

export const MainTitle = styled.h1`
  margin-bottom: 20px;

  font-size: 32px;
  text-align: center;
  color: white;
`;

export const ContactsTitle = styled.p`
margin: 10px auto 20px auto;
padding: 5px 10px;
text-align: center;
font-size: 32px;
color: rgb(77, 0, 95);
font-weight: bold;
letter-spacing: 0.2rem;
text-shadow: 6px 3px #ffffffa7;
`;

export const FilterTitle = styled.p`
  margin-bottom: 3px;

  font-size: 18px;
  text-align: center;
  color: white;
`;