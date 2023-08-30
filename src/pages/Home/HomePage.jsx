import { useAuth } from 'useAuth';
import { Container, Title, AccentText, UserText } from './HomePage.styled';

export default function HomePage() {

  const { user } = useAuth();

  return (
    <>
      <Container>
      <UserText>
        Hello, <AccentText>{user.name}</AccentText>
      </UserText>
        <Title>Welcome to your Phonebook!</Title>
      </Container>
    </>
  );
}