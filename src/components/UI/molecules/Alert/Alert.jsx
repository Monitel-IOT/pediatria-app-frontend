import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '../../atoms/Typography/Typography';

const Alert = ({ type, ...props }) => (
  <div className={classNames(`${props.className} py-4 px-5 flex items-center justify-between bg-blue-main-500 text-white rounded-lg shadow-lg`, {
    '!bg-transparent !text-blue-main-500 !border !border-blue-main-500': props.outline && type === undefined,
    'bg-green-600': type === 'success',
    '!bg-transparent !text-green-600 !border !border-green-600': props.outline && type === 'success',
    'bg-rose-500': type === 'danger',
    '!bg-transparent !text-rose-500 !border !border-rose-500': props.outline && type === 'danger',
  })}
  >
    <Typography component="h6">
      {props.children}
    </Typography>
    <FontAwesomeIcon onClick={props.onClose} icon={faXmark} className="text-2xl cursor-pointer pl-4" />
  </div>
);

Alert.propTypes = {
  type: PropTypes.string,
  outline: PropTypes.bool,
  className: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Alert;
