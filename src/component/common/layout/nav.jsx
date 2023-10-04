import * as S from "../../../style/components/common/layout/nav.module.js";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import { Box } from "@mui/material";
import NavButton from "../../util/buttons/navbtn.jsx";

export default function Navigation(props) {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const navigate = useNavigate();

  const navItems = [
    { to: "/exercise", buttonName: "운동관리", width: "100%", pBottom: "0" },
    { to: "/dice", buttonName: "타이머", width: "100%", pBottom: "0" },
    { to: "/community", buttonName: "커뮤니티", width: "100%", pBottom: "0" },
    { to: "/control", buttonName: "컨트롤 룸", width: "100%", pBottom: "0" },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    props.onMouseLeave();
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const onClickNavigate = (path) => {
    navigate(path);
  };
  const navList = (anchor) => {
    return (
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        }}
        role="dialog"
        onClick={toggleDrawer(anchor, false)}>
        <div style={{ marginBottom: "50px", borderBottom: "1px solid #ccc" }}>
          <S.Header1 onClick={() => onClickNavigate("/dashboard")}>Workout</S.Header1>
        </div>
        <S.ItemWrap>
          {navItems.map((el, index) => (
            <NavButton key={`${el.buttonName}-${new Date().getTime()}-${index}`} buttonName={el.buttonName} onClick={() => onClickNavigate(el.to)}></NavButton>
          ))}
        </S.ItemWrap>
      </Box>
    );
  };

  return (
    <S.NavWrapper isOver={props.isOver}>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <S.HideNavButtons onClick={toggleDrawer(anchor, true)}>{anchor}</S.HideNavButtons>
          <S.NavDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {navList(anchor)}
          </S.NavDrawer>
        </React.Fragment>
      ))}
    </S.NavWrapper>
  );
}
