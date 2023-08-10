import React from 'react';
import PropTypes from 'prop-types';
import { ContactsList } from './ContactsList/ContsctsList';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid/non-secure';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterContacts = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  createFilterList = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    const newArray = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newArray,
    });
  };

  handleAddContact = e => {
    e.preventDefault();
    const number = e.currentTarget.number.value;
    const name = e.currentTarget.name.value;
    const contactExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }

    e.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <Form add={this.handleAddContact} />
        <ContactsList
          contactsState={this.createFilterList()}
          filterChange={this.filterContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
