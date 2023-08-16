import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import NavbarToggleButton from "../../components/Navbar/NavbarToggleButton";
import PropTypes from "prop-types";
import { darken, lighten } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useState } from "react";

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
}));
const headerBackground = "/assets/images/apps/home/profile-background.png";
const headerDescription =
  "Forever Here is an online memorial tribute where you can grow the legacy of your loved ones or begin your own story. Your photographs, kind words and videos all in one place, forever.";
const backgroundPosition = "100%";
const showHeaderButton = true;
const headerTitle = "";

function Profile() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const [section, setSection] = useState("1");

  const changeSections = (sectionNumber) => {
    setSection(sectionNumber);
  };

  return (
    <Root>
      <Box
        className="w-full h-640"
        sx={{
          background: (theme) =>
            `linear-gradient(0deg, ${theme.palette.primary.dark}99, ${theme.palette.primary.dark}99), url(${headerBackground}) no-repeat`,
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
                  <LoginIcon className="text-18 md:text-20" /> Sign in
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
        <div className="h-full flex flex-col">
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
          <h1 className="text-white text-center drop-shadow-md">
            SYDNEY HOOFER
          </h1>
          <div className="flex flex-row">
            <div className="flex-1 flex flex-col justify-between">
              <div className="w-full" style={{ height: "44px" }}></div>
              <div className="mt-auto mb-auto">
                <p className="text-center text-white">26th of March</p>
                <div className="flex flex-row py-5">
                  <h1
                    className="text-white text-right"
                    style={{ marginLeft: "50%" }}
                  >
                    1939
                  </h1>
                  <div className="px-10 flex items-center w-full">
                    <img
                      className="ml-0"
                      src="/assets/images/apps/home/line-horizontal.png"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <p className="text-white text-center">
                  Sheffield, United Kingdom
                </p>
              </div>

              <button
                style={{ width: "30%" }}
                className="bg-[#3E716C] ml-auto mr-auto text-white px-16 py-10 rounded-3xl border-2 border-transparent border-white"
              >
                Donation
              </button>
            </div>
            <div className="mt-10">
              <div className="ml-auto mr-auto p-10 bg-[#00453F]">
                <img
                  style={{ width: "400px" }}
                  className="ml-auto mr-auto "
                  src="/assets/images/apps/home/profile.png"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="w-full" style={{ height: "128px" }}></div>

              <div className="mt-auto mb-auto">
                <p className="text-white text-center">18th of July</p>
                <div className="flex flex-row">
                  <div
                    className="px-10 flex items-center"
                    style={{ width: "45%" }}
                  >
                    <img
                      className="ml-0 w-full"
                      src="/assets/images/apps/home/line-horizontal.png"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <h1 className="text-white flex-1">2022</h1>
                </div>
              </div>
              <div className="">
                <p className="text-center text-white">Favourite Song</p>
                <div
                  className="flex flex-row bg-white w-1/2 mt-1 rounded-12 ml-auto mr-auto p-5"
                  style={{ height: "40px" }}
                >
                  <p className="text-center flex-1 font-bold flex items-center justify-center">
                    The Entertainer - Scott Joplin
                  </p>
                  <img
                    style={{ width: "10%", minWidth: "30px" }}
                    src="/assets/images/apps/home/song-entainer.png"
                  />
                </div>
                <div className="flex flex-row w-1/2 ml-auto mr-auto mt-10 py-16 rounded-12 bg-white justify-between">
                  <button className="flex flex-row w-1/3 justify-center">
                    <img src="/assets/images/apps/home/arrow-left.png" />
                    <img src="/assets/images/apps/home/arrow-left.png" />
                  </button>
                  <button className="flex flex-row w-1/3 gap-10 justify-center">
                    <img src="/assets/images/apps/home/pause.png" />
                    <img src="/assets/images/apps/home/pause.png" />
                  </button>
                  <button className="flex flex-row w-1/3 justify-center">
                    <img src="/assets/images/apps/home/arrow-right-icon.png" />
                    <img src="/assets/images/apps/home/arrow-right-icon.png" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full flex flex-row justify-center items-center gap-20">
            <p className="text-white">Click to show your love</p>
            <div className="relative flex flex-row">
              <p
                className="text-white absolute"
                style={{ left: "23px", top: "10px" }}
              >
                1
              </p>
              <img src="/assets/icons/love-icon.png" />
            </div>
            <img src="/assets/icons/group.png" />
            <img src="/assets/icons/facebook.png" />
          </div>
        </div>
      </Box>
      <ul className="flex flex-row ol-none bg-[#00453F]">
        <li
          className={
            section === "1"
              ? "text-white w-1/4 py-16 flex justify-center font-bold cursor-pointer"
              : "text-white w-1/4 py-16 flex justify-center cursor-pointer"
          }
          onClick={() => changeSections("1")}
        >
          Obituary
        </li>
        <li
          className={
            section === "2"
              ? "text-white w-1/4 py-16 flex justify-center font-bold cursor-pointer"
              : "text-white w-1/4 py-16 flex justify-center cursor-pointer"
          }
          onClick={() => changeSections("2")}
        >
          Photos & Video
        </li>
        <li
          className={
            section === "3"
              ? "text-white w-1/4 py-16 flex justify-center font-bold cursor-pointer"
              : "text-white w-1/4 py-16 flex justify-center cursor-pointer"
          }
          onClick={() => changeSections("3")}
        >
          Comments Book
        </li>
        <li
          className={
            section === "4"
              ? "text-white w-1/4 py-16 flex justify-center font-bold cursor-pointer"
              : "text-white w-1/4 py-16 flex justify-center cursor-pointer"
          }
          onClick={() => changeSections("4")}
        >
          Timeline
        </li>
      </ul>
    </Root>
  );
}

export default Profile;
