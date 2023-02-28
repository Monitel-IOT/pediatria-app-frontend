import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Creatable from 'react-select/creatable';
import { addNewAppointment } from '../../../../thunkAction/appointments/appointmentsThunk';

import {
  closeAppointmentForm, handleChange, prevStep, setStep,
} from '../../../../state/newAppointmentForm/newAppointmentFormSlice';
import Button from '../../atoms/Button/Button';
import Label from '../../atoms/Label/Label';
import Radio from '../../atoms/Radio/Radio';
import TextArea from '../../atoms/TextArea/TextArea';
import FormInput from '../../molecules/FormInput';
import { addNewAppointmentState } from '../../../../state/appointments/appointmentsSlice';
import { useAddTreatmentMutation, useGetAllTreatmentsQuery } from '../../../../api/appointment/treatmentRequest';
import { useGetAllProlongedDiagnosisQuery } from '../../../../api/appointment/prolongedDiagnosisRequest';

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
  const { data: prolongedDiagnoses } = useGetAllProlongedDiagnosisQuery();

  const { data: treatments } = useGetAllTreatmentsQuery();
  const [addTreatment] = useAddTreatmentMutation();

  const optionsTreatments = useMemo(() => treatments?.data?.map(
    ({ nameTreatment }) => ({ value: nameTreatment, label: nameTreatment }),
  ));

  const optionsProlongedDiagnoses = useMemo(() => prolongedDiagnoses?.data?.map(
    ({ nameProlongedDiagnosis }) => ({
      value: nameProlongedDiagnosis,
      label: nameProlongedDiagnosis,
    }),
  ));

  /*   const optionsSelect = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]; */

  const handleNewAppointment = () => {
    addTreatment(
      form?.selectedTreatments?.map(
        ({ value }) => ({ nameTreatment: value }),
      )[0],
    );
    dispatch(addNewAppointment({ newAppointment: form, patientId: idPatient, token: user?.token }))
      .then((res) => {
        dispatch(addNewAppointmentState(res.payload.data));
        dispatch(closeAppointmentForm());
        dispatch(setStep(0));
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
            options={optionsProlongedDiagnoses}
            className="basic-multi-select"
            noOptionsMessage={() => 'name not found'}
            onChange={(choice) => dispatch(handleChange({
              name: 'prolongedDiagnoses',
              value: choice?.map(({ value }) => ({ nameProlongedDiagnosis: value })),
            }))}
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
          <TextArea className="h-20" placeholder="Escriba aqui..." />
          <Label>Tratamientos</Label>
          <Creatable
            isMulti
            placeholder="Seleccione o agregue"
            options={optionsTreatments}
            className="basic-multi-select my-2"
            noOptionsMessage={() => 'name not found'}
            onChange={(choice) => dispatch(handleChange({ name: 'selectedTreatments', value: choice }))}
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
