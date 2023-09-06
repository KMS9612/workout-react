import { TextField } from "@mui/material";
import * as S from "../../../style/components/common/control/widget.module";

export default function WidgetFinder() {
  return (
    <S.Wrapper>
      <S.FinderTitle>
        <span>위젯 파인더</span>
        <span>Close</span>
      </S.FinderTitle>

      <S.FinderContents></S.FinderContents>
      <TextField label="찾으실 위젯을 검색하세요!"></TextField>
    </S.Wrapper>
  );
}
