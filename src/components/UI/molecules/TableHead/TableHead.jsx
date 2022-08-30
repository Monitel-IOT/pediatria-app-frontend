import React from 'react';
import PropTypes, { string } from 'prop-types';
import Th from '../../atoms/Th/Th';

const TableHead = ({ data }) => (
  <thead className="sticky top-0 border-b bg-white">
    <tr>
      {data.map((title) => <Th key={title}>{title}</Th>)}
    </tr>
  </thead>
);

TableHead.propTypes = {
  data: PropTypes.arrayOf(string),
};

export default TableHead;
