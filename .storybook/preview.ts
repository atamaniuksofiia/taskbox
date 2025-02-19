import type { Preview } from "@storybook/react";
import { Provider } from "react-redux";
import { initialize, mswLoader } from "msw-storybook-addon";
import { store } from "../src/lib/store";
import "../src/index.css";

// Registers the msw addon
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
