import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function CheckDeleteRoutine(props) {
  const handleClose = () => {
    props.setIsOpen(false);
  };

  return (
    <Dialog open={props.isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title" sx={{ fontWeight: 700 }}>
        루틴 삭제
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <b>{props.el.routine_title}</b>을 삭제하시겠습니까?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        <Button onClick={() => props.deleteRoutine(props.el)}>확인</Button>
      </DialogActions>
    </Dialog>
  );
}
