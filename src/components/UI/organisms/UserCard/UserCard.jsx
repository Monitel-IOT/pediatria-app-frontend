import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../../atoms/Typography/Typography';
import Avatar from '../../atoms/Avatar/Avatar';

const UserCard = ({
  children, avatarText, ...props
}) => (
  <div className={`flex items-center text-lg text-gray-700 ${props.className} `}>
    <Avatar size="medium">
      {avatarText}
    </Avatar>
    <div className="ml-4 w-[82px]">
      <Typography component="p" className="font-semibold truncate">
        {props.name}
      </Typography>
      <Typography component="p">
        Doctor
      </Typography>
    </div>
  </div>

);

UserCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  name: PropTypes.string,
  userTypeText: PropTypes.string,
  avatarText: PropTypes.string,
};

export default UserCard;
