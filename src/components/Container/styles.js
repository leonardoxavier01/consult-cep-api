import styled from "styled-components";

export const ContainerCep = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(#11d663, #212b46);
`;

export const Title = styled.h1`
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
`;
