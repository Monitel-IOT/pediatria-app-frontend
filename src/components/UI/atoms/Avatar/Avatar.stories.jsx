// Button.stories.js|jsx
import Avatar from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
};

export const Small = () => <Avatar size="small">A</Avatar>;
export const Medium = () => <Avatar size="medium">A</Avatar>;
export const Large = () => <Avatar size="large">A</Avatar>;
