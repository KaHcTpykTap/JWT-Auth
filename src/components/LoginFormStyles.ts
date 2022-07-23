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

  .lf-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .lf-button {
    width: 100px;
    padding: 5px 0;
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
