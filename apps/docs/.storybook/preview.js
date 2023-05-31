import '../src/styles/tailwind.css';
import '@lump/ui/tailwind.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'black',
          value: '#444444',
        },
        {
          name: 'light',
          value: '#F2F2F2',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
