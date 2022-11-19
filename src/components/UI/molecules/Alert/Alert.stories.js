// Button.stories.js|jsx
import Alert from './Alert';

export default {
  title: 'Alert',
  component: Alert,
};

export const Default = (args) => <Alert {...args}>This is a normal alert !!!</Alert>;
export const Success = (args) => <Alert type="success" {...args}>This is a success alert !!!</Alert>;
export const Danger = (args) => <Alert type="danger" {...args}>This is a danger alert !!!</Alert>;

export const DefaultOutline = Default.bind({});
DefaultOutline.args = {
  outline: true,
};

export const SuccessOutline = Success.bind({});
SuccessOutline.args = {
  outline: true,
};

export const DangerOutline = Danger.bind({});
DangerOutline.args = {
  outline: true,
};
