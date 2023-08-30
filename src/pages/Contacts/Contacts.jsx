import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from 'components/Filter/Filter';
import {
  ContactsContainer,
  MainTitle,
  MainContainer,
  ContactsTitle
} from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
    
      <MainContainer>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <ContactsContainer>
        <ContactsTitle>Contacts</ContactsTitle>
          <Filter />
          <ContactList />
        </ContactsContainer>
      </MainContainer>
    </>
  );
}