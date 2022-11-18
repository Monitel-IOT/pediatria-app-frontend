// Button.stories.js|jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import Measurement from './Measurement';

export default {
  title: 'Measurement',
  component: Measurement,
};

export const PatientsMeasurement = () => <Measurement icon={<FontAwesomeIcon icon={faUsers} />} text="pacientes" value="20" />;
export const AppointmentMeasurement = () => <Measurement icon={<FontAwesomeIcon icon={faCalendarCheck} />} text="atenciones" value="14" />;
