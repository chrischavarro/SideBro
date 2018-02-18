import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UserCard from './UserCard';

class Onboarding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedCard: 'hidden'
    }
  }

  componentDidMount() {
    this.props.fetchArtists('5a6c138722dcc97e0b1171f7');
  }

    render() {
      const { userArtists } = this.props;
      return (
        <div className="row">
          <div className="col s10 offset-s1 card-2 onboardingDiv">
            <div className="onboardingHeader">
              {"Here's how SideBro works, " + (this.props.auth !== null ? `${this.props.auth.name}.`: "Pal.")}
            </div>
            <div className="col s8 onboardingCardContainer">
              <UserCard
                name="Christian Chavarro"
                summary="I created this app and I'd like to think I'm a cool guy"
                bio={`Hope you're enjoying SideBro so far. I'd love to hear
                    any of comments or suggestions you come up with while using it.`}
                optional="devCard"
                onClick={() => this.setState({ clickedCard: 'expanded' })}
                state={this.state.clickedCard}
                artists={userArtists}
              />
              <UserCard
                name="Bob Smith"
                summary="I'm the first dummy account you shouldn't click on me"
                optional="dummyUserCard"
                state={this.state.clickedCard}
              />
              <UserCard
                name="Jeffrey Spin"
                summary="Hey this is the second dummy account I like really cool stuff"
                optional="dummyUserCard"
                state={this.state.clickedCard}
              />
              <UserCard
                name="Stephen Broderick"
                summary="Saving the best for last I'm the third dummy account"
                optional="dummyUserCard"
                state={this.state.clickedCard}
              />
            </div>
            <div className="col s4 onboardingDescriptionDiv">
              <div className="onboardingDescription1">
                <ul style={{ marginBottom: '0px' }}>
                  <li>{`You'll get a list of all available bros on the main dashboard`}</li>
                  <li>{`Each man card displays that bro's name and their personal summary`}</li>
                  <li>{`If you want to get more info on a specific bro, just click on their card`}</li>
                  <li style={{ textAlign: 'center', fontWeight: '600' }}>{`Try clicking on the first card now!`}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    userArtists: state.userArtists
  }
}

export default connect(mapStateToProps, actions)(Onboarding);
