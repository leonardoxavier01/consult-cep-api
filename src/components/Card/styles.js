import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1be;
  width: 500px;
  border-radius: 8px;
  h2 {
    margin: 16px 0;
    font-size: 30px;
  }
  span {
    margin-bottom: 10px;
    font-weight: bold;
  }
  @media (max-width: 620px) {
    width: 80%;
    min-height: 250px;
    h2 {
      font-size: 28px;
    }
  }
  @media (max-width: 415px) {
    h2 {
      font-size: 25px;
    }
  }
  @media (max-width: 390px) {
    align-items:flex-start ;
    padding:10px ;
  }
`;
