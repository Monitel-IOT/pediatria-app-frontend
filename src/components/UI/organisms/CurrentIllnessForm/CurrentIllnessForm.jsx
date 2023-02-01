import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Creatable from 'react-select/creatable';
import { addNewAppointment } from '../../../../thunkAction/appointments/appointmentsThunk';

import { prevStep } from '../../../../state/newAppointmentForm/newAppointmentFormSlice';
import Button from '../../atoms/Button/Button';
import Label from '../../atoms/Label/Label';
import Radio from '../../atoms/Radio/Radio';
import TextArea from '../../atoms/TextArea/TextArea';
import FormInput from '../../molecules/FormInput';
import { addNewAppointmentState } from '../../../../state/appointments/appointmentsSlice';

const CurrentIllnessForm = () => {
  const { idPatient } = useParams();
  const dispatch = useDispatch();
  const { form } = useSelector((state) => state.newAppointmentFormReducer);
  const { user } = useSelector((state) => state.authReducer);
  const [selectedOption, setSelectedOption] = useState('');
  const optionsSelect = [
    { value: 'd1', label: 'Diagnostico 1' },
    { value: 'd2', label: 'Diagnostico 2' },
    { value: 'd3', label: 'Diagnostico 3' },
    { value: 'd4', label: 'Diagnostico dhgfh dfdjkdgjgdfkghdgdgndfgjdfhla 4, Diagnostico 4 Diagnostico 4Diagnostico 4' },
  ];

  const handleNewAppointment = () => {
    dispatch(addNewAppointment({ newAppointment: form, patientId: idPatient, token: user?.token }))
      .then((res) => {
        dispatch(addNewAppointmentState(res.payload.data));
      });
  };

  return (
    <div>
      <form className="grid sm:grid-cols-2 gap-8">
        <div>
          <Label>Relato y Examen Medico</Label>
          <TextArea className="h-20" placeholder="Escriba aqui..." />
          <Label>Diagnóstico Prolongado</Label>
          <Creatable
            isMulti
            placeholder="Seleccione o agregue"
            options={optionsSelect}
            className="basic-multi-select"
            noOptionsMessage={() => 'name not found'}
            onChange={(choice) => setSelectedOption(choice)}
          />
          <Label>Diagnóstico</Label>
          <Creatable
            isMulti
            placeholder="Seleccione o agregue"
            options={optionsSelect}
            className="basic-multi-select"
            noOptionsMessage={() => 'name not found'}
            onChange={(choice) => setSelectedOption(choice)}
          />
          <FormInput
            type="text"
            label="Tiempo de Enfermedad"
            name="sickTime"
          />
        </div>
        <div>
          <Label>Exámenes Auxiliares</Label>
          <Creatable
            isMulti
            placeholder="Seleccione o agregue"
            options={optionsSelect}
            className="basic-multi-select"
            noOptionsMessage={() => 'name not found'}
            onChange={(choice) => setSelectedOption(choice)}
          />
          <Label>Tratamiento</Label>
          <Creatable
            isMulti
            placeholder="Seleccione o agregue"
            options={optionsSelect}
            className="basic-multi-select"
            noOptionsMessage={() => 'name not found'}
            onChange={(choice) => setSelectedOption(choice)}
          />
          <Label>Reevaluación</Label>
          <TextArea className="h-20" placeholder="Escriba aqui..." />
          <div>
            <Label className="mr-5">Tratamiento a largo plazo</Label>
            <Radio className="mr-3" name="treatment" label="Si" value="Femenino" />
            <Radio className="mr-3" name="treatment" label="No" value="Masculino" />
          </div>
        </div>
        <div>{selectedOption[0]?.value}</div>
      </form>
      <div className="mt-2">
        <Button
          primary
          onClick={() => dispatch(prevStep())}
        >
          Atrás
        </Button>
        <Button
          primary
          className="ml-2"
          // eslint-disable-next-line max-len
          onClick={handleNewAppointment}
        >
          Terminar
        </Button>
      </div>
    </div>
  );
};

export default CurrentIllnessForm;
