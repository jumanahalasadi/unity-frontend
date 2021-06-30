import React from 'react';
import './styles.css';

const Checkbox = ({ name, label, register, required}) => (
    <div className="form-control-checkbox">
      <input id={name} name={name} type="checkbox" {...register(name, { required })} />
      <label htmlFor={name}>{label}</label>
    </div>
);

export default Checkbox;