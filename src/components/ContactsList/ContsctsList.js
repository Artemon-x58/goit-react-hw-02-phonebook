import React from 'react';
import { List, Title } from './ContactsList.styled';
import { Item } from 'components/ListItem/ListItem.styled';

export class ContactsList extends React.Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <List>
        <Title>Contacts</Title>{' '}
        {this.props.contactsState.map(contact => (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
          </Item>
        ))}
      </List>
    );
  }
}
