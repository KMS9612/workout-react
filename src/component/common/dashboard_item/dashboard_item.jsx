import * as S from "../../../style/components/common/dashboard_item/dahsboard_item.module";

export default function DashBoardItem(props) {
  return (
    <S.DBoardWrapper>
      <S.DBoardAction>
        <S.DBoardContents>{props.contents}</S.DBoardContents>
      </S.DBoardAction>
    </S.DBoardWrapper>
  );
}
