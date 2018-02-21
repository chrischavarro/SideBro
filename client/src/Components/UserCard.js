import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

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

  renderArtists() {
    if (this.props.artists) {
      const { artists } = this.props;
      return artists.map(artist => {
        return (
          <div key={artist._id} className="col s3" style={{ width: '20%' }}>
            <img src={artist.image} className="cardArtistImage" alt={artist.name} />
            <div style={{ textAlign: 'center', fontSize: '14px' }}>{artist.name}</div>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div className={`col s5 userCard ${this.state.clickedCard} card-2 ${this.props.optional}`}
        key={`${this.props.key}` }
        onClick={() => this.toggleCardSize()}
      >
        <div className={`userName ${this.state.clickedCard}`}>
          <div>
            <span>{this.props.name}</span>
            <i
              onClick={() => this.props.sendFriendRequest('5a6c138722dcc97e0b1171f7')}
              className={`material-icons addButton ${this.state.clickedCard}`}>
              person_add
            </i>
          </div>
        </div>
        <div className={`userBio ${this.state.clickedCard}`}>
          {this.props.summary}
        </div>
        <div className={`cardExpandedContent ${this.state.clickedCard}`}>
          <div className="cardExpandedBio">
            {this.props.bio}
          </div>
          <div style={{ textAlign: 'center', marginBottom: '5px' }}>{`Favorite Artists`}</div>
          <div className="cardArtists col s12">
            {this.renderArtists()}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(UserCard);
