import "./loginInput.css";

export default function LoginInput(props) {
  return (
    <>
      <label className="warning">
        {props.isEmail ? "" : "이메일 형식에 맞지 않습니다."}
      </label>
      <input
        type="email"
        className="login_input"
        placeholder="아이디를 입력해 주세요"
        onChange={props.checkEmail}
      />
    </>
  );
}
