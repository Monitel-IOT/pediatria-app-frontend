import React from 'react';
import PropTypes from 'prop-types';

const AppointmentContainer = ({ children, ...props }) => (
  <div {...props} className="sm:-mx-6 lg:-mx-8 px-5 min-h-[90%]">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-x-auto h-80 sm:h-80 m:h-[370px] lg:h-[370px]">
        {children}
      </div>
    </div>
  </div>
);

AppointmentContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default AppointmentContainer;
