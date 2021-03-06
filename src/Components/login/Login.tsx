import React from "react";
import * as S from "./style";
import { useHistory } from "react-router-dom";
import LoginImg from "../../asset/Img/loginpage.svg";
import WhiteFaceBook from "../../asset/Img/whitefacebook.svg";
import { openFaceBook } from "../../util/openFaceBook";
import { useRecoilState } from "recoil";
import { LoginData } from "../../Store/LoginAtom";
import useLogin from "../../Hook/Login/useLogin";

const Login: React.FC = () => {
  const history = useHistory();

  const [loginData, setLoginData] = useRecoilState(LoginData);

  const { onClickLogin } = useLogin();

  const signUpHistoty = () => {
    history.push("/signup");
  };

  return (
    <>
      <S.Wrapper>
        <S.Div>
          <S.FaceBookDiv>
            <S.FaceBookImg
              src={WhiteFaceBook}
              alt=""
              onClick={() => openFaceBook()}
            />
          </S.FaceBookDiv>
          <S.LoginSubTitle>7th Highthon</S.LoginSubTitle>
          <S.LoginTitle>Login</S.LoginTitle>
          <S.TextSubmit
            type="text"
            placeholder="이메일을 입력해주세요"
            margin="0 0 24px 0"
            value={loginData.email}
            name="email"
            onChange={(e) =>
              setLoginData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <S.TextSubmit
            type="text"
            placeholder="비밀번호를 입력해주세요"
            margin=" 0 0 80px 0"
            name="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <S.Submit type="submit" value="로그인" onClick={onClickLogin} />
          <S.TextDiv>
            <S.SignUpText1>계정이 없으신가요? </S.SignUpText1>
            <S.SignUpText onClick={signUpHistoty}>회원가입 하기</S.SignUpText>
          </S.TextDiv>
          <S.HighthonDiv>
            <S.HighthonText>Highthon</S.HighthonText>
            <S.Highthon>
              <strong>개발자 · 디자이너</strong>를 꿈꾸는{" "}
              <strong>고등학생</strong>을 위한 <strong>해커톤</strong>
            </S.Highthon>
          </S.HighthonDiv>
        </S.Div>
        <S.ImgDiv>
          <S.LoginImg src={LoginImg} alt="" />
        </S.ImgDiv>
      </S.Wrapper>
    </>
  );
};

export default Login;
