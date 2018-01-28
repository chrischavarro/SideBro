import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate'
import renderField from './renderField';

class WizardFormFirstPage extends Component {
  // <Field name={`key-${tag._id}`} id={tag.name} component="input" type="checkbox" key={tag.name} />
  // <label htmlFor={tag.name}>{tag.name}</label>
  renderTags() {
    const tags = this.props.tags
    return tags.map(tag => {
      return (
        <div key={tag.name} className="ck-button">

          <label>
            <input type="checkbox" value="1" /><span>{tag.name}</span>
          </label>
        </div>
      )
    })
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className="row">
        <div className="wizardHeader card-1 col s10 offset-s1">
          <div className="col s4 wizardHeaderStep">
            <div className="stepCircle selected">1</div>
            {"Set up your profile"}
          </div>
          <div className="col s4 wizardHeaderStep">
            <div className="stepCircle">2</div>
            {"Pick your preferences"}
          </div>
          <div className="col s4 wizardHeaderStep">
            <div className="stepCircle">3</div>
            {"Connect your Spotify"}
          </div>
        </div>

      <div className="wizardDiv card-1 col s10 offset-s1">
      <form onSubmit={handleSubmit}>
      <div className="col s6">
      <Field
      name="summary"
      type="text"
      component={renderField}
      label="Give a short summary about yourself in 150 characters or less"
      />
      <Field
      name="lastName"
      type="text"
      component={renderField}
      label="Last Name"
      />
      {this.renderTags()}
      </div>
      <div className="wizardButtonRow row">
      <div className="col s1 offset-s11">
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
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizardFormFirstPage)
