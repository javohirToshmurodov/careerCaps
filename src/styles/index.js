import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15%;
`;
export const OutlineBtn = styled.button`
  padding: 13px 35px;
  border-radius: 88px;
  border: 2px solid #fff;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  background-color: transparent;
  color: white;
`;
export const ManbalarWrapperFirst = styled.div`
  width: 720px;
  height: 538px;
  display: flex;
  justify-content: center;
  /* justify-content: center; */
  align-items: center;
  h1 {
    margin: 0;
    max-width: 400px;
  }
`;
export const ManbalarWrapper = styled.div`
  width: 720px;
  height: 538px;
  position: relative;
  padding: 7%;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.01em;
    color: #000000;
  }
`;
export const BlackOutlineBtn = styled.button`
  padding: 12px 26px;
  border-radius: 88px;
  border: 2px solid #000;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  line-height: 20px;
  background-color: transparent;
  color: black;
  transition: all 0.3s;
  position: absolute;
  bottom: 14%;
  left: 6%;
  /* margin-top: 25px; */
  &:hover {
    background-color: #000;
    color: white;
    cursor: pointer;
  }
`;
export const AdvantagesCardWrapper = styled.div`
  margin-top: 20px;
  min-height: 410px;
  align-self: stretch;
  h2 {
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
  }
  padding: 25px;
  text-align: center;
  background-color: #fff;
`;
export const ForYouWrapper = styled.div``;
export const TestButtonWrapper = styled.div`
  border: 2px solid #000000;
  border-radius: 79px;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
`;
