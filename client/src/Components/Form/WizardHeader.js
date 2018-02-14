import React from 'react';

function WizardHeader(props) {
  const {page} = props
  return (
    <div className="wizardHeader card-1 col s10 offset-s1">
      <div className="col s4 wizardHeaderStep">
        <div className={`stepCircle step1${page}`}>1</div>
        {"Set up your profile"}
      </div>
      <div className="col s4 wizardHeaderStep">
        <div className={`stepCircle step2${page}`}>2</div>
        {"Pick your preferences"}
      </div>
      <div className="col s4 wizardHeaderStep">
        <div className={`stepCircle step3${page}`}>3</div>
        {"Connect your Spotify"}
      </div>
    </div>
  )
}

export default WizardHeader;
