import {
  Box,
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkcolor: {
    color: "aliceblue",
  },
  forgot: {
    color: "lightgreen",
  },
}));

const Forgot = () => {
  const classes = useStyles();

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    if (data.length !== 0) {
      window.location.href = "/success";
    }
  };
  return (
    <div className={classes.main}>
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h6"
            align="center"
            className={classes.forgot}
          >
            Enter your email address below and we'll send you a link to reset
            your password.
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Box>
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
              <Box textAlign="end">
                <Link to="/" className={classes.linkcolor}>
                  Go Back
                </Link>
              </Box>
            </Box>

            <Button
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              className={classes.submit}
            >
              Send Reset Link
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Forgot;
