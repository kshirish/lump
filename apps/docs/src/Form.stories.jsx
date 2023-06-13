import React from 'react';
import {
  Form,
  FormField,
  Input,
  Checkbox,
  Textarea,
  Radio,
  RadioGroup,
  Select,
  Button,
} from '@lump/ui';

export default {
  title: 'Example/Form',
  component: Form,
};

export const Basic = () => {
  const [favorite, setFavorite] = useState('Blue');

  const handleSubmit = (e, a) => {
    e.preventDefault();

    console.log(e, a);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Input
          label="First Name"
          name="firstName"
          placeholder="Enter your first name"
        />
      </FormField>

      <FormField>
        <Textarea
          label="About"
          name="about"
          placeholder="Tell me something about you"
        />
      </FormField>

      <FormField>
        <RadioGroup
          label="Choose your favorite color"
          name="favorite"
          value={favorite}
          onChange={(e) => setFavorite(e.target.value)}
        >
          <Radio label="Yellow" value="Yellow" />
          <Radio label="Blue" value="Blue" />
          <Radio label="Maroon" value="Maroon" />
        </RadioGroup>
      </FormField>

      <FormField>
        <Select
          label="Type of dish"
          name="dishType"
          placeholder="Select a type of dish"
          options={[
            { text: 'Meat', value: 'x' },
            { text: 'Vegetarian', value: 'y' },
            { text: 'Sauce', value: 'z' },
          ]}
        />
      </FormField>

      <FormField>
        <Checkbox
          label="I agree with above Terms and Conditions"
          name="agree"
        />
      </FormField>

      <FormField>
        <Button type="submit">Submit</Button>
      </FormField>
    </Form>
  );
};
