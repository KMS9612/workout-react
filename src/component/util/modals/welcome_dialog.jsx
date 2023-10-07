import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";

export default function WelcomeDialog(props) {
  const handleClose = () => {
    props.setIsFirst(false);
  };
  return (
    <Dialog open={props.isOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle sx={{ fontWeight: 700 }}>환영합니다</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          화면 상단의 Top,Bottom,Left,Right버튼을 누르면
          <br />
          네비게이션메뉴가 나옵니다!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          네! 알겠습니다.
        </Button>
      </DialogActions>
    </Dialog>
  );
}
