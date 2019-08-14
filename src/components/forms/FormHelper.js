
import React from 'react'

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={label} type={type} />
      <br/>{touched &&
        (error && <span>{error}</span>)}
    </div>
  </div>
)

export default renderField;
