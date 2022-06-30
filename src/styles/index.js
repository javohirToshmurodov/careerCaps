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
  margin-top: 20px !important;
  height: 100%;
  min-height: 410px;
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
  text-align: center;
  background-color: #fff;
`;
export const ForYouWrapper = styled.div`
  padding: 7% 14% 7% 7%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const TestButtonWrapper = styled.button`
  background: none;
  padding: 16px 40px;
  border: 2px solid #000000;
  border-radius: 79px;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  transition: all 0.3s linear;
  &:hover {
    background-color: #000;
    color: white;
  }
`;
export const JobsContactWrapper = styled.div`
  /* margin-top: 20px !important; */
  display: flex;
  justify-content: space-between !important ;
  height: 100%;
  align-items: center;
  flex-direction: column;
  text-align: center;
  .circleImage {
    border-radius: 50%;
    border: 3px solid #3dd0f0;
    /* width: 220px; */
    padding: 10px;
    /* height: 220px; */
    /* border-image-source: linear-gradient(180deg, #3000d6 0%, #3dd0f0 100%); */
  }

  .circleIcon {
    background-color: #000;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
  }
`;
export const AboutPageWrapper = styled.div`
  color: white;
  /* height: auto; */
  min-height: 500px;
  width: 100%;
  position: absolute;
  background: rgba(48, 2, 214, 0.72);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  /* max-width: 928px; */
`;
export const CardMiniWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(190, 190, 190, 0.25);
  border-radius: 10px;
  display: flex;
  padding: 20px;
  gap: 26px;
`;
export const MainCardWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(190, 190, 190, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5%;
  .crownPosition {
    position: absolute;
    top: 5%;
    left: 7%;
    /* borde */
  }
`;
