import React from 'react';
import './styles.css';

export const Select = ({ onChange, errors, name, label, register, required, options }) =>  {

  const optionsItems = options.map( (option) => {
    return (<option key={option.id} value={option.value}>{option.value.toUpperCase()}</option>)
  });

  return (
    <div className="form-control-input">
      <label htmlFor={name}>{label}{required && "*" }</label>
        <select name={name} {...register(name, { required })} onChange={onChange}>
          {
            optionsItems
          }
        </select>
        {errors && errors[name]?.type === 'required' && <span className="error">This field is required</span>}
    </div>

  );
    
}