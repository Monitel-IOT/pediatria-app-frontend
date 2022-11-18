// Button.stories.js|jsx
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = (args) => <Button {...args}>Click Me!</Button>;

export const Primary = Default.bind({});
Primary.args = {
  primary: true,
};

export const Outline = Default.bind({});
Outline.args = {
  outline: true,
};

export const Danger = Default.bind({});
Danger.args = {
  danger: true,
};
