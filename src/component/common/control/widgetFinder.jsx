import { Autocomplete, TextField } from "@mui/material";
import * as S from "../../../style/components/common/control/widget.module";

const WIDGET = [{ label: "Exercise Form" }];

export default function WidgetFinder() {
  return (
    <S.Wrapper style={{}}>
      <S.FinderTitle>
        <span>위젯 파인더</span>
        <span>Close</span>
      </S.FinderTitle>

      <S.FinderContents>
        <Autocomplete disablePortal id="combo-box-demo" options={WIDGET} sx={{ width: 280 }} renderInput={(params) => <TextField {...params} label="위젯을 검색하세요" />} />
      </S.FinderContents>
    </S.Wrapper>
  );
}
