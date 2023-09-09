import WidgetFinder from "../component/common/control/widgetFinder";
import * as S from "../style/page/control.module";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import update from "immutability-helper";
import { ItemTypes } from "../component/common/control/ITEM_TYPE";
import ExerciseForm from "../component/common/routine/exerciseForm";
import ExerciseList from "../component/common/routine/exerciseList";

export default function ControlRoom() {
  // 공식 홈페이지 코드.
  const [boxes, setBoxes] = useState({
    a: { top: 180, left: 20, component: "ExerciseForm" },
    b: { top: 180, left: 20, component: "ExerciseList" },
  });
  const components = {
    ExerciseForm: ExerciseForm,
    ExerciseList: ExerciseList,
  };

  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [boxes, setBoxes]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  console.log(typeof components["ExerciseForm"]);

  return (
    <S.Wrapper ref={drop}>
      <WidgetFinder id={"widget_finder_1"} initialPosition={{ top: 0, left: 0 }} />
      {Object.keys(boxes).map((key) => {
        const { left, top, component } = boxes[key];
        const ComponentToRender = components[component];
        return <ComponentToRender key={key} id={key} left={left} top={top} iswidget={true}></ComponentToRender>;
      })}
    </S.Wrapper>
  );
}
