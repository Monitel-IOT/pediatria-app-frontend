import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../../atoms/Typography/Typography';
import Breadcrumb from '../../molecules/Breadcrumb/Breadcrumb';

const PageHeader = ({ title, dataPages }) => (
  <div className="my-4">
    <div>
      <Typography component="h1">
        {title}
      </Typography>
      <Breadcrumb dataPages={dataPages} />
    </div>
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string,
  dataPages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string,
    }),
  ).isRequired,
};

export default PageHeader;
