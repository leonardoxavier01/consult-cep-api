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
`;

export const ButtonSearch = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.5s;
  :hover {
    transform: scale(1.2);
  }
`;
