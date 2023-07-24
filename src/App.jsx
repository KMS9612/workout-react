import * as S from "./App.module.js";
import Login from "./pages/login";

function App() {
  return (
    <S.HomeWrapper>
      <S.LoginWrap>
        <Login />
      </S.LoginWrap>
    </S.HomeWrapper>
  );
}

export default App;
