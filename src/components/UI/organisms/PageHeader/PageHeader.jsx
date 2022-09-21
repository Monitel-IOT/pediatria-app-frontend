import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../../atoms/Typography/Typography';
import Breadcrumb from '../../molecules/Breadcrumb/Breadcrumb';

const PageHeader = ({ title }) => (
  <div className="my-4">
    <div>
      <Typography component="h1">
        {title}
      </Typography>
      <Breadcrumb />
    </div>
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string,
};

export default PageHeader;
