import { Popup, Button, Text } from '@lump/ui';

export default {
  title: 'Example/Popup',
  component: Popup,
};

export const Example1 = () => (
  <Popup trigger={<Button>More Info</Button>}>
    <Text variant="body1">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </Text>
  </Popup>
);

export const Example2 = () => (
  <div className="text-center">
    <Text>Lorem ipsum dolor</Text>
    <Text>sit amet consectetur adipisicing elit.</Text>
    <Text>
      Eveniet qui, quaerat commodi hic sunt ipsa neque quam nostrum incidunt
      officiis eligendi asperiores saepe, error ullam sint nulla laborum natus
      et!
    </Text>
    <Popup
      trigger={
        <div className="w-32 h-32 bg-info flex flex-col justify-center items-center">
          <Button>More Info</Button>
        </div>
      }
    >
      <Text variant="body1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </Text>
    </Popup>
  </div>
);
