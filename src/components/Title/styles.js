import styled from "styled-components";

export const TitleHeading = styled.h1`
  font-size: 85px;
  color: #fff;
  animation: animationTitle 2s;
  @keyframes animationTitle {
    from {
      transform: rotateX(90deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }
  @media (max-width: 800px) {
    font-size: 70px;
    padding-left: 30px;
  }
  @media (max-width: 620px) {
    font-size: 60px;
    padding-left: 30px;
  }
  @media (max-width: 415px) {
    font-size: 50px;
    padding-left: 30px;
  }
`;
