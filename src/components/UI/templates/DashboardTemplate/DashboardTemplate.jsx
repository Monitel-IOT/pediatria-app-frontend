import React from 'react';
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
  return (
    <Wrapper>
      <Container className="py-4">
        <PageHeader title="Dashboard" dataPages={dataPages} />
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-5 md:grid-cols-4">
          <Bar options={options} data={data} />
        </div>
      </Container>
    </Wrapper>
  );
};

export default DashboardTemplate;
