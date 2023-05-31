import React, { useState } from 'react';
import {
  InboxIcon,
  ArchiveBoxIcon,
  EllipsisVerticalIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import {
  Popup,
  Button,
  Text,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@lump/ui';

export default {
  title: 'Example/Popup',
  component: Popup,
};

export const Basic = () => (
  <Popup trigger={<Button>More Info</Button>}>
    <Text variant="body1">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </Text>
  </Popup>
);

export const KebabMenu = () => (
  <Popup trigger={<EllipsisVerticalIcon className="h-4 w-4 cursor-pointer" />}>
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
      <ListItemButton>
        <ListItemText primary="Trash" secondary="Jan 7, 2014" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Spam" secondary="Jan 7, 2014" />
      </ListItemButton>
    </List>
  </Popup>
);

export const LinkMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popup
      trigger={
        <Button
          startIcon={
            open ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )
          }
          variant="text"
          color="secondary"
        >
          More Info
        </Button>
      }
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
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
        <ListItemButton>
          <ListItemText primary="Trash" secondary="Jan 7, 2014" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Spam" secondary="Jan 7, 2014" />
        </ListItemButton>
      </List>
    </Popup>
  );
};

export const ButtonMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popup
      trigger={
        <Button
          startIcon={
            open ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )
          }
        >
          More Info
        </Button>
      }
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
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
        <ListItemButton>
          <ListItemText primary="Trash" secondary="Jan 7, 2014" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Spam" secondary="Jan 7, 2014" />
        </ListItemButton>
      </List>
    </Popup>
  );
};
