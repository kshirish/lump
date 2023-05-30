import React from 'react';
import { Stack, Text } from '@lump/ui';

export default {
  title: 'Example/Text',
  component: Text,
};

export const Basic = () => (
  <Text as="span">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </Text>
);

export const Variants = () => (
  <Stack direction="col" spacing={2}>
    <Text variant="heading1">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </Text>
    <Text variant="heading2">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </Text>
    <Text variant="heading3">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </Text>
    <Text variant="heading4">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </Text>
    <Text variant="heading5">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </Text>

    <Text variant="base">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </Text>

    <Text variant="body1">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </Text>
    <Text variant="body2">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </Text>
  </Stack>
);

export const Colors = () => (
  <Stack direction="col" spacing={2}>
    <Text color="light" variant="base">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text color="success" variant="body1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text color="danger" variant="body1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text color="warning" variant="body1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text color="info" variant="body1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text color="success" variant="body2">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text color="danger" variant="body2">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text color="warning" variant="body2">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text color="info" variant="body2">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
  </Stack>
);
