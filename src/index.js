import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DicePage from "./pages/dice";
import RoutinePage from "./pages/routine";
import Layout from "./component/common/layout/layout";
import SignUp from "./pages/signup";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./emotion.theme";
import Loading from "./component/util/loading/loading";
import DashBoard from "./pages/dashboard";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Community 컴포넌트 lazy로딩을 위한 상수
const Community = lazy(() => import("./pages/community"));
// root render를 위한 상수
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet" />
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/routine" element={<RoutinePage />} />
              <Route path="/dice" element={<DicePage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/community" element={<Community />} />
              <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
          </Suspense>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
