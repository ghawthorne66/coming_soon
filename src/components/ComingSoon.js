import React, {  Component } from 'react';
import Logo from './Logo';
import Title from "./Title";
import Description from "./Description";
import Countdown from './Countdown'
import Subscribe from "./Subscribe";
import logo from '../images/gear-with-holes.svg'
import '../styles/ComingSoon.css';

class ComingSoon extends Component {
  state = {
    countdown: {
      futureDate: "2020-12-31 00:00:00"
    },
    logo: {
      alt: "Spinning Gear",
      src: logo,
      spinSpeed: "slow"
    },
    title: {
      text: "Coming Soon!"
    },
    description: {
      text:
        "The Coding From Null course platform will be up and running shortly. Please subscribe to our newsletter below to receive updates when new course material is available."
    },
    subscribe: {
      placeholder: "Enter Email Address",
      buttonText: "Submit"
    },
  }

  render() {
    const {
      title,
      description,
      logo,
      subscribe,
      countdown,
    } = this.state;

    return (
      <div className="background">
        <Countdown futureDate={countdown.futureDate} />
        < Logo alt={logo.alt} src={logo.src} />
        <Title text={title.text} />
        < Description text={description.text}
        // src={notification.src}
        // alt={notification.alt}
        // message={notification.message}
        // visible={notification.visible}
        // level={notification.level}

        
        />
        <Subscribe
          placeholder={subscribe.placeholder}
          buttonText={subscribe.buttonText}
          changeLogoSpeed={this.changeLogoSpeed}
          configureNotification={this.configureNotification}
          showNotification={this.showNotification}
        />

       
      </div>
    );

  }

}

export default ComingSoon;
