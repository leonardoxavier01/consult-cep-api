import styled from "styled-components";

export const ContainerInput = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px;
  margin: 35px 0;
  display: flex;
  border-radius: 8px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  input {
    background-color: transparent;
    border: 0;
    font-size: 20px;
    color: #fff;
    outline: none;
    margin-right: 8px;
  }
  input::placeholder {
    color: #f1f1f1;
  }
  @media (max-width: 415px) {
    margin: 30px 0;
  }
`;

export const CardCep = styled.div`
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
