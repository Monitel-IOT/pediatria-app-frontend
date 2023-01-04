import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
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
          <Label>Signos y síntomas</Label>
          <TextArea className="h-20" placeholder="Escriba aqui..." />
          <Label>Diagnóstico</Label>
          <TextArea className="h-20" placeholder="Escriba aqui..." />
          <FormInput
            type="text"
            label="T.E"
            name="TE"
          />
        </div>
        <div>
          <Label>Exámenes Auxiliares</Label>
          <TextArea className="h-20" placeholder="Escriba aqui..." />
          <Label>Tratamiento</Label>
          <TextArea className="h-20" placeholder="Escriba aqui..." />
          <Label>Reevaluación</Label>
          <TextArea className="h-20" placeholder="Escriba aqui..." />
          <div>
            <Label className="mr-5">Tratamiento a largo plazo</Label>
            <Radio className="mr-3" name="treatment" label="Si" value="Femenino" />
            <Radio className="mr-3" name="treatment" label="No" value="Masculino" />
          </div>
        </div>
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
