import React from 'react';
import './styles.css';

const FileUpload = ({ name, label, register, errors, required}) => (
    <div className="form-control-upload">
      <label htmlFor={name}>{label}{required && "*" }</label>
      <input id={name} name={name} type="file" accept="image/png, image/jpeg" multiple {...register(name, { required })} />
      {errors && errors[name] && <span className="error">Please upload at least one file</span>}
    </div>
);

export default FileUpload;