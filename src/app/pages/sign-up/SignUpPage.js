import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Radio } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { API_ENDPOINT } from "../../configs/AxiosConfig";
import { styled } from "@mui/material/styles";
import { lighten } from "@mui/material/styles";
import { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Root = styled("div")(({ theme }) => ({
  input: {
    textIndent: "20px",
    backdropFilter: "blur(50px)",
    background:
      "linear-gradient(116.79deg,hsla(0,0%,100%,.38),hsla(0,0%,100%,.12) 99.45%)",
    border: "1px solid hsla(0,0%,100%,.48)",
    borderRadius: "30px",
    width: "100%",
    height: "47px",
    color: "white",
    outline: "none",
  },
}));

function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [placeBirth, setPlaceBirth] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [datePassing, setDatePassing] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback(async () => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = {
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      date_birth: dateBirth,
      date_passing: datePassing,
      place_birth: placeBirth,
      mobile_number: mobileNumber,
      email: email,
      password: password,
      user_type: "user",
    };

    console.log("data---------->", data, options);

    try {
      await axios.post(`${API_ENDPOINT}/api/register`, data);
      navigate("/sign-in");
    } catch (error) {
      alert(error.response.data.message);
    }
  }, [firstName, lastName, email, password]);

  return (
    <Root>
      <div className="flex items-center justify-center">
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
              <Typography className="text-20 md:text-24">
                Create your Forever Here Account
              </Typography>
              <Typography className="text-base py-8">
                Already have an account? <a href="/sign-in">Sign in</a>
              </Typography>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center px-0 md:px-16">
            <div className="w-full md:w-1/2 grid md:grid-cols-3 items-center pt-16 px-0 md:px-16">
              <div className="hidden md:block md:col-span-1 text-left pl-0">
                First Name
              </div>
              <div className="md:col-span-2">
                <input
                  className=""
                  id="first_name"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 grid md:grid-cols-3 items-center pt-16 px-0 md:px-16">
              <div className="hidden md:block md:col-span-1 text-left pl-0">
                Middle Name
              </div>
              <div className="md:col-span-2">
                <input
                  id="middle_name"
                  type="text"
                  placeholder="Middle Name"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 grid md:grid-cols-3 items-center pt-16 px-0 md:px-16">
              <div className="hidden md:block md:col-span-1 text-left pl-0">
                Last Name
              </div>
              <div className="md:col-span-2">
                <input
                  id="last_name"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row pt-16">
              <div className="w-full md:w-1/2 grid md:grid-cols-3 items-center px-0 md:px-16">
                <div className="hidden md:block md:col-span-1 text-left pl-0">
                  Place of Birth
                </div>
                <div className="md:col-span-2">
                  <input
                    id="place_of_birth"
                    type="text"
                    placeholder="Place of Birth"
                    value={placeBirth}
                    onChange={(e) => setPlaceBirth(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 grid md:grid-cols-3 items-center pt-16 md:pt-0 px-0 md:px-16">
                <div className="hidden md:block md:col-span-1 text-left pl-0">
                  Date of Birth
                </div>
                <div className="md:col-span-2">
                  <input
                    id="date_of_birth"
                    type="text"
                    placeholder="MM/DD/YYYY"
                    value={dateBirth}
                    onChange={(e) => setDateBirth(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row pt-16">
              <div className="w-full md:w-1/2 grid md:grid-cols-3 items-center px-0 md:px-16">
                <div className="hidden md:block md:col-span-1 text-left pl-0">
                  Date of Passing
                </div>
                <div className="md:col-span-2">
                  <input
                    id="date_of_passing"
                    type="text"
                    placeholder="MM/DD/YYYY"
                    value={datePassing}
                    onChange={(e) => setDatePassing(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 grid md:grid-cols-3 items-center pt-16 md:pt-0 px-0 md:px-16">
                <div className="hidden md:block md:col-span-1 text-left pl-0">
                  Email
                </div>
                <div className="md:col-span-2">
                  <input
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row pt-16">
              <div className="w-full md:w-1/2 grid md:grid-cols-3 items-center px-0 md:px-16">
                <div className="hidden md:block md:col-span-1 text-left pl-0">
                  Mobile Number
                </div>
                <div className="md:col-span-2">
                  <input
                    id="mobile_number"
                    type="text"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 grid md:grid-cols-3 items-center pt-16 md:pt-0 px-0 md:px-16 px-0 md:px-16">
                <div className="hidden md:block md:col-span-1 text-left pl-0">
                  Password
                </div>
                <div className="md:col-span-2">
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row justify-center items-center pt-10">
              <div className="hidden md:block md:col-span-1 text-left pl-0">
                This profile is for
              </div>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-form-control-label-placement"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="myself"
                    control={<Radio />}
                    label="Myself"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="someone"
                    control={<Radio />}
                    label="Someone Else"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="w-full pt-10 text-center">
              <Button
                className="w-full md:w-1/2"
                variant="contained"
                color="secondary"
                onClick={() => handleSubmit()}
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

export default SignUpPage;
