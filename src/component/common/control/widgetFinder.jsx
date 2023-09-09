import { Autocomplete, TextField } from "@mui/material";
import * as S from "../../../style/components/common/control/widget.module";
import { useDrag } from "react-dnd";

const WIDGET = [{ label: "Exercise Form" }];

export default function WidgetFinder({ id, children }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      item: { id, type: "box" },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );
  return (
    <S.Wrapper ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <S.FinderTitle>
        <span>위젯 파인더</span>
        <span>Close</span>
      </S.FinderTitle>

      <S.FinderContents>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={WIDGET}
          sx={{ width: 280 }}
          renderInput={(params) => (
            <TextField {...params} label="위젯을 검색하세요" />
          )}
        />
      </S.FinderContents>
    </S.Wrapper>
  );
}
