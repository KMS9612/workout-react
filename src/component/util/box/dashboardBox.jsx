import * as S from "../../../style/components/util/box/dashboardBox.module";
import DashBoardItem from "../../common/dashboard_item/dashboard_item";

export default function DashBoardBox(props) {
  return (
    <S.BoxWrapper spacing={3}>
      <S.BoxTitle>{props.title}</S.BoxTitle>
      {props.contents_map.map((el, index) => (
        <DashBoardItem
          key={`${el}-${new Date().getTime()}-${index}`}
          contents={el.exercise_name || el.routine_name}
        ></DashBoardItem>
      ))}
    </S.BoxWrapper>
  );
}
