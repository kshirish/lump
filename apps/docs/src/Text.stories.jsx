import { Text } from '@lump/ui/src';

export default {
  title: 'Example/Text',
  component: Text,
};

export const Variants = () => (
  <>
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
  </>
);

export const Colors = () => (
  <>
    <Text variant="base" color="light">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text variant="body1" color="success">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text variant="body1" color="danger">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text variant="body1" color="warning">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text variant="body1" color="info">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text variant="body2" color="success">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text variant="body2" color="danger">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text variant="body2" color="warning">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text variant="body2" color="info">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Text>
  </>
);
