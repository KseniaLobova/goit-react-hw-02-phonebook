import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filters } from './Filters/Filters';

import { nanoid } from 'nanoid';

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

  addContact = newContact => {
    const isContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(newContact.name.toLowerCase())
    );
    if (isContact) {
      alert('sorry');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  onChangeFilter = value => {
    this.setState(prevState => ({
      ...prevState,
      filter: value,
    }));
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const newFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(newFilter)
    );
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filters onChangeFilter={this.onChangeFilter} />
        <ContactList contacts={this.getVisibleContact()} />
      </div>
    );
  }
}
