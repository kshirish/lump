import React from 'react';
import { InboxIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';
import {
  List,
  ListSubHeader,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@lump/ui';

export default {
  title: 'Example/List',
  component: List,
};

export const Basic = () => (
  <List>
    <ListSubHeader>Important Sections</ListSubHeader>
    <Divider />
    <ListItem>
      <ListItemText>Inbox</ListItemText>
    </ListItem>
    <ListItem selected>
      <ListItemText>Draft</ListItemText>
    </ListItem>
    <ListSubHeader>More Sections</ListSubHeader>
    <Divider />
    <ListItem>
      <ListItemText>Trash</ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>Spam</ListItemText>
    </ListItem>
  </List>
);

export const ListItemButtonExample = () => (
  <List>
    <ListItemButton name="inbox">
      <ListItemText>Inbox</ListItemText>
    </ListItemButton>
    <ListItemButton name="draft" onClick={(e, name) => console.log(e, name)}>
      <ListItemText>Draft</ListItemText>
    </ListItemButton>
    <ListItemButton name="trash" selected>
      <ListItemText>Trash</ListItemText>
    </ListItemButton>
    <ListItemButton name="spam">
      <ListItemText>Spam</ListItemText>
    </ListItemButton>
  </List>
);

export const ListItemIconExample = () => (
  <List>
    <ListItem>
      <ListItemIcon>
        <InboxIcon className="h-4 w-4" />
      </ListItemIcon>
      <ListItemText>Inbox</ListItemText>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <ArchiveBoxIcon className="h-4 w-4" />
      </ListItemIcon>
      <ListItemText>Draft</ListItemText>
    </ListItem>
    <ListItemButton>
      <ListItemText>Trash</ListItemText>
    </ListItemButton>
    <ListItemButton>
      <ListItemText>Spam</ListItemText>
    </ListItemButton>
  </List>
);

export const ListItemTextExample = () => (
  <List>
    <ListItemButton>
      <ListItemIcon>
        <InboxIcon className="h-4 w-4" />
      </ListItemIcon>
      <ListItemText primary="Inbox" secondary="Jan 7, 2014" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ArchiveBoxIcon className="h-4 w-4" />
      </ListItemIcon>
      <ListItemText primary="Draft" secondary="Jan 7, 2014" />
    </ListItemButton>
    <Divider />
    <ListItemButton>
      <ListItemText primary="Trash" secondary="Jan 7, 2014" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Spam" secondary="Jan 7, 2014" />
    </ListItemButton>
  </List>
);

export const Controlled = () => {
  return (
    <List onItemClick={(e, name) => console.log(e, name)}>
      <ListItemButton name="inbox">
        <ListItemText>Inbox</ListItemText>
      </ListItemButton>
      <ListItemButton name="draft">
        <ListItemText>Draft</ListItemText>
      </ListItemButton>
      <ListItemButton name="trash" selected>
        <ListItemText>Trash</ListItemText>
      </ListItemButton>
      <ListItemButton name="spam">
        <ListItemText>Spam</ListItemText>
      </ListItemButton>
    </List>
  );
};
