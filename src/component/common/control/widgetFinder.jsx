import { Autocomplete, TextField } from "@mui/material";
import * as S from "../../../style/components/common/control/widget.module";
import { useEffect, useState } from "react";

export default function WidgetFinder(props) {
  const [boxesArray, setBoxesArray] = useState([]);
  const [clickedComp, setClickedComp] = useState(null);
  useEffect(() => {
    setBoxesArray(Object.values(props.widgetData));
  }, []);
  // box 배열로 만들기

  const onChangeWidget = (event, value) => {
    // Find the box with the selected component name
    const selectedBox = boxesArray.find((box) => box.component === value);
    // If found, change its isOpen property to true
    if (selectedBox) {
      selectedBox.isOpen = selectedBox.isOpen === true ? false : true;
      let newObj = Object.assign({}, selectedBox);
      setClickedComp(value);

      // You might want to lift this state up or do something else with it.
      props.setBoxes(newObj);
    }
  };
  return (
    <S.Wrapper style={{}}>
      <S.FinderTitle>
        <span>위젯 파인더</span>
        <span>Close</span>
      </S.FinderTitle>

      <S.FinderContents>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={boxesArray.map((el) => el.component)}
          sx={{ width: 280 }}
          onChange={onChangeWidget}
          renderInput={(params) => (
            <TextField {...params} label="위젯을 검색하세요" />
          )}
        />
      </S.FinderContents>
    </S.Wrapper>
  );
}
