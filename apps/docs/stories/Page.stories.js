import { within, userEvent } from "@storybook/testing-library";

import { Page } from "@lump/core/src";

export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const LoggedOut = {};

export const LoggedIn = {
  lump: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
