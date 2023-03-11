import React from 'react';
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
import {
  selectAuxiliaryExam,
  selectOptionsDiagnosis,
  selectSymptoms,
  selectTreatments,
  useGetAllAuxiliaryExamQuery,
  useGetAllDiagnosisQuery,
  useGetAllSymptomsQuery,
  useGetAllTreatmentSelectQuery,
} from '../../../../api/appointment/prolongedDiagnosisRequest';

const CurrentIllnessForm = () => {
  const { idPatient } = useParams();
  const dispatch = useDispatch();
  const { form } = useSelector((state) => state.newAppointmentFormReducer);
  const { user } = useSelector((state) => state.authReducer);

  useGetAllDiagnosisQuery(undefined, { refetchOnMountOrArgChange: true });
  const optionsDiagnoses = useSelector(selectOptionsDiagnosis);

  useGetAllTreatmentSelectQuery(undefined, { refetchOnMountOrArgChange: true });
  const optionsTreatments = useSelector(selectTreatments);

  useGetAllAuxiliaryExamQuery(undefined, { refetchOnMountOrArgChange: true });
  const optionsAuxiliaryExam = useSelector(selectAuxiliaryExam);

  useGetAllSymptomsQuery(undefined, { refetchOnMountOrArgChange: true });
  const optionsSymptoms = useSelector(selectSymptoms);

  /*   const optionsSelect = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]; */

  const handleNewAppointment = () => {
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
          <Label>Diagnóstico</Label>
          <Creatable
            isMulti
            placeholder="Seleccione o agregue"
            options={optionsDiagnoses}
            className="basic-multi-select my-2"
            noOptionsMessage={() => 'name not found'}
            onChange={(choice) => dispatch(handleChange({
              name: 'diagnoses',
              value: choice?.map(({ value }) => ({ diagnosisName: value, id: '' })),
            }))}
          />
          <Label>Exámenes Auxiliares</Label>
          <Creatable
            isMulti
            placeholder="Seleccione o agregue"
            options={optionsAuxiliaryExam}
            className="basic-multi-select my-2"
            noOptionsMessage={() => 'name not found'}
            onChange={(choice) => dispatch(handleChange({
              name: 'auxiliaryExams',
              value: choice?.map(({ value }) => ({ nameAuxiliaryExam: value, id: '' })),
            }))}
          />
          <Label>Relato y Examen Medico</Label>
          <TextArea className="h-20" placeholder="Escriba aqui..." />
          <FormInput
            type="text"
            label="Tiempo de Enfermedad"
            name="sickTime"
          />
        </div>
        <div>
          <Label>Tratamientos</Label>
          <Creatable
            isMulti
            placeholder="Seleccione o agregue"
            options={optionsTreatments}
            className="basic-multi-select my-2"
            noOptionsMessage={() => 'name not found'}
            onChange={(choice) => dispatch(handleChange({
              name: 'treatments',
              value: choice?.map(({ value }) => ({ nameTreatment: value, id: '' })),
            }))}
          />
          <Label>Sintomas</Label>
          <Creatable
            isMulti
            placeholder="Seleccione o agregue"
            options={optionsSymptoms}
            className="basic-multi-select my-2"
            noOptionsMessage={() => 'name not found'}
            onChange={(choice) => dispatch(handleChange({
              name: 'symptoms',
              value: choice?.map(({ value }) => ({ symptomName: value, id: '' })),
            }))}
          />
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
