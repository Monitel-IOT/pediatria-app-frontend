import React from 'react';
import Typography from '../../atoms/Typography/Typography';
import CheckBox from '../../atoms/CheckBox/CheckBox';
import Card from '../../organisms/Card/Card';

const VaccinesCheckBox = () => (
  <Card className="mt-4">
    <Typography component="h3" className="mb-5">
      Vacunas
    </Typography>
    <form className="flex justify-between">
      <div>
        <CheckBox label="BCG" />
        <CheckBox label="Hepatitis B" />
        <CheckBox label="AMA" />
        <CheckBox label="INF 1 y 2" />
        <CheckBox label="SPR" />
      </div>
      <div>
        <CheckBox label="1 P+PO+RO+N" />
        <CheckBox label="2 P+PO+RO+N" />
        <CheckBox label="3 P+PO" />
        <CheckBox label="Refuerzo SPR" />
      </div>
    </form>
  </Card>
);

export default VaccinesCheckBox;
