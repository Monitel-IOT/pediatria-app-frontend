// Button.stories.js|jsx
import Typography from './Typography';

export default {
  title: 'Typography',
  component: Typography,
};

export const Template = (args) => <Typography {...args}>Lorem ipsum</Typography>;
export const Heading1 = () => <Typography component="h1">Heading 1</Typography>;
export const Heading2 = () => <Typography component="h2">Heading 2</Typography>;
export const Heading3 = () => <Typography component="h3">Heading 3</Typography>;

export const Small = Template.bind({});
Small.args = {
  component: 'small',
};
