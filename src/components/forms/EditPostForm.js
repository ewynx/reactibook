import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import renderField from './FormHelper'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initialize } from 'redux-form';
import Button from '@material-ui/core/Button';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

class EditPostForm extends Component{
  render () {
    const style = {
      margin: 10,
    };
      const { error, handleSubmit, pristine, submitting } = this.props
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="content"
              component={renderField}
              validate={required}/>
          </div>
          {error && <strong>{error}</strong>}

          <Button
          style={style}
            type="submit"
            disabled={pristine || submitting}
            variant="contained"
            color="primary">Update</Button>
        </form>
      )
  }
}

EditPostForm.propTypes = {
  posts: PropTypes.array.isRequired,
  editingPostId: PropTypes.string
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  editingPostId: state.posts.editingPostId,
  initialValues: state.posts.initialValues
});

EditPostForm = reduxForm({
  form: 'editPost',
  enableReinitialize : true
})(EditPostForm)

export default connect(mapStateToProps, null)(EditPostForm);
