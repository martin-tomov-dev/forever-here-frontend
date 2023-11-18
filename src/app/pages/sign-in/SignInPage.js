import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { lighten } from "@mui/material/styles";
import { useCallback, useState } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../../configs/AxiosConfig";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../../store/forever/authSlice";
import { useEffect } from "react";

const Root = styled("div")(({ theme }) => ({
  input: {
    textIndent: "20px",
    backdropFilter: "blur(50px)",
    background:
      "linear-gradient(116.79deg,hsla(0,0%,100%,.48),hsla(0,0%,100%,.12) 99.45%)",
    border: "2px solid hsla(0,0%,100%,.48)",
    borderRadius: "30px",
    width: "100%",
    height: "47px",
    color: "white",
    outline: "none",
  },
}));

function SignInPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const signInState = useSelector(selectAuthState)

  const { isSuccess, isError, message } = useSelector(
    (state) => state.forever.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isError) {
      console.log("error");
      // toast.error(message);
    } else if (isSuccess) {
      // toast.success("Welcome Back!");
      console.log("start");

      navigate("/create-profile");
    }
    // dispatch(authReset());
  }, [isSuccess, isError, message, history, dispatch]);

  const signin = useCallback(async () => {
    const userData = { email, password };
    dispatch(authLogin(userData));
  }, [email, password]);

  return (
    <Root>
      <div className="h-screen flex items-center justify-center">
        <Box
          className="m-16 md:my-32 w-full md:w-960 h-auto flex flex-col items-center justify-center p-16 pb-32 rounded-12 text-white"
          sx={{
            backgroundColor: (theme) =>
              lighten(theme.palette.primary.dark, 0.1),
          }}
        >
          <div className="w-full flex flex-col items-center justify-center">
            <a href="/">
              <img
                className="max-w-280"
                src="/assets/images/apps/home/logo.png"
              />
            </a>
            <div className="w-full text-center">
              <Typography className="text-20 md:text-24">Sign in</Typography>
              <Typography className="text-base py-8">
                Don't have an account? <a href="/sign-up">Sign up</a>
              </Typography>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full md:w-1/2 grid md:grid-cols-3 items-center pt-16 px-0 md:px-16">
              <div className="hidden md:block md:col-span-1 text-left pl-0">
                Email
              </div>
              <div className="md:col-span-2">
                <input
                  id="email"
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 grid md:grid-cols-3 items-center pt-16 px-0 md:px-16">
              <div className="hidden md:block md:col-span-1 text-left pl-0">
                Password
              </div>
              <div className="md:col-span-2">
                <input
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 pt-32 text-center px-0 md:px-16">
              <Button
                className="w-full"
                variant="contained"
                color="secondary"
                onClick={() => signin()}
              >
                <span className="mx-8">Get started</span>
              </Button>
            </div>
            <div className="w-full pt-16 text-center">
              <Typography className="text-14 text-white">
                <a href="#">Terms & Conditions</a> by opening your account you
                are agreeing to our Terms & Conditions
              </Typography>
            </div>
          </div>
        </Box>
      </div>
    </Root>
  );
}

export default SignInPage;
