'use strict';

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const Background = styled.div`
  background-color: black;
  opacity: 0.7;
  position: absolute;
  width: 100vw;
  height: 100vh;
  flex: 1;
  display: flex;
`;

const FlexHelper = styled.div`
  flex: 1;
  display: flex;
`;

const InfoContainer = styled.div`
  padding: 80px;
  margin: auto;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
  color: white;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: white;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: white;
  border-color: white;
`;

const VideoSlider = () => {
  return (
    <Container>
      <Video id="background-video" autoPlay loop muted>
        <source src={require('../../videos/brushing_teeth.mp4')} type="video/mp4" />
        <source src={require('../../videos/brushing_teeth.mp4')} type="video/ogg" />
        Your browser does not support the video tag.
      </Video>
      <Background>
        <FlexHelper />
        <InfoContainer>
          <Title>SUMMER SALE</Title>
          <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
          <Button>SHOW NOW</Button>
        </InfoContainer>
      </Background>
    </Container>
  );
};

export default VideoSlider;
