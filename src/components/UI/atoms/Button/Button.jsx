import React from 'react';
import PropTypes from 'prop-types';
import useButtonStyle from '../../../hooks/useButtonStyle';

const Button = ({
  children, iconLeft, iconRigth, outline, primary, danger, disabled, uppercase, ...props
}) => {
  const [styles] = useButtonStyle({
    primary, outline, danger, disabled, uppercase, ...props,
  });

  if (!children) {
    return null;
  }

  return (
    <button type="button" {...props} className={`${styles.main} ${styles.uppercase} px-5 py-2`}>
      {iconLeft && <span className="pr-2">{iconLeft}</span>}
      {children}
      {iconRigth && <span className="pl-2">{iconRigth}</span>}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  outline: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconLeft: PropTypes.node,
  iconRigth: PropTypes.node,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  uppercase: PropTypes.bool,
  size: PropTypes.string,
};

export default Button;
