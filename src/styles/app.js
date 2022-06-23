import styled from "styled-components";

const StyledApp = styled.section`
  .App {
    min-height: 100vh;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #e6e6ea;
    column-gap: 20px;
    flex-wrap: wrap;
  }
  .app__value {
    min-width: 70%;
    height: 77vh;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 15px;
    box-shadow: 10px 10px 12px grey;

    h1 {
      font-size: 10vw;
      letter-spacing: 2vw;
      margin: 0;
    }
  }
  .app__card-inner {
    min-width: 25%;
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    div {
      height: 150px;
      border-radius: 15px;
      line-height: 2;
      cursor: pointer;
      box-shadow: 10px 10px 12px grey;

      h1 {
        width: 100%;
        height: 100%;
        overflow: hidden;
        font-size: 70px;
        letter-spacing: 5px;
        margin: 0;
      }
    }
  }
  .app__total {
    height: 98vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      margin: 10px 0;
      display: flex;
      align-items: center;
      column-gap: 10px;
      font-size: 40px;
    }
    button {
      width: 180px;
      height: 50px;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 5px;
      background: #2ab7ca;
      border: 0;
      border-radius: 6px;
      font-size: 20px;
      color: white;
      cursor: pointer;
      font-family: "Luckiest Guy", cursive;
    }
    h1 {
      font-size: 100px;
      margin: 0;
    }
  }
  h1 {
    color: white;
  }

  @media (max-width: 860px) {
    .App {
      flex-direction: column;
      row-gap: 35px;
    }
    .app__value {
      width: 100%;
      min-height: 30vh;
      margin-top: 100px;
    }
    .app__card-inner {
      width: 100%;
    }
    .app__card-inner div {
      width: 100%;
    }
  }
`;

export default StyledApp;
