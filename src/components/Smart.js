import React from "react";
import styled from "styled-components";
const Container = styled.div`
  // import { mobile } from "../responsive";

  display: flex;
  justify-content: center;
  margin: 20px 10px;
`;
const Left = styled.div`
  color: purple;
  max-width:100%
  flex: 2;
   font-size: 20px;
  @media (max-width:640px){
     font-size:15px;
        color:red;
 }

`;
const Right = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 40vw;
  height: 50vh;
  @media (max-width: 640px) {
    width: 30vw;
    height: 30vh;
  }
`;
const Smart = () => {
  return (
    <Container>
      <Left>
        {" "}
        <p>
          Latest update:The travel advice level has been reviewed and lowered to
          exercise a high degree of caution due to the reduced impacts of
          COVID-19. Nepal has updated its visa on arrival and entry requirements
          for tourism. Nepal continues to impose a range of restrictions on
          domestic and international travel. International and domestic
          commercial flights are operating, with reduced services for some
          carriers.{" "}
        </p>{" "}
      </Left>

      <Right>
        {" "}
        {/* <img height="300" width="300" /> */}
        <Image src="https://lizzielau.com/wp-content/uploads/2020/01/women-traveling-solo-2.jpg" />{" "}
      </Right>
    </Container>
  );
};

export default Smart;
