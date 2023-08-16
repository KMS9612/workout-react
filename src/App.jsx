import { useEffect, useState } from "react";
import * as S from "./App.module.js";
import Login from "./pages/login";
import EntryLoading from "./component/util/loading/entry_loading.jsx";

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // 웹페이지 첫 진입시 로딩
  // if (isLoading) {
  //   localStorage.setItem("initialVisit", JSON.stringify(true));
  //   return <EntryLoading />;
  // } else {
  return (
    <S.HomeWrapper>
      <S.LoginWrap>
        <Login />
      </S.LoginWrap>
    </S.HomeWrapper>
  );
  // }
}

export default App;
