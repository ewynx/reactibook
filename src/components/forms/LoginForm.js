import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button';
import '../styles.css'
import purple from '@material-ui/core/colors/purple';
import TextField from '@material-ui/core/TextField';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const renderSingleField = ({input, label, type, meta: { touched, error, warning }}) => (
  <div style={{ margin: 20}}>
    <TextField {...input} placeholder={label} type={type}/>
    <br/>{touched &&
      ((error && <span className="error">{error}</span>) ||
    (warning && <span>{warning}</span>))}
  </div>
)

const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined

let LoginForm = props => {
  const { error, handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
    <Field
      name="username"
      type="text"
      component={renderSingleField}
      label="Username"
      validate={required}
      warn={alphaNumeric}
    />
    <Field
      name="password"
      type="password"
      component={renderSingleField}
      validate={required}
      label="Password"
      />
      <span className="error">{error && <strong>{error}</strong>}</span>

      <br/>
      <Button
        margin={2}
        type="submit"
        variant="contained"
        color="primary"
        disabled={pristine || submitting}>Login</Button>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm
