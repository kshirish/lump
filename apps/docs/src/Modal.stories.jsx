import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from '@lump/ui';

export default {
  title: 'Example/Modal',
  component: Modal,
};

export const Basic = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <Modal closeable open={open} onClose={() => setOpen(false)}>
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
          faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" variant="text">
            Cancel
          </Button>
          <Button>Okay</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Sizes = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>

      {/* default, full, auto */}
      <Modal closeable open={open} size="full" onClose={() => setOpen(false)}>
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
          faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" variant="text">
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

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
          faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" variant="text">
            Cancel
          </Button>
          <Button>Okay</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
