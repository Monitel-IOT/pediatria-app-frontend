import React from 'react';
import PropTypes, { string } from 'prop-types';
import TableBody from '../../molecules/TableBody/TableBody';
import TableHead from '../../molecules/TableHead/TableHead';

const Table = ({ data }) => (
  <div className="flex flex-col max-h-[15rem]">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-x-auto h-40">
          <table className="min-w-full h-4">
            <TableHead data={data.head} />
            <TableBody data={data.body} />
          </table>
        </div>
      </div>
    </div>
  </div>
);

Table.propTypes = {
  data: PropTypes.shape({
    head: PropTypes.arrayOf(string),
    body: PropTypes.arrayOf(
      PropTypes.shape({
        tratamiento: PropTypes.string.isRequired,
        fechaDeInicio: PropTypes.string.isRequired,
        tiempo: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }),
};
export default Table;
