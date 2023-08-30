import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'useAuth';
import { AccentText, Container, UserText, Button } from './UserMenu.styled';
import { FaUserCircle } from 'react-icons/fa';
import { RiLogoutBoxRLine } from 'react-icons/ri';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <UserText>
        <FaUserCircle/>
        Welcome,  <AccentText>{user.name}</AccentText>
      </UserText>
      <Button type="button" onClick={() => dispatch(logOut())}>
        LogOut
        <RiLogoutBoxRLine/>
      </Button>
    </Container>
  );
};