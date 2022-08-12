import React from 'react';
import PropTypes from 'prop-types';

const FormContainer = ({
  children, ...props
}) => <div {...props} className="mt-5 p-5 md:p-10 shadow-xl rounded-lg">{children}</div>;

FormContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default FormContainer;
