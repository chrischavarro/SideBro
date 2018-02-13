import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <div className="row">
      <div className="wizardDiv card-1 col s10 offset-s1">
        <form onSubmit={handleSubmit}>
          <div className="col s12">
            <Field
            name="summary"
            type="text"
            component={renderField}
            label="Give a short summary about yourself in 150 characters or less"
            />
          </div>
          <div className="wizardButtonRow row">
            <div className="col s1 offset-s11">
            <button type="button" className="previous wizardButton" onClick={previousPage}>
              Previous
            </button>
            <button type="submit" className="wizardButton next">
              Next
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage)
