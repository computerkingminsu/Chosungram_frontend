import * as S from './RecommendFriend.styles';

export default function RecommendFriend(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.UserBox>
          <S.UserImg></S.UserImg>
          <S.UserInfo>
            <S.UserId>__userid__</S.UserId>
            <S.UserName>김민수</S.UserName>
          </S.UserInfo>
        </S.UserBox>
        <S.RecommendText>회원님을 위한 추천</S.RecommendText>
        {/* UI 테스트 */}
        <S.UserBox>
          <S.UserImg></S.UserImg>
          <S.UserInfo>
            <S.UserId>__frinedid__</S.UserId>
            <S.UserName>길동이</S.UserName>
          </S.UserInfo>
        </S.UserBox>
        <S.UserBox>
          <S.UserImg></S.UserImg>
          <S.UserInfo>
            <S.UserId>__frinedid__</S.UserId>
            <S.UserName>길동이</S.UserName>
          </S.UserInfo>
        </S.UserBox>
        <S.UserBox>
          <S.UserImg></S.UserImg>
          <S.UserInfo>
            <S.UserId>__frinedid__</S.UserId>
            <S.UserName>길동이</S.UserName>
          </S.UserInfo>
        </S.UserBox>
        <S.UserBox>
          <S.UserImg></S.UserImg>
          <S.UserInfo>
            <S.UserId>__frinedid__</S.UserId>
            <S.UserName>길동이</S.UserName>
          </S.UserInfo>
        </S.UserBox>
        {/* UI 테스트 */}
      </S.Wrapper>
    </>
  );
}
