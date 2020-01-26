import React, {  Component } from 'react';
import Countdown from './Countdown'
import '../styles/ComingSoon.css';

class ComingSoon extends Component {
  state = {
    countdown: {
      futureDate: "2020-12-31 00:00:00"
    }
  }
  render() {
    const {
      countdown
    } = this.state;

    return (
      <div className="background">
        <Countdown futureDate={countdown.futureDate}></Countdown>
       
      </div>
    );

  }

}

export default ComingSoon;
