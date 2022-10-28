import React from 'react';
import PropTypes from 'prop-types';
import useButtonStyle from '../../../hooks/useButtonStyle';

const Button = ({
  children, iconLeft, iconRigth, outline, primary, danger, disabled, avatar, uppercase, ...props
}) => {
  const [styles] = useButtonStyle({
    primary, outline, danger, disabled, avatar, uppercase, ...props,
  });

  if (!children) {
    return null;
  }

  return (
    <button type="button" {...props} disabled={disabled} className={`${styles.main} ${styles.uppercase} px-4 py-1 sm:px-5 sm:py-2 ${props.className}`}>
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
  avatar: PropTypes.bool,
  uppercase: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
