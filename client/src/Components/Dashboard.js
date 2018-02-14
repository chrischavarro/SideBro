import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from './Navbar';
import WizardForm from './Form/WizardForm';

class Dashboard extends Component {
  handleSubmit(values) {
    this.props.createProfile(values)
  }

  renderDashboard() {
    if (this.props.auth) {
      return (
          <div>
            <WizardForm onSubmit={(values) => this.handleSubmit(values)} />
          </div>
      )
    }
  }

  render() {
    console.log(this.props.auth)
    return (
      <div>
        <Navbar />
        {this.renderDashboard()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect (mapStateToProps, actions)(Dashboard);
