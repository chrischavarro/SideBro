import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row homeBackground">
          <div className="col s6 offset-s3 homeDiv card-2">
            <div className="titleDiv">
              SideBro
            </div>
            <div className="titleDescription col s10 offset-s1">
              {"Find new bros based on your personality and interests. Your main bro doesn't have to know."}
            </div>
            <a href="/auth/google"><button className="signUpButton card-1">Sign Up</button></a>
          </div>
        </div>
        <div className="row homeSecondPane">
          <div className="col s4 homeExplanationDiv first">
            <div className="explanationContent col s10 offset-s1">
              <div><i class="material-icons home">looks_one</i> </div>
              {"Set up your profile and let us know what your interests are."}
            </div>
          </div>

          <div className="col s4 homeExplanationDiv second">
            <div className="explanationContent col s10 offset-s1">
              <div><i class="material-icons home">looks_two</i> </div>
              {"Check out your custom made list of like-minded bros."}
            </div>
          </div>

          <div className="col s4 homeExplanationDiv third">
            <div className="explanationContent col s10 offset-s1">
              <div><i class="material-icons home">looks_3</i> </div>
              {"Match with a new bro, start chatting, and get the ball rolling."}
            </div>
          </div>
        </div>
        <div className="row homeThirdPage">
          <div className="testimonialContainer col s8">
            <div className="col s6 testimonialCard blue">
              <div className="testimonialCopy">
                {"SideBro helped me find a bro who ended up being one of my groomsmen."}
                  <div className="testimonialName">
                    {"- Brad H."}
                  </div>
              </div>
            </div>
            <div className="col s6 testimonialCard pink">
              <div className="testimonialCopy">
                {"Honestly can't believe something like this hasn't been around already."}
                <div className="testimonialName">
                  {"- Thomas P."}
                </div>
              </div>
            </div>
            <div className="col s6 testimonialCard pink">
              <div className="testimonialCopy">
                {"Thanks to SideBro, I was able to make friends just a week after moving to a new city!"}
                <div className="testimonialName">
                  {"- Sebastian R."}
                </div>
              </div>
            </div>
            <div className="col s6 testimonialCard blue">
              <div className="testimonialCopy">
                {"SideBro has been a huge help in finding people to hang out with when I travel abroad."}
                <div className="testimonialName">
                  {"- Jacob T."}
                </div>
              </div>
            </div>
          </div>
          <div className="col s4 signUpReminder">
            <div className="signUpCopy ">
              {"Ready to meet your next bro?"}
              <div>
                <a href="/auth/google"><button className="signUpButton bottom card-1" style={{ color: 'white' }}>Get Started</button></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Home;
