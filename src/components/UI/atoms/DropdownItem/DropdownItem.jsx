import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '../Typography/Typography';

// Dropdown item solo debe recibir o bien la prop link o bien la prop func, nunca ambos.
// link cuando el DropdownItem se usa para redirigir, y func cuando se usa como un boton
// programado con una funcion en un evento "OnClick".
const DropdownItem = ({
  link, children, icon, size, func, ...props
}) => {
  let style = {};
  if (size === 'small') {
    style = {
      li: 'w-40 sm:w-44',
      Link: 'h-14 px-0 sm:px-1',
    };
  }
  if (size === 'medium') {
    style = {
      li: 'w-48 sm:w-52',
      Link: 'h-16 sm:h-18 text-lg px-1 sm:px-2',

    };
  }
  if (size === 'big') {
    style = {
      li: 'w-52 sm:w-64',
      Link: 'h-18 sm:h-20 text-xl px-1 sm:px-2',
    };
  }
  return (
    <li className={`border-b-2 ${style.li} relative bg-white shadow-2xl px-0 sm:px-1 ${props.className}`}>
      {link && !func && (
      <Link to={link} className={`flex items-center py-4 ${style.Link} overflow-hidden text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out`}>
        {icon && <span className="px-1.5">{icon}</span>}
        <Typography component="p" className="px-1.5">
          {children}
        </Typography>
      </Link>
      )}
      {func && !link && (
      <div onClick={func} role="presentation" className={`cursor-pointer flex items-center py-4 ${style.Link} overflow-hidden text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out`}>
        {icon && <span className="px-1.5">{icon}</span>}
        <Typography component="p" className="px-1.5">
          {children}
        </Typography>
      </div>
      )}
    </li>
  );
};

DropdownItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  func: PropTypes.func,
};

export default DropdownItem;
