
import React from 'react'
import TextField from '@material-ui/core/TextField';

const renderField = ({
  input,
  label,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <TextField {...input} placeholder={label}/>
      <br/>{touched &&
        (error && <span className="error">{error}</span>)}
    </div>
  </div>
)

export default renderField;
