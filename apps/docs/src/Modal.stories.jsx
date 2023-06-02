import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  Stack,
  Text,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@lump/ui';

export default {
  title: 'Example/Modal',
  component: Modal,
};

export const Basic = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <Modal open={open} onClose={handleClose}>
        <ModalHeader as={Stack} justifyContent="space-between">
          <Text variant="heading5">Hello World</Text>
          <XMarkIcon
            className="ui-h-6 ui-w-6 ui-cursor-pointer"
            onClick={handleClose}
          />
        </ModalHeader>
        <ModalBody>
          <Text variant="body1">
            Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
            faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
          </Text>
        </ModalBody>
        <ModalFooter as={Stack} justifyContent="flex-end">
          <Button
            color="secondary"
            variant="text"
            className="mr-2"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button>Okay</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Closeable = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <Modal closeable open={open} onClose={handleClose}>
        <ModalHeader as={Stack} justifyContent="space-between">
          <Text variant="heading5">Hello World</Text>
          <XMarkIcon
            className="ui-h-6 ui-w-6 ui-cursor-pointer"
            onClick={handleClose}
          />
        </ModalHeader>
        <ModalBody>
          <Text variant="body1">
            Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
            faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
          </Text>
        </ModalBody>
        <ModalFooter as={Stack} justifyContent="flex-end">
          <Button
            color="secondary"
            variant="text"
            className="mr-2"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button>Okay</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
