import React from 'react';

const UserBio = (props) => {
  return (
    <div className="cardExpandedBio col s12">
      <div className="expandedHeader">About Me</div>
      <div className="cardExpandedBioText">
        {props.bio}
      </div>
    </div>
  )
}

export default UserBio;
