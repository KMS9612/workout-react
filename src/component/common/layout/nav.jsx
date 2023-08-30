import * as S from "../../../style/components/common/layout/nav.module.js";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { DefaultLink } from "../../../style/components/util/Link/defaultLink.module.js";
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
    { to: "/routine", buttonName: "루틴관리", width: "100%", pBottom: "0" },
    { to: "/dice", buttonName: "타이머", width: "100%", pBottom: "0" },
    { to: "/community", buttonName: "커뮤니티", width: "100%", pBottom: "0" },
  ];

  const onClickRouter = () => {
    navigate("/dashboard");
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const navList = (anchor) => {
    return (
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
          padding: 2,
        }}
        role="dialog"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div style={{ marginBottom: "50px" }}>
          <S.Header1 onClick={onClickRouter}>Workout</S.Header1>
        </div>
        <S.ItemWrap>
          {navItems.map((el, index) => (
            <DefaultLink
              key={`${el.buttonName}-${new Date().getTime()}-${index}`}
              width={el.width}
              to={el.to}
            >
              <NavButton buttonName={el.buttonName}></NavButton>
            </DefaultLink>
          ))}
        </S.ItemWrap>
      </Box>
    );
  };

  return (
    <S.NavWrapper isOver={props.isOver}>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <S.HideNavButtons onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </S.HideNavButtons>
          <S.NavDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {navList(anchor)}
          </S.NavDrawer>
        </React.Fragment>
      ))}
    </S.NavWrapper>
  );
}
