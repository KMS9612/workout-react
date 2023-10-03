import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function WelcomeDialog(props) {
  const handleClose = () => {
    props.setIsFirst(false);
  };
  return (
    <Dialog open={props.isOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle>환영합니다!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">마우스를 위로 올려서 네비게이션 버튼을 클릭해보세요!</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          네! 알겠습니다.
        </Button>
      </DialogActions>
    </Dialog>
  );
}
