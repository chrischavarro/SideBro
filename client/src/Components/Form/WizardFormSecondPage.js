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
          <div className="col s6 offset-s3">
            <Field
            name="city"
            type="text"
            component={renderField}
            label="What city do you live in?"
            />
          </div>
          <div className="wizardButtonRow row">
            <div className="col s12">
              <div className="col 2" style={{ padding: '0px' }}>
                <button type="button" className="previous wizardButton" onClick={previousPage}>
                  Previous
                </button>
              </div>
              <div className="col s2 offset-s8">
                <button type="submit" className="wizardButton next">
                  Next
                </button>
              </div>
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
