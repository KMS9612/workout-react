import * as S from "./formInput.module.js";

export default function FormInput(props) {
  return (
    <>
      <S.FormInput
        type={props.type}
        className="login_input"
        placeholder={props.PH}
        onChange={props.checkEmail}
      />
    </>
  );
}
