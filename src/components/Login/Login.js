import {
  Box,
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "aliceblue",
    },
    "& .MuiInputBase-root": {
      color: "aliceblue",
    },
    color: "aliceblue",
    "&$checked": {
      color: "aliceblue",
    },
  },
  textField__label: {
    color: "aliceblue !important",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#111",
  },
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkcolor: {
    color: "aliceblue",
  },
  checked: {},
}));

const Login = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);
  const { handleSubmit, control } = useForm();

  const handleClick = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  const onSubmit = (data) => {
    if (data.length !== 0) {
      window.location.href = "https://prakash64-media.netlify.app/home";
    }
  };
  return (
    <div className={classes.main}>
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.linkcolor}>
            Login
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Box pb={2}>
                <Controller
                  name="userName"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Username required!",
                  }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      autoComplete="off"
                      name="userName"
                      variant="outlined"
                      fullWidth
                      label="User Name"
                      autoFocus
                      error={!!error}
                      helperText={error ? error.message : null}
                      onChange={onChange}
                      value={value}
                      InputLabelProps={{ className: classes.textField__label }}
                      className={classes.root}
                    />
                  )}
                />
              </Box>

              <Box pb={2}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Password required!",
                  }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      fullWidth
                      name="password"
                      label="Password"
                      type={clicked ? "text" : "password"}
                      error={!!error}
                      helperText={error ? error.message : null}
                      onChange={onChange}
                      value={value}
                      autoComplete="current-password"
                      InputLabelProps={{ className: classes.textField__label }}
                      className={classes.root}
                    />
                  )}
                />
              </Box>
            </Box>
            <FormControlLabel
              control={
                <Checkbox
                  value="Show"
                  className={classes.root}
                  onClick={handleClick}
                />
              }
              label="Show Password"
              className={classes.textField__label}
            />
            <Button
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              className={classes.submit}
            >
              Login
            </Button>
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Link
                  to="/signup"
                  variant="body2"
                  className={classes.linkcolor}
                >
                  Don't have an account?
                </Link>
              </Box>
              <Box>
                <Link
                  to="/forgot"
                  variant="body2"
                  className={classes.linkcolor}
                >
                  Forgot Password?
                </Link>
              </Box>
            </Box>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
