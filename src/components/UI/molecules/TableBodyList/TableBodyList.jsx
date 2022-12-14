import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Td from '../../atoms/Td/Td';
import IconButton from '../../atoms/IconButton/IconButton';
import { openDeleteModal } from '../../../../state/patients/patientsSlice';
import { openPatientForm } from '../../../../state/newPatientForm/newPatientFormSlice';
import { getDDMMAA } from '../../../../utils';

const TableBodyList = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDeletePatient = (e, patientId) => {
    e.stopPropagation();
    dispatch(openDeleteModal(patientId));
  };
  const handleEditPatient = (e, patient) => {
    e.stopPropagation();
    dispatch(openPatientForm(patient));
  };
  return (
    <tbody>
      {data.map((row) => (
        <tr key={row.id} className="border-t hover:bg-blue-50" onClick={() => navigate(`/paciente/${row.id}`)}>
          <Td>{row.dni}</Td>
          <Td>{row.name}</Td>
          <Td>{row.lastname}</Td>
          <Td>{getDDMMAA(row.birthDate)}</Td>
          <Td>
            <IconButton
              outline="gray"
              className="!px-3 !py-2 mr-2"
              icon={<FontAwesomeIcon icon={faPenNib} />}
              onClick={(e) => handleEditPatient(e, row)}
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
      name: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      birthDate: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TableBodyList;
