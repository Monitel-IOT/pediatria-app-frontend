import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../../atoms/Typography/Typography';
import Avatar from '../../atoms/Avatar/Avatar';

const UserCard = ({
  children, userTypeText, avatarText, ...props
}) => (
  <div className={`border-b-2 border-gray-400 flex items-center justify-center text-lg py-6 overflow-hidden h-24 text-gray-700 text-ellipsis rounded  ${props.className} `}>
    <Avatar>
      {avatarText}
    </Avatar>
    <div>
      <Typography component="p" className="px-1.5">
        {userTypeText}
      </Typography>
      <Typography component="p" className="font-semibold px-1.5">
        {children}
      </Typography>
    </div>
  </div>

);

UserCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  userTypeText: PropTypes.string,
  avatarText: PropTypes.string,
};

export default UserCard;
