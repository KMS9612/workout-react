import * as S from "../../../style/components/util/loading/entry_loading.module";

export default function EntryLoading() {
  return (
    <S.LoadingContainer>
      <S.LoadingText>Workout</S.LoadingText>
      <S.LoadingWave />
    </S.LoadingContainer>
  );
}
