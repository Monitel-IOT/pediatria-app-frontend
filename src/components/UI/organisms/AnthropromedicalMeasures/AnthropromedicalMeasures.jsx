import React from 'react';
import { useDispatch } from 'react-redux';
import { nextStep } from '../../../../state/newAppointmentForm/newAppointmentFormSlice';
import Button from '../../atoms/Button/Button';
import FormInput from '../../molecules/FormInput';

const AnthropromedicalMeasures = () => {
  // const { step } = useSelector((state) => state.newAppointmentFormReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <form>
        <FormInput
          type="text"
          label="Peso"
          name="weight"
          addon="Kg"
          placeholder="Peso..."
        />
        <FormInput
          type="text"
          label="Talla"
          name="height"
          addon="cm"
          placeholder="Talla..."
        />
        <FormInput
          type="text"
          label="PC"
          name="PC"
          addon="cm"
          placeholder="PC..."
        />
        <FormInput
          type="text"
          label="IMC (Indice de Masa Corporal)"
          name="IMC"
          placeholder="IMC..."
        />
      </form>
      <div className="mt-2">
        <Button
          primary
        >
          Atrás
        </Button>
        <Button
        // eslint-disable-next-line max-len
          primary
          // eslint-disable-next-line max-len
          className="ml-2"
          onClick={() => dispatch(nextStep(4))}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default AnthropromedicalMeasures;
