import styled from "styled-components";

export const QuestionBox = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 128px 140px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
`;

export const QuetionTitle = styled.h1`
  font-size: 100px;
  color: black;
  font-weight: bold;
`;

export const QuestionSubTitle = styled.h2`
  font-size: 40px;
  color: #227cff;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: 16px;
`;

export const QuestionLine = styled.hr`
  width: 100%;
  margin-top: 28px;
`;

export const QuestionItemWrap = styled.div`
  width: 100%;
  padding: 28px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const QuestionFBButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-items: center;
  outline: none;
  border: 0px;
  border-radius: 100px;
  cursor: pointer;
  overflow: hidden;
  position: absolute;
  top: 90px;
  right: 30px;
  padding: 0px;
  background: none;
`;

export const QuestionFBButtonImg = styled.img`
  width: 100%;
  object-fit: scale-down;
  cursor: pointer;
`;
