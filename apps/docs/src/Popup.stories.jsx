import React from 'react';
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
  <div>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ex tempora
      iure nostrum nesciunt fugit mollitia repellendus sunt totam consequuntur?
      Natus eveniet debitis neque, corporis quae quam illo facilis? Vel?
    </Text>
    <Popup
      trigger={
        <div className="mt-6 p-6 border border-light2 rounded flex flex-col justify-center items-center">
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
