import { useAuth } from 'useAuth';
import { StyledLink, NavContainer } from './Navigation.styled';
import { BiHomeHeart, BiSolidContact } from 'react-icons/bi';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavContainer>
      <StyledLink to="/">
        <BiHomeHeart />
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          <BiSolidContact />
          Contacts
        </StyledLink>
      )}
    </NavContainer>
  );
};
