import {
  TextField,
  Button,
  CircularProgress,
  Backdrop,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../services/appApi";

// import google from "../static/google.png";

import "../style/Signup.css";
import { VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material";
import { BootstrapTooltip } from "../components/Navbar";

const Login = () => {
  const [loginInputIndex, setLoginInputIndex] = useState("");
  const [loginInputPassword, setLoginInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [response, setResponse] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [isError, setIsError] = useState(false);

  const [loginFunction] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (loginInputIndex === "" || loginInputPassword === "") {
      setIsError(true);
      setAlertMessage("Fields can not be empty!");
      setResponse(true);
      return;
    }
    setDisableSubmit(true);
    loginFunction({
      index: loginInputIndex,
      password: loginInputPassword,
    }).then(async ({ data, error }) => {
      if (error) {
        setIsError(true);
        setAlertMessage(error.data);
        setResponse(true);
        setDisableSubmit(false);
      } else {
        localStorage.setItem("token", data.token);
        navigate(window.location.pathname !== "/CodeStudy/login" ? window.location.href.substring(window.origin.length) : "/CodeStudy");
      }
    });
  };

  return (
    <div className="signup-outer">
      <Backdrop
        className="backdrop-dialog"
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={response}
        onClick={() => {
          setDisableSubmit(false);
          setResponse(false);
          setAlertMessage("");
        }}
      >
        <Alert
          className="response-dialog"
          style={{
            display: response ? "flex" : "none",
            color: isError ? "red" : "green",
          }}
          severity={isError ? "error" : "success"}
        >
          {alertMessage}
        </Alert>
      </Backdrop>
      <div className="login-wrapper">
        <div className="flex-center-wrapper row-gap-2">
          {/* <div className="company-title">
            <img id="company-logo" src={google} alt="GoogleLogo" />
          </div> */}
          <div className="company-title">CodeStudy</div>
          <div className="page-title">Sign in</div>
          <div className="signup-form">
            <div className="input-item">
              <TextField
                id="login-input-email"
                className="custom-input-field"
                value={loginInputIndex}
                onChange={(e) => setLoginInputIndex(e.target.value)}
                type="email"
                required
                variant="outlined"
                label="Username/Email"
                margin="dense"
                autoComplete="off"
                autoFocus={true}
              />
            </div>
            <div className="input-item">
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                value={loginInputPassword}
                onChange={(e) => setLoginInputPassword(e.target.value)}
                id="login-input-password"
                className="custom-input-field"
                required
                variant="outlined"
                margin="dense"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <BootstrapTooltip placement="top" title={showPassword ? "Hide" : "Show"}>
                        <IconButton
                          onClick={() => setShowPassword((state) => !state)}
                        >
                          {showPassword ? (
                            <VisibilityOffRounded />
                          ) : (
                            <VisibilityRounded />
                          )}
                        </IconButton>
                      </BootstrapTooltip>
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div className="forgot-password-outer">
              <Button
                onClick={() => navigate("/CodeStudy/forgot?index=password")}
              >
                Forgot password?
              </Button>
            </div>

            <div className="button-group">
              <Button
                onClick={() => navigate("/CodeStudy/signup")}
                variant="text"
              >
                Sign up
              </Button>
              <Button
                onClick={handleLogin}
                variant="contained"
                disableElevation
                disabled={disableSubmit}
              >
                {disableSubmit ? (
                  <CircularProgress style={{ width: "20px", height: "20px" }} />
                ) : (
                  "Sign in"
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;