// Button.stories.js|jsx
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Template = (args) => <Button {...args}>Click Me!</Button>;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};
