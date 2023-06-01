import React from 'react';
import { Autocomplete, Input } from '@lump/ui';

export default {
  title: 'Example/Autocomplete',
  component: Autocomplete,
};

const topFilms = [
  { text: 'The Shawshank Redemption', value: 'The Shawshank Redemption' },
  { text: 'The Godfather', value: 'The Godfather' },
  { text: 'The Godfather: Part II', value: 'The Godfather: Part II' },
  { text: 'The Dark Knight', value: 'The Dark Knight' },
  { text: '12 Angry Men', value: '12 Angry Men' },
  { text: "Schindler's List", value: "Schindler's List" },
  { text: 'Pulp Fiction', value: 'Pulp Fiction' },
  {
    text: 'The Good, the Bad and the Ugly',
    value: 'The Good, the Bad and the Ugly',
  },
  { text: 'Fight Club', value: 'Fight Club' },
  { text: 'Forrest Gump', value: 'Forrest Gump' },
  { text: 'Inception', value: 'Inception', disabled: true },
  {
    text: "One Flew Over the Cuckoo's Nest",
    value: "One Flew Over the Cuckoo's Nest",
  },
  { text: 'Goodfellas', value: 'Goodfellas' },
  { text: 'The Matrix', value: 'The Matrix' },
  { text: 'Seven Samurai', value: 'Seven Samurai' },
  { text: 'City of God', value: 'City of God' },
  { text: 'Se7en', value: 'Se7en', disabled: true },
  { text: 'The Silence of the Lambs', value: 'The Silence of the Lambs' },
  { text: "It's a Wonderful Life", value: "It's a Wonderful Life" },
  { text: 'Life Is Beautiful', value: 'Life Is Beautiful' },
  { text: 'The Usual Suspects', value: 'The Usual Suspects' },
  { text: 'Léon: The Professional', value: 'Léon: The Professional' },
  { text: 'Spirited Away', value: 'Spirited Away' },
  { text: 'Saving Private Ryan', value: 'Saving Private Ryan' },
  {
    text: 'Once Upon a Time in the West',
    value: 'Once Upon a Time in the West',
  },
  { text: 'American History X', value: 'American History X' },
  { text: 'Interstellar', value: 'Interstellar', disabled: true },
  { text: 'Casablanca', value: 'Casablanca', disabled: true },
  { text: 'City Lights', value: 'City Lights', disabled: true },
  { text: 'Psycho', value: 'Psycho', disabled: true },
  { text: 'The Green Mile', value: 'The Green Mile' },
  { text: 'The Intouchables', value: 'The Intouchables' },
  { text: 'Modern Times', value: 'Modern Times' },
  { text: 'Raiders of the Lost Ark', value: 'Raiders of the Lost Ark' },
  { text: 'Rear Window', value: 'Rear Window' },
  { text: 'The Pianist', value: 'The Pianist' },
  { text: 'The Departed', value: 'The Departed' },
  { text: 'Terminator 2: Judgment Day', value: 'Terminator 2: Judgment Day' },
  { text: 'Back to the Future', value: 'Back to the Future' },
  { text: 'Whiplash', value: 'Whiplash' },
  { text: 'Gladiator', value: 'Gladiator' },
  { text: 'Memento', value: 'Memento' },
  { text: 'The Prestige', value: 'The Prestige' },
  { text: 'The Lion King', value: 'The Lion King' },
  { text: 'Apocalypse Now', value: 'Apocalypse Now' },
  { text: 'Alien', value: 'Alien' },
  { text: 'Sunset Boulevard', value: 'Sunset Boulevard' },
];

export const Basic = () => (
  <Autocomplete
    options={topFilms}
    renderInput={(props) => {
      console.log('props.selected', props.selected);

      return (
        <Input
          autocomplete="off"
          helperText="These are one of the top films listed in IMDB, take your time."
          label="Personal Favorite"
          name="favorite"
          value={props.query}
          onChange={props.onChange}
        />
      );
    }}
  />
);

export const Multiple = () => (
  <Autocomplete
    multiple
    options={topFilms}
    renderInput={(params) => <Input {...params} label="Film" />}
  />
);
