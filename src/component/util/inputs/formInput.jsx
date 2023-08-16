import * as S from "./formInput.module.js";

export default function FormInput(props) {
  const onChangeSaveValue = (event) => {
    if (props.type === "email") {
      props.setEmail(event.currentTarget.value);
      console.log("email", event.currentTarget.value);
    }
    if (props.type === "password") {
      props.setPassword(event.currentTarget.value);
      console.log("password", event.currentTarget.value);
    }
  };
  return (
    <>
      <S.FormInput
        type={props.type}
        className="login_input"
        placeholder={props.PH}
        onChange={onChangeSaveValue}
      />
    </>
  );
}
