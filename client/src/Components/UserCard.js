import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Collapse } from 'react-collapse'

import UserBio from './UserCard/UserBio';
import UserArtists from './UserCard/UserArtists';

class UserCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedCard: 'hidden'
    }
  }

  toggleCardSize() {
    const { clickedCard } = this.state
    if (clickedCard === 'hidden') {
      this.setState({ clickedCard: 'expanded' })
    } else if (clickedCard === 'expanded') {
      this.setState({ clickedCard: 'hidden' })
    }
  }

  render() {
    const { optional, key, name, sendFriendRequest, summary, bio, artists} = this.props,
          { clickedCard } = this.state
    return (
      <div className={`col s5 userCard ${clickedCard} card-2 ${optional}`}
        key={`${key}` }
        onClick={() => this.toggleCardSize()}
      >
        <div className={`userName ${clickedCard}`}>
          <div>
            <span>{name}</span>
            <i
              onClick={() => sendFriendRequest('5a6c138722dcc97e0b1171f7')}
              className={`material-icons addButton ${clickedCard}`}>
              person_add
            </i>
          </div>
        </div>
        <div className={`userBio ${clickedCard}`}>
          {summary}
        </div>
        <Collapse isOpened={true }>
        <div className={`cardExpandedContent ${clickedCard}`}>
          <UserBio
            clickedCard={clickedCard}
            bio={bio}
          />
          <UserArtists artists={artists} />
        </div>
        </Collapse>
      </div>
    )
  }
}

export default connect(null, actions)(UserCard);
