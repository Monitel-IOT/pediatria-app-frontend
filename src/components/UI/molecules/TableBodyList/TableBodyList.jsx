import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Td from '../../atoms/Td/Td';
import IconButton from '../../atoms/IconButton/IconButton';
import { deletePatientStateBy } from '../../../../state/patients/patientsSlice';
import { deletePatientsById } from '../../../../thunkAction/patients/patientsThunk';

const TableBodyList = ({ data }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  const handleDeletePatient = (id) => {
    dispatch(deletePatientsById({ id, token: user?.token }));
    dispatch(deletePatientStateBy(id));
  };
  return (
    <tbody>
      {data.map((row) => (
        <tr key={Math.random()}>
          <Td>{row.dni}</Td>
          <Td>{row.nombre}</Td>
          <Td>{row.apellidos}</Td>
          <Td>{row.fechaNacimiento}</Td>
          <Td>
            <Link to={`/paciente/${row.id}`}>
              <IconButton
                className="px-3 py-2"
                size="normal no padding"
                outline="blue"
                icon={<FontAwesomeIcon size="lg" icon={faCircleInfo} />}
              />

            </Link>
          </Td>
          <Td>
            <IconButton
              className="px-3 py-2"
              outline="danger"
              size="normal no padding"
              icon={<FontAwesomeIcon size="lg" icon={faTrash} />}
              onClick={() => handleDeletePatient(row.id)}
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
