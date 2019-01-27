import { configure } from '@storybook/react';

const components = [
  `Button`
];

function loadStories() {
  components.forEach((el) => require(`../src/components/${el}/stories.js`));
}

configure(loadStories, module);
