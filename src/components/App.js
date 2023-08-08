import React from 'react';
import { ContactsList } from './ContactsList/ContsctsList';
import { Form } from './Form/Form';

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

  render() {
    return (
      <div>
        <Form />
        <ContactsList contactsState={this.state.contacts} />
      </div>
    );
  }
}