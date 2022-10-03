import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import Td from '../../atoms/Td/Td';
import IconButton from '../../atoms/IconButton/IconButton';
import { deleteById } from '../../../../state/patients/patientsSlice';

const TableBodyList = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <tbody>
      {data.map((row) => (
        <tr key={Math.random()}>
          <Td>{row.dni}</Td>
          <Td>{row.nombre}</Td>
          <Td>{row.apellidos}</Td>
          <Td>{row.fechaNacimiento}</Td>
          <Td>
            <IconButton
              outline="blue"
              icon={<FontAwesomeIcon size="lg" icon={faCircleInfo} />}
            />
          </Td>
          <Td>
            <IconButton
              outline="danger"
              icon={<FontAwesomeIcon size="lg" icon={faTrash} />}
              onClick={() => dispatch(deleteById(row.id))}
            />
          </Td>
        </tr>
      ))}
    </tbody>
  );
};

TableBodyList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dni: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      apellidos: PropTypes.string.isRequired,
      fechaNacimiento: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TableBodyList;
