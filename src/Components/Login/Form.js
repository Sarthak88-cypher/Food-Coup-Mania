import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    width: "100%",
    display: "flex",
    padding: "20px",
    maxWidth: "500px",
    boxShadow: "0px 16px 64px rgb(3 23 111 / 10%)",
    borderRadius: "24px",
    flexDirection: "column",
    backgroundColor: "#fff",
    margin: "0 auto",
  },
  txtInput: {
    boxShadow: "0px 16px 64px rgb(3 23 111 / 10%)",
    borderRadius: "24px",
    margin: "20px 0px",
  },
  formControlSelect: {
    boxShadow: "0px 16px 64px rgb(3 23 111 / 10%)",
    borderRadius: "24px",
    margin: "20px 0px",
  },
  signInBtn: {
    boxShadow: "0px 16px 64px rgb(3 23 111 / 10%)",
    borderRadius: "24px",
    margin: "20px 0px",
    height: "60px",
    fontSize: "20px",
    fontFamily: "Pacifico",
  },
  heading: {
    marginBottom: "10px",
    fontSize: "40px",
    fontFamily: "Pacifico",
    fontStyle: "Italic",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const { setUserDetails, setPage } = props;
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [yourCuisine, setYourCuisine] = React.useState("");

  const handleChange = (event) => {
    setYourCuisine(event.target.value);
  };

  // if valid Username & Password & yourCuisine is available then it stores them to userDetails state variable and sets the page to yourCuisine page.
  const SignIn = () => {
    const DataToStore = { Username, Password, yourCuisine };
    if (Username && Password && yourCuisine) {
      setUserDetails((preVal) => {
        return [...preVal, DataToStore];
      });
      setUsername("");
      setPassword("");
      setYourCuisine("");
      setPage(2);
    } else {
      alert("fill the values");
    }
  };

  return (
    <div className={classes.formWrapper}>
      <h1 className={classes.heading}> Sign In </h1>
      <TextField
        className={classes.txtInput}
        id="standard-username-input"
        variant="outlined"
        label="Username"
        type="text"
        autoComplete="current-username"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        className={classes.txtInput}
        variant="outlined"
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormControl variant="outlined" className={classes.formControlSelect}>
        <InputLabel id="demo-simple-select-outlined-label">Cuisine</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={yourCuisine}
          onChange={handleChange}
          label="Cuisine"
        >
          <MenuItem value={"Indian"}>Indian</MenuItem>
          <MenuItem value={"Italian"}>Italian</MenuItem>
          <MenuItem value={"American"}>American</MenuItem>
        </Select>
      </FormControl>
      <Button
        onClick={SignIn}
        className={classes.signInBtn}
        variant="contained"
        color="secondary"
      >
        Sign In
      </Button>
    </div>
  );
};
Login.propTypes = {
  setUserDetails: PropTypes.any,
  setPage: PropTypes.any,
};
export default Login;
