import React from 'react';
import PropTypes, { string } from 'prop-types';
import TableBodyList from '../../molecules/TableBodyList/TableBodyList';
import TableHead from '../../molecules/TableHead/TableHead';

const TableList = ({ data }) => (
  <div className="flex flex-col max-h-fit">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <table className="min-w-full h-4">
          <TableHead data={data.head} />
          <TableBodyList data={data.body} />
        </table>
      </div>
    </div>
  </div>
);

TableList.propTypes = {
  data: PropTypes.shape({
    head: PropTypes.arrayOf(string),
    body: PropTypes.arrayOf(
      PropTypes.shape({
        dni: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        apellidos: PropTypes.string.isRequired,
        fechaNacimiento: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }),
};
export default TableList;
