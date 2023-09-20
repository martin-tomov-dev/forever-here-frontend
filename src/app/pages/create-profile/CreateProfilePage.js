import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import NavbarToggleButton from "../../components/Navbar/NavbarToggleButton";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { darken, lighten } from "@mui/material/styles";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useCallback } from "react";
import {
  foreverMessage,
  uploadAttachment,
} from "../../store/forever/userSlice";
import { userService } from "../../services/userService";
// import jwt from "jsonwebtoken";

const Root = styled("div")(({ theme }) => ({
  ".navbar-nav ul": {
    display: "flex",
    justifyContent: "right",
    listStyleType: "none",
    paddingRight: "6rem",
  },
  ".navbar-nav ul a": {
    color: "white",
    textDecoration: "none",
  },
  ".navbar-nav ul li": {
    border: "1px solid transparent",
    borderRadius: "3.2rem",
    padding: "0.8rem 2.4rem",
    cursor: "pointer",
  },
  ".navbar-nav ul li:hover": {
    backgroundColor: lighten(theme.palette.primary.dark, 0.1),
  },
  ".navbar-nav ul li.btn-login": {
    borderColor: "#e4e0d8",
    marginLeft: "2rem",
  },
  ".navbar-nav ul li.btn-login:hover": {
    backgroundColor: lighten(theme.palette.primary.dark, 0.1),
    borderColor: "transparent",
  },
  ".navbar-nav ul li.btn-register": {
    backgroundColor: theme.palette.secondary.main,
    marginLeft: "2rem",
  },
  ".navbar-nav .btn-register:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
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
    display: "flex",
    alignItems: "center",
  },
  textarea: {
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

const backgroundPosition = "100%";

function CreateProfilePage() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const [submitLoading, setSubmitLoading] = useState(false);
  const { isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.forever.user
  );
  const authData = useSelector((state) => state.forever.auth);

  const sendMessage = useCallback(async () => {
    console.log("date", date);

    let formData = new FormData();
    console.log("selected file", selectedFile);

    formData.append("file", selectedFile);
    formData.append("fileName", selectedFile.name);
    // const decodedToken = jwt.decode(authData.authToken);
    setSubmitLoading(true);
    const response = await userService.uploadPicture(formData);
    setSubmitLoading(false);
    const data = {
      email: email,
      phone_number: phone,
      message: textMessage,
      subject: subject,
      name: name,
      date: date,
      link: response.data,
    };

    dispatch(foreverMessage(data));
  }, [email, phone, textMessage, subject, name, selectedFile]);

  useEffect(() => {
    console.log("auth token", authData.email);
    // if (isError) {
    //   // toast.error(message);
    //   // alert("error");
    // } else if (isSuccess) {
    //   alert("success");
    //   // toast.success("Welcome Back!");
    // }
    if (isLoading) {
      setSubmitLoading(true);
    } else {
      setSubmitLoading(false);
    }
    // dispatch(authReset());
  }, [isSuccess, isError, message, history, isLoading, dispatch]);

  return (
    <Root>
      <Box
        className="w-full h-[800px]"
        sx={{
          background: (theme) => `#00453F`,
          backgroundSize: "cover",
          backgroundPosition,
        }}
      >
        {isMobile ? (
          <Box className="navbar-nav absolute w-full flex justify-end px-24 py-16">
            <NavbarToggleButton />
          </Box>
        ) : (
          <Box className="navbar-nav absolute w-full p-24">
            <ul>
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/about-us">
                <li>About Us</li>
              </a>
              <a href="/features">
                <li>Features</li>
              </a>
              <a href="/pricing">
                <li>Pricing</li>
              </a>
              <a href="/affiliates">
                <li>Affiliates</li>
              </a>
              <a href="/forever-messages">
                <li>Forever Messages</li>
              </a>
              <a href="/sign-in">
                <li className="btn-login">
                  <LogoutIcon className="text-18 md:text-20" /> Log Out
                </li>
              </a>
              <a href="/sign-up">
                <li className="btn-register">
                  <PersonAddAltOutlinedIcon className="text-18 md:text-20" />{" "}
                  Sign up
                </li>
              </a>
            </ul>
          </Box>
        )}
        <div className="flex flex-col ">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            >
              <img
                className="ml-0"
                src="/assets/images/apps/home/logo.png"
                style={{ width: "250px", marginTop: "5px" }}
              />
            </motion.div>
          </div>
        </div>
        <div>
          <div className="px-20 w-[70%] ml-auto mr-auto">
            <h1 className="text-white font-bold text-3xl text-center py-10">
              Send a Forever Message
            </h1>
            <div className="flex gap-20">
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  style={{
                    background:
                      "linear-gradient(116.79deg,hsla(0,0%,100%,.48),hsla(0,0%,100%,.12) 99.45%)",
                  }}
                  className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 rounded-[47px] cursor-pointer"
                >
                  {selectedFile ? (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">
                          Uploaded ({selectedFile.name})
                        </span>
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                      </p>
                    </div>
                  )}
                  <input
                    id="dropzone-file"
                    type="file"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-20 mt-20">
              <input
                id="receiver"
                type="text"
                placeholder="Name of person receiving this message"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                id="schedule_time"
                type="date"
                className="pr-10"
                onChange={(e) => setDate(e.target.value)}
                placeholder="When would you like to send this message?"
              />
            </div>
            <textarea
              className="mt-20 h-[200px] px-8 py-16"
              id="text"
              placeholder="Your message"
              value={textMessage}
              onChange={(e) => setTextMessage(e.target.value)}
            ></textarea>
            <div className="flex gap-20 mt-20">
              <input
                id="email"
                type="text"
                placeholder="Email address for this message"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="mobile_number"
                type="text"
                placeholder="Mobile number for this message"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <Button
              className="w-full mt-20"
              variant="contained"
              color="secondary"
              onClick={() => sendMessage()}
            >
              {submitLoading && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-12 w-12 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}

              <span className="mx-8">Schedule a Message</span>
            </Button>
          </div>
        </div>
      </Box>
    </Root>
  );
}

export default CreateProfilePage;
