import * as S from "./formInput.module.js";

export default function FormInput(props) {
  const onChangeSaveValue = (event) => {
    if (props.type === "email") {
      props.setEmail(event.currentTarget.value);
    }
    if (props.type === "password") {
      props.setPassword(event.currentTarget.value);
    }
  };
  return (
    <>
      <S.FormInput
        variant="outlined"
        type={props.type}
        className="login_input"
        label={props.PH}
        onChange={onChangeSaveValue}
        onKeyDown={(key) => {
          if (key.code === "Enter") {
            props.onClickLogin();
          }
        }}
      />
    </>
  );
}
