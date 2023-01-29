import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// eslint-disable-next-line import/no-unresolved
import { Bar } from 'react-chartjs-2';
import Creatable from 'react-select/creatable';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import Container from '../../../layout/Container/Container';
import PageHeader from '../../organisms/PageHeader/PageHeader';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Atenciones por mes',
    },
  },
};
const labels = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Atenciones',
      data: [10, 22, 33, 44, 55, 34, 34, 34, 67, 100, 120, 43],
      backgroundColor: 'rgb(2, 132, 199)',
    },
  ],
};

const DashboardTemplate = () => {
  const dataPages = [
    {
      link: '/dashboard',
      text: 'Dashboard',
    }];
  const [selectedOption, setSelectedOption] = useState('');

  const optionsSelect = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  console.log(selectedOption);
  return (
    <Wrapper>
      <Container className="py-4">
        <Creatable
          isMulti
          placeholder="Seleccione o agregue"
          options={optionsSelect}
          className="basic-multi-select"
          noOptionsMessage={() => 'name not found'}
          onChange={(choice) => setSelectedOption(choice)}
        />

        <PageHeader title="Dashboard" dataPages={dataPages} />
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-5 md:grid-cols-4">
          <Bar options={options} data={data} />
        </div>
      </Container>
    </Wrapper>
  );
};

export default DashboardTemplate;
