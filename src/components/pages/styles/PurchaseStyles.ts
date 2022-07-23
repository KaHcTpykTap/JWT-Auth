import styled from "styled-components";

export const PurchaseContainer = styled.div`
  width: 325px;
  height: 40vh;
  min-width: 200px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex-direction: column;
  font-family: "Assistant", sans-serif;

  .color-header {
    width: 80%;
    font-size: 14px;
    height: 20px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
  }

  .color-header-left {
    color: #999;
    padding-right: 5px;
    width: 50%;
    text-align: right;
  }

  .color-header-right {
    color: #000;
    width: 50%;
  }

  .color-items {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10px 0;
    z-index: 100;
  }

  .item-1,
  .item-1-active {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin: 5px 10px;
    position: relative;
    display: inline-block;
    background: white;
    border: 1px solid #777;
    cursor: pointer;
  }

  .item-1-active:after {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #111;
    background-color: #fff;
    z-index: -1;
  }

  .item-3,
  .item-3-active {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin: 0 5px;
    position: relative;
    display: inline-block;
    background: blue;
    border: 1px solid #777;
    cursor: pointer;
  }

  .item-3-active:after {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #111;
    background-color: #fff;
    z-index: -1;
  }

  .item-1-active,
  .item-3-active {
    border: 1px solid #bbb;
    cursor: none;
  }

  .size-header {
    text-transform: uppercase;
  }

  .size-items {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .size-item, .size-item-active {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    color: #000;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    margin: 10px;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }

  .size-item-active {
    cursor: default;
    background-color: #000;
    color: #fff;
  }
`;
