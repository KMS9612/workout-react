import { Button, Divider, Stack } from "@mui/material";
import * as S from "../../../style/components/common/routine/exerciseForm.module";

export default function ExerciseForm() {
  return (
    <S.ExerciseWrapper>
      <S.ExerciseFormBox>
        <S.ExerciseFormText>운동 등록</S.ExerciseFormText>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <S.ExerciseInput
            variant="outlined"
            label="등록할 운동을 입력 해 주세요"
          />
          <S.ExerciseInput
            variant="outlined"
            label="운동의 타입을 입력 해 주세요 (EX. 등, 가슴, 하체)"
          />
          <Button variant="contained">등록하기</Button>
        </Stack>
      </S.ExerciseFormBox>
    </S.ExerciseWrapper>
  );
}
