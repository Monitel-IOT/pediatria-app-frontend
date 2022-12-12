import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Td from '../../atoms/Td/Td';
import IconButton from '../../atoms/IconButton/IconButton';
import { deletePatientStateBy } from '../../../../state/patients/patientsSlice';
import { deletePatientsById } from '../../../../thunkAction/patients/patientsThunk';

const TableBodyList = ({ data }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const handleDeletePatient = (e, id) => {
    e.stopPropagation();
    dispatch(deletePatientsById({ id, token: user?.token }));
    dispatch(deletePatientStateBy(id));
  };
  const handleEditPatient = (e, id) => {
    e.stopPropagation();
    navigate(`/nuevo-paciente/?edit=true&id=${id}`);
  };
  return (
    <tbody>
      {data.map((row) => (
        <tr key={row.id} className="border-t hover:bg-blue-50" onClick={() => navigate(`/paciente/${row.id}`)}>
          <Td>{row.dni}</Td>
          <Td>{row.nombre}</Td>
          <Td>{row.apellidos}</Td>
          <Td>{row.fechaNacimiento}</Td>
          <Td>
            <IconButton
              outline="gray"
              className="!px-3 !py-2 mr-2"
              icon={<FontAwesomeIcon icon={faPenNib} />}
              onClick={(e) => handleEditPatient(e, row.id)}
            />
            <IconButton
              className="!px-3 !py-2"
              outline="danger"
              size="normal no padding"
              icon={<FontAwesomeIcon size="lg" icon={faTrash} />}
              onClick={(e) => handleDeletePatient(e, row.id)}
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
