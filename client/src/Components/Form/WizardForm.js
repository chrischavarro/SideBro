import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as actions from '../../actions';
import { connect } from 'react-redux';
import WizardHeader from './WizardHeader';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';


class WizardForm extends Component {
  componentDidMount() {
    this.props.fetchTags();
  }

  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    if (this.props.tags) {
      return (
        <div className="row">
          <WizardHeader page={page} />
          {page === 1 &&
            <WizardFormFirstPage
            onSubmit={this.nextPage}
            tags={this.props.tags} />}
          {page === 2 && (
            <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
            />
          )}
          {page === 3 && (
            <WizardFormThirdPage
            />
          )}
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    tags: state.tags
  }
};

export default connect(mapStateToProps, actions)(WizardForm);
