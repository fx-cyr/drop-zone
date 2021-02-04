import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import bgImage from "../assets/landing.jpg";
import Logo from "./Logo";

const App = () => {
  String.prototype.toHHMMSS = function () {
    let sec_num = parseInt(this, 10);
    let days = Math.floor(sec_num / (24 * 3600)).toString();
    let hours = Math.floor((sec_num - days * (24 * 3600)) / 3600).toString();
    let minutes = Math.floor(
      (sec_num - days * (24 * 3600) - hours * 3600) / 60
    ).toString();
    var seconds = (
      sec_num -
      days * (24 * 3600) -
      hours * 3600 -
      minutes * 60
    ).toString();
    let firstDayPanel = "0";
    let secondDayPanel = "0";
    let firstHourPanel = "0";
    let secondHourPanel = "0";
    let firstMinPanel = "0";
    let secondMinPanel = "0";
    let firstSecPanel = "0";
    let secondSecPanel = "0";

    if (days.length < 2) {
      secondDayPanel = days;
    } else {
      firstDayPanel = days[0];
      secondDayPanel = days[1];
    }
    if (hours.length < 2) {
      secondHourPanel = hours;
    } else {
      firstHourPanel = hours[0];
      secondHourPanel = hours[1];
    }
    if (minutes.length < 2) {
      secondMinPanel = minutes;
    } else {
      firstMinPanel = minutes[0];
      secondMinPanel = minutes[1];
    }
    if (seconds.length < 2) {
      secondSecPanel = seconds;
    } else {
      firstSecPanel = seconds[0];
      secondSecPanel = seconds[1];
    }

    return (
      <div className="timerContainer">
        <div className="timerUnitContainer">
          <div className="digitsContainer">
            <div className="timerItem">{firstDayPanel}</div>
            <div className="timerItem">{secondDayPanel}</div>
          </div>
          <div className="timerItemTitle">DAYS</div>
        </div>
        <div className="timerUnitContainer">
          <div className="digitsContainer">
            <div className="timerItem">{firstHourPanel}</div>
            <div className="timerItem">{secondHourPanel}</div>
          </div>
          <div className="timerItemTitle">HOURS</div>
        </div>
        <div className="timerUnitContainer">
          <div className="digitsContainer">
            <div className="timerItem">{firstMinPanel}</div>
            <div className="timerItem">{secondMinPanel}</div>
          </div>
          <div className="timerItemTitle">MINS</div>
        </div>
        <div className="timerUnitContainer">
          <div className="digitsContainer">
            <div className="timerItem">{firstSecPanel}</div>
            <div className="timerItem">{secondSecPanel}</div>
          </div>
          <div className="timerItemTitle">SECS</div>
        </div>
      </div>
    );
  };

  const dayTimestamp = 86400;
  const countdownDuration =
    dayTimestamp * 18 +
    dayTimestamp * (8 / 24) +
    dayTimestamp * (12 / (24 * 60)) +
    dayTimestamp * (5 / (24 * 60 * 60));

  const [count, setCount] = useState(countdownDuration);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
  }, [setCount]);

  return (
    <Container>
      <Logo />
      <TimerContainer>
        <Title>Leezy Boost 103</Title>
        <CountContainer>{`${count}`.toHHMMSS()}</CountContainer>
        <Tagline>Until drop</Tagline>
      </TimerContainer>
    </Container>
  );
};

const Title = styled.div`
  font-family: Roboto;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: 40px;
  letter-spacing: 0.15em;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 36px;
  @media (max-width: 400px) {
    font-size: 24px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background: url(${bgImage});
  background-size: cover;
  height: 100vh;
  position: relative;

  @media (max-width: 400px) {
    background-size: cover;
    align-items: flex-end;
  }
`;

const Tagline = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-align: left;
  text-transform: uppercase;
`;

const CountContainer = styled.div`
  padding-bottom: 22px;
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 10%;
  top: 40%;

  @media (max-width: 400px) {
    position: inherit;
    right: inherit;
    top: inherit;
  }
`;

export default App;
