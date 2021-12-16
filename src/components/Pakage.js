import React from "react";
import styled from "styled-components";
const Container = styled.div``;
const Heading = styled.div``;
const SubHeading = styled.div``;
const Imagecontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 30px;
  max-width: 100vw;
  max-height: 100vh;
`;
const Image = styled.img`
  max-width: 30vw;
  max-height: 40vh;

  &:hover {
    opacity: 1;
    transform: scale(1, 1.2);
  }
`;
const Left = styled.div`
  flex: 1;
  margin: 0px 10px;
`;
const Center = styled.div`
  flex: 1;
  margin: 0px 10px;
`;
const Right = styled.div`
  flex: 1;
  margin: 0px 10px;
`;

const Pakage = () => {
  return (
    <Container>
      <Heading>Popular Packages </Heading>
      <SubHeading>Don't miss this offer</SubHeading>
      <Imagecontainer>
        <Left>
          {" "}
          <Image src="https://i.pinimg.com/originals/75/95/14/7595141bccec179ec1a758385c961eca.jpg"></Image>
        </Left>
        <Center>
          {" "}
          <Image src="https://globalstartours.com/wp-content/uploads/2020/09/Maldives-holidays.jpg"></Image>
        </Center>
        <Right>
          {" "}
          <Image src="https://www.swadeshitours.com/wp-content/uploads/2018/07/maldives-holiday-packages.jpg"></Image>
        </Right>
      </Imagecontainer>
    </Container>
  );
};

export default Pakage;
