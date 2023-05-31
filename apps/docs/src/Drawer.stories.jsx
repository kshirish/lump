import React, { useState } from 'react';
import { Button, Drawer } from '@lump/ui';

export default {
  title: 'Example/Drawer',
  component: Drawer,
};

export const Basic = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <div>drawer content</div>
      </Drawer>
    </>
  );
};

export const Sizes = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>

      {/* default, full, auto */}
      <Drawer open={open} size="full" onClose={() => setOpen(false)}>
        <div>drawer content</div>
      </Drawer>
    </>
  );
};

export const Anchor = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <Drawer
        open={open}
        anchor="bottom" // top, bottom, left, right
        onClose={() => setOpen(false)}
      >
        <div>drawer content</div>
      </Drawer>
    </>
  );
};
