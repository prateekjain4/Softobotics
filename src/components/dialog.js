import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function FormDialog() {
  const [open, setOpen] = React.useState(true);
  const today = new Date();
  const classes = useStyles();
  const total = [
    { value: "1", label: "ONE" },
    { value: "2", label: "TWO" },
    { value: "3", label: "THREE" },
    { value: "4", label: "FOUR" }
  ];
  const [totaltickets, settotaltickets] = useState(1);
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const handleClose = () => {
    setOpen(false);
    window.location.reload(true);
  };

  const bookTicket = () => {
    if (date === "" || time === "" || totaltickets === "") {
      alert("please fill all fields");
    } else {
      var totalamount = parseInt(200) * parseInt(totaltickets);
      var gst = totalamount * 18 / 100;
      var amountwithgst = totalamount + gst;
      setOpen(false);
      alert("Total Amount " + amountwithgst);
      window.location.reload(true);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book Your Ticket Now !</DialogTitle>
        <DialogContent>
          <DialogContentText />
          <TextField
            id="time"
            type="date"
            min={today}
            className={classes.textField}
            InputLabelProps={{ shrink: true }}
            inputProps={{ step: 300 }} // 5 min}
            value={date}
            onChange={e => setdate(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="time"
            type="time"
            value={time}
            onChange={e => settime(e.target.value)}
            className={classes.textField}
            InputLabelProps={{ shrink: true }}
            inputProps={{ step: 300 } // 5 min
            }
          />
          <br />
          <br />
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={totaltickets}
            onChange={e => settotaltickets(e.target.value)}
            helperText="Please select total tickets !"
          >
            {total.map(option =>
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            )}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={bookTicket}>Book Now</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
