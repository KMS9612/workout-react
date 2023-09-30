import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import * as S from "../../../style/components/util/modals/login_alert.moduel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 200,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

export default function LoginAlert(props) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.modalOpen}
        onClose={() => props.handleModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={props.modalOpen}>
          <Box sx={style}>
            <S.LoginAlertTitle id="transition-modal-title" variant="h6" component="h5">
              {props.modalTitle}
            </S.LoginAlertTitle>
            <S.LoginAlertMessage id="transition-modal-description" sx={{ mt: 2 }}>
              {props.modalMessage}
            </S.LoginAlertMessage>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
