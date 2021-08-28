import {
  Box,
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
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
}));

const Signup = () => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  let history = useHistory();
  const onSubmit = (data) => {
    if (data.length !== 0) {
      history.push("/success");
    }
  };
  return (
    <div className={classes.main}>
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.linkcolor}>
            Register
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
                    minLength: {
                      value: 6,
                      message: "Username must be atleast 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message:
                        "Username must be less than or equal to 20 characters",
                    },
                    pattern: {
                      value: /^\S*$/,
                      message: "No whitespaces",
                    },
                  }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      autoComplete="uname"
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
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Email required!",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "You must provide a valid email address!",
                    },
                  }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Email Address"
                      name="email"
                      autoComplete="off"
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
              <Box>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Password required!",
                    minLength: {
                      value: 8,
                      message: "Your password must be minimum of 8 characters",
                    },
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
                      type="password"
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
            <Button
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Box>
              <Box>
                <Link to="/" variant="body2" className={classes.linkcolor}>
                  Already have an account?
                </Link>
              </Box>
            </Box>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
