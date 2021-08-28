import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, Button, TextField } from "@material-ui/core";

import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "aliceblue",
    },
    "& .MuiInputBase-root": {
      color: "aliceblue",
    },
  },
  textField__label: {
    color: "aliceblue !important",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#111",
    width: "100%",
    height: "100%",
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(6),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
}));

export default function Comment(props) {
  const classes = useStyles();
  const [item, setItem] = useState([]);
  const [open, setOpen] = useState(false);
  const { handleSubmit, control } = useForm();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = (data) => {
    data.date = Date();
    data.pname = "Anonymous";
    setItem(data);
    setOpen(false);
  };
  useEffect(() => {
    props.changeData(item);
    // eslint-disable-next-line
  }, [item]);
  return (
    <div>
      <Box className={classes.button}>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          onClick={handleOpen}
        >
          Enter Comment
        </Button>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <Box pb={2}>
                  <Controller
                    name="topic"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Topic required!",
                      minLength: {
                        value: 8,
                        message: "Your topic must atleast 8 characters",
                      },
                      maxLength: {
                        value: 80,
                        message: "Your topic must be maximum of 80 characters",
                      },
                    }}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        autoComplete="off"
                        name="topic"
                        variant="outlined"
                        fullWidth
                        label="Topic"
                        autoFocus
                        error={!!error}
                        helperText={error ? error.message : null}
                        onChange={onChange}
                        value={value}
                        InputLabelProps={{
                          className: classes.textField__label,
                        }}
                        className={classes.root}
                      />
                    )}
                  />
                </Box>
                <Box>
                  <Controller
                    name="comment"
                    control={control}
                    rules={{
                      required: "Comment required!",
                      minLength: {
                        value: 8,
                        message: "Your comment must be atleast 8 characters",
                      },
                    }}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        placeholder="Type comment here..."
                        multiline
                        fullWidth
                        variant="outlined"
                        error={!!error}
                        helperText={error ? error.message : null}
                        onChange={onChange}
                        value={value}
                        minRows={4}
                        maxRows={14}
                        InputLabelProps={{
                          className: classes.textField__label,
                        }}
                        className={classes.root}
                      />
                    )}
                  />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    className={classes.submit}
                  >
                    Post
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.submit}
                    onClick={handleClose}
                  >
                    Cancel / Close
                  </Button>
                </Box>
              </Box>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
