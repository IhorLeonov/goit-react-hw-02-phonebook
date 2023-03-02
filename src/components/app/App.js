import { nanoid } from 'nanoid';
import { Component } from 'react';
import { GlobalStyle } from 'components/constants/GlobalStyle';
import { Layout } from 'components/layout/Layout';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import { MainTitle, Phonebook, SecondTitle } from './App.styled';
import { Notification } from 'components/notification/Notification';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      this.state.contacts.some(
        current => current.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFiltredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filtredContacts = this.getFiltredContacts();
    return (
      <Layout>
        <Phonebook>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm onSubmitForm={this.addContact}></ContactForm>
          <SecondTitle>Contacts</SecondTitle>
          <Filter value={filter} onChange={this.changeFilter} />
          {contacts.length <= 0 ? (
            <Notification message={'Phonebook is empty!'} />
          ) : (
            <ContactList
              contacts={filtredContacts}
              onDelete={this.deleteContact}
            />
          )}

          <GlobalStyle />
        </Phonebook>
      </Layout>
    );
  }
}

