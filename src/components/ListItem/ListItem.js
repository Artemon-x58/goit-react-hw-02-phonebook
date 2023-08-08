import React from 'react';
import { Item } from './ListItem.styled';

export const ListItem = ({ contact }) => {
  return (
    <Item>
      {contact.name}: {contact.number}
    </Item>
  );
};
