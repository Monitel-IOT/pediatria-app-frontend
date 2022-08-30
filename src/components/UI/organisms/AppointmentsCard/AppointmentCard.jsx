import React from 'react';
import PropTypes from 'prop-types';

const AppointmentCard = ({ children, ...props }) => (
  <div {...props} className="p-4 grid grid-cols-4 gap-x-6 gap-y-2 border-solid border-2 border-gray-light rounded border-r min-h-fit mb-2">
    {children}
  </div>
);

AppointmentCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default AppointmentCard;
