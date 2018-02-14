import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate'
import renderField from './renderField';

class WizardFormFirstPage extends Component {
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
        <div className="wizardDiv card-1 col s10 offset-s1">
          <form onSubmit={handleSubmit}>
            <div className="col s12">
              <Field
              name="summary"
              type="text"
              component={renderField}
              label="Give a short summary about yourself in 150 characters or less"
              />
              <Field
              name="bio"
              type="text"
              component={renderField}
              label="About me - what are you all about?"
              />
              <div style={{ marginBottom: '15px' }}>
                {"Pick one or more categories you're interested in"}
              </div>
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
