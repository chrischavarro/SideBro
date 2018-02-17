import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';
class Onboarding extends Component {
    render() {
      return (
        <div className="row">
          <div className="col s10 offset-s1 card-2 onboardingDiv">
            <div className="onboardingHeader">
              {"Here's how SideBro works, " + (this.props.auth !== null ? `${this.props.auth.name}.`: "Pal.")}
            </div>
            <div className="col s8">
              <UserCard
                name="Christian Chavarro"
                bio="I created this app and I'd like to think I'm a cool guy"
              />
              <UserCard
                name="Bob Smith"
                bio="I'm the first dummy account you shouldn't click on me"
                optional="dummyUserCard"
              />
              <UserCard
                name="Jeffrey Spin"
                bio="Hey this is the second dummy account I like really cool stuff"
                optional="dummyUserCard"
              />
              <UserCard
                name="Stephen Broderick"
                bio="Saving the best for last I'm the third dummy account"
                optional="dummyUserCard"
              />
            </div>
            <div className="col s4">
            </div>
          </div>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Onboarding);
