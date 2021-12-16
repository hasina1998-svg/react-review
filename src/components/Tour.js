import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: relative;
  width: 100%;
`;
const Imagecontainer = styled.div``;
const Text = styled.div`
  position: absolute;
  top: 4%;
  font-size: 25px;
`;
const Sub = styled.div`
  position: absolute;
  top: 12%;
  width: 20%;
`;
const Image = styled.img`
  width: 100vw;
`;
const Tour = () => {
  return (
    <Container>
      <Imagecontainer>
        <Image src="https://www.itournepal.com/images/nepal-4wd-tour.jpg" />
      </Imagecontainer>
      <Text>Dare to live the life You're always wanted</Text>
      <Sub>
        Travel helps in self-development, making new friends, refreshing one's
        mind and brings out new ideas. ... Travelling also keeps away stress,
        depression, and anxiety. It provides a new atmosphere taking out a
        person from their comfort zone. Overall, traveling broadens the horizon
        of a person
      </Sub>
    </Container>
  );
};

export default Tour;
