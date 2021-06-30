import React from 'react';
import './styles.css';

const Input = ({ name, label, register, errors, required, type }) => (
    <div className="form-control-input">
      <label htmlFor={name}>{label}{required && "*" }</label>
      <input id={name} name={name} type={type} {...register(name, { required: true, maxLength: 100 })} />
      {errors && errors[name]?.type === 'required' && <span className="error">This field is required</span>}
      {errors && errors[name]?.type === 'minLength' && <span className="error">Please input at least 3 characters</span>}
      {errors && errors[name]?.type === 'maxLength' && <span className="error">Max of 100 characters</span>}
      {errors && errors[name]?.type === 'pattern' && <span className="error">Must contain only letters</span>}
    </div>
);

export default Input;