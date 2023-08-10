import React from 'react';
import PropTypes from 'prop-types';
import { List, Title } from './ContactsList.styled';

import { Filter } from 'components/Filter/Filter';
import { ListItem } from 'components/ListItem/ListItem';

export const ContactsList = ({
  contactsState,
  filterChange,
  deleteContact,
}) => {
  return (
    <>
      <Title>Contacts</Title>
      <Filter onChange={filterChange} />
      <List>
        {contactsState.map(contact => (
          <ListItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </List>
    </>
  );
};

ContactsList.propTypes = {
  contactsState: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filterChange: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
