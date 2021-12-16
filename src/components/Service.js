import React from "react";
import styled from "styled-components";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FavoriteIcon from "@material-ui/icons/Favorite";
const Container = styled.div`
  margin: 30px 20px;
`;
const Heading = styled.div`
  margin: 10px 10px;
`;
const Title = styled.div`
  margin: 10px 10px;
  font-size: 30px;
  display: flex;
  justify-content: center;
`;
const Cardtop = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0px;
`;
const Card = styled.div`
  margin: 0px 15px;
  width: 20%;
  height: 30%;
  display: flex;
  justify-content: center;
  border: 0.5px solid yellow;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px grey;
  &:hover {
    transform: scale(1, 1.2);
  }
`;

const Left = styled.div`
  felx: 1;
  margin: 10px 10px;
`;
const Right = styled.div`
  flex: 2;
  font-size: 15px;
`;
const Service = () => {
  return (
    <Container>
      <Title>Services</Title>
      <Cardtop>
        <Card>
          <Left>
            <FlightTakeoffIcon />
          </Left>

          <Right>
            <Heading> Wide Variety of Tours </Heading>
            <p>choose us for better experience and better enjoyment </p>
          </Right>
        </Card>

        <Card>
          <Left>
            <FlightTakeoffIcon />
          </Left>

          <Right>
            <Heading> Wide Variety of Tours </Heading>
            <p>choose us for better experience and better enjoyment </p>
          </Right>
        </Card>

        <Card>
          <Left>
            <FavoriteIcon />
          </Left>

          <Right>
            <Heading> HIghly Quilified Service </Heading>
            <p>choose us for better experience and better enjoyment </p>
          </Right>
        </Card>
      </Cardtop>
      <Cardtop>
        <Card>
          <Left>
            <FlightTakeoffIcon />
          </Left>

          <Right>
            <Heading> Wide Variety of Tours </Heading>
            <p>choose us for better experience and better enjoyment </p>
          </Right>
        </Card>

        <Card>
          <Left>
            <FlightTakeoffIcon />
          </Left>

          <Right>
            <Heading> Wide Variety of Tours </Heading>
            <p>choose us for better experience and better enjoyment </p>
          </Right>
        </Card>

        <Card>
          <Left>
            <FavoriteIcon />
          </Left>

          <Right>
            <Heading> HIghly Quilified Service </Heading>
            <p>choose us for better experience and better enjoyment </p>
          </Right>
        </Card>
      </Cardtop>
    </Container>
  );
};

export default Service;
