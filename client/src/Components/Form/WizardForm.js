import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as actions from '../../actions';
import { connect } from 'react-redux';
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
    console.log(this.props.tags)
    const { onSubmit } = this.props
    const { page } = this.state
    if (this.props.tags) {
      return (
        <div>
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} tags={this.props.tags} />}
        {page === 2 && (
          <WizardFormSecondPage
          previousPage={this.previousPage}
          onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <WizardFormThirdPage
          previousPage={this.previousPage}
          onSubmit={onSubmit}
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
