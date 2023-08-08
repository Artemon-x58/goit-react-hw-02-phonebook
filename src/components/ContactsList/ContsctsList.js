import React from 'react';
import { List, Title } from './ContactsList.styled';

import { Filter } from 'components/Filter/Filter';
import { ListItem } from 'components/ListItem/ListItem';

export class ContactsList extends React.Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <>
        <Title>Contacts</Title>
        <Filter />
        <List>
          {this.props.contactsState.map(contact => (
            <ListItem key={contact.id} contact={contact} />
          ))}
        </List>
      </>
    );
  }
}
