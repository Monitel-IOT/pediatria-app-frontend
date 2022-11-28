// Button.stories.js|jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'storybook-addon-react-router-v6';
import MenuItem from './MenuItem';

export default {
  title: 'MenuItem',
  component: MenuItem,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/dashboard',
    },
  },
};

export const Default = () => <MenuItem linkTo="/dashboard" iconLeft={<FontAwesomeIcon icon={faChartColumn} />}>Dashboard</MenuItem>;

export const Active = () => <MenuItem linkTo="/dashboard" isActive iconLeft={<FontAwesomeIcon icon={faChartColumn} />}>Dashboard</MenuItem>;
