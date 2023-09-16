import { Autocomplete, TextField } from "@mui/material";
import * as S from "../../../style/components/common/control/widget.module";
import { useEffect, useState } from "react";

export default function WidgetFinder(props) {
  const [boxesArray, setBoxesArray] = useState([]);

  useEffect(() => {
    setBoxesArray(Object.values(props.widgetData));
  }, []);
  // box 배열로 만들기

  const onChangeWidget = (event, value) => {
    // 배열로 변경한 박스 객체에서 onChange된 아이템을 찾는다.
    const selectedBox = boxesArray.find((box) => box.component === value);

    // 찾았다면 widgetData를 깊은복사 한다.
    if (selectedBox) {
      let copiedObj = widgetObjectCopy(props.widgetData);

      // 깊은복사한 오브젝트내부에서 클릭된 컴포넌트를 기준으로 아이템을 찾고 변경.
      for (let key in copiedObj) {
        if (copiedObj[key].component === selectedBox.component) {
          copiedObj[key].isOpen = !copiedObj[key].isOpen;
        }
      }

      // 변경된 값을 props로 내려주는 setBoxes에 넣어준다.(리렌더링 발생)
      props.setBoxes(copiedObj);
      value = "";
    }
  };

  // 수정된 객체를 깊은복사하는 재귀함수
  const widgetObjectCopy = (obj) => {
    if (typeof obj !== "object" || obj === null) {
      return obj; // 원시 타입이거나 null일 경우 그대로 반환
    }

    // 객체인지 배열인지 판단.
    let copy = Array.isArray(obj) ? [] : {};

    // 재귀함수를 이용한 깊은복사
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = widgetObjectCopy(obj[key]);
      }
    }

    return copy;
  };

  return (
    <S.Wrapper style={{}}>
      <S.FinderTitle>
        <span>위젯 파인더</span>
        <span>Close</span>
      </S.FinderTitle>

      <S.FinderContents>
        <Autocomplete disablePortal id="combo-box-demo" options={boxesArray.map((el) => el.component)} sx={{ width: 280 }} onChange={onChangeWidget} renderInput={(params) => <TextField {...params} label="위젯을 검색하세요" />} />
      </S.FinderContents>
    </S.Wrapper>
  );
}
