import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from './FormHelper'
import Button from '@material-ui/core/Button';
import '../styles.css'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

let PostForm = props => {
  const { error, handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit}>

      <div style={{padding:10}}>
        <label htmlFor="postContent"><strong>What's on your mind?</strong></label>
        <Field
          name="postContent"
          component={renderField}
          validate={required} />
      </div>

      <label><strong>Share with...</strong></label>
      <div>
        <label>
          <Field
            name="shareWith"
            component="input"
            type="radio"
            value="public" />
          {' '}
          Public
        </label>
        <label>
          <Field name="shareWith" component="input" type="radio" value="friends" />
          {' '}
          Friends
        </label>
      </div>
      <span className="error">{error && <strong>{error}</strong>}</span>

      <br/>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={pristine || submitting}>Post</Button>
    </form>
  )
}

PostForm = reduxForm({
  form: 'post'
})(PostForm)

export default PostForm
