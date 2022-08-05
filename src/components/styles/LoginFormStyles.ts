import styled from "styled-components";

export const LoginFormContainer = styled.div`
  width: 40vw;
  min-width: 200px;
  max-width: 300px;
  padding: 20px 50px;
  height: 50vh;
  display: flex;
  justify-content: space-evenly;

  flex-direction: column;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  .lf-input {
    border: none;
    border-bottom: 1px solid gray;
    padding: 10px 5px;
    font-size: 16px;
    font-weight: 300;
    margin: 10px 0;
    outline: none;
    outline-offset: -2px;
    &:focus { 
      border-width: 2px;
    }

    &.error {
      border-width: 2px;
      border-color: red;
    }
  }

  .lf-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    height: 80px;
  }
  .lf-button {
    width: 150px;
    height: 40px;
    text-transform: uppercase;
    background-color: black;
    color: white;
    font-size: 12px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.disabled {
      cursor: default;
      background-color: gray;
    }
  }

  .lf-header {
    cursor: pointer;
    color: grey;
    text-decoration: underline;
    &:hover {
      color: #111;
    }
  }
`;
