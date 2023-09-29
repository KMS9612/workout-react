import { Dialog, DialogTitle, List, ListItem } from "@mui/material";

export default function ErrorDialog(props) {
  const handleClose = () => {
    props.setIsOpen(false);
  };
  return (
    <Dialog onClose={handleClose} open={props.isOpen}>
      <DialogTitle sx={{ color: "red " }}>Error!!</DialogTitle>
      <List>
        <ListItem>{props.err_msg}</ListItem>
      </List>
    </Dialog>
  );
}
