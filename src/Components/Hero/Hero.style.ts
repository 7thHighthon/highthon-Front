import styled from "styled-components";

export const HeroBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: brightness(70%);
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const HeroTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 100px;
  line-height: 144px;
  text-align: center;
  font-weight: bold;
`;

export const HeroSubTitle = styled.h2`
  color: white;
  font-size: 36px;
  margin-top: 20px;
  text-align: center;
`;
