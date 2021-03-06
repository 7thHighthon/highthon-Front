import {
  VoteBox,
  VoteFBButton,
  VoteFBButtonImg,
  VoteItemWrap,
  VoteLeftImg,
  VoteLeftWrap,
  VoteRightButton,
  VoteRightText,
  VoteRightWrap,
  VoteSubTitle,
  VoteTitle,
} from "./Vote.style";
import BlackFaceBook from "../../asset/Img/blackfacebook.svg";
import VoteMain from "../../asset/Img/VoteMain.svg";
import { openFaceBook } from "../../util/openFaceBook";
import { useHistory } from "react-router-dom";

const Vote: React.FC = () => {
  const history = useHistory();

  const moveVote = () => {
    history.push("/vote");
  };
  return (
    <VoteBox>
      <VoteSubTitle>7th Highthon</VoteSubTitle>
      <VoteTitle>Vote</VoteTitle>
      <VoteItemWrap>
        <VoteLeftWrap>
          <VoteLeftImg src={VoteMain} />
        </VoteLeftWrap>
        <VoteRightWrap>
          <VoteRightText>
            가장 훌륭한 프로젝트를 완성한 팀에게
            <br /> <strong>'좋아요'</strong>를 눌러주세요!
          </VoteRightText>
          <VoteRightButton onClick={moveVote}>투표하러가기</VoteRightButton>
        </VoteRightWrap>
      </VoteItemWrap>
      <VoteFBButton>
        <VoteFBButtonImg src={BlackFaceBook} onClick={() => openFaceBook()} />
      </VoteFBButton>
    </VoteBox>
  );
};
export default Vote;
