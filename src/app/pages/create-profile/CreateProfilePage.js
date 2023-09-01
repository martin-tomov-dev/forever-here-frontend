import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import NavbarToggleButton from "../../components/Navbar/NavbarToggleButton";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { darken, lighten } from "@mui/material/styles";

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

const headerBackground = "/assets/images/apps/home/profile-background.png";
const headerDescription =
  "Forever Here is an online memorial tribute where you can grow the legacy of your loved ones or begin your own story. Your photographs, kind words and videos all in one place, forever.";
const backgroundPosition = "100%";

function CreateProfilePage() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.down("md"));

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
              <input id="subject" type="text" placeholder="Subject" />
              <input
                id="attachment"
                type="text"
                placeholder="Add an image, video, or voice recording"
              />
            </div>
            <div className="flex gap-20 mt-20">
              <input
                id="receiver"
                type="text"
                placeholder="Name of person receiving this message"
              />
              <input
                id="schedule_time"
                type="date"
                className="pr-10"
                placeholder="When would you like to send this message?"
              />
            </div>
            <textarea
              className="mt-20 h-[200px] px-8 py-16"
              id="text"
              placeholder="Your message"
            ></textarea>
            <div className="flex gap-20 mt-20">
              <input
                id="email"
                type="text"
                placeholder="Email address for this message"
              />
              <input
                id="mobile_number"
                type="text"
                placeholder="Mobile number for this message"
              />
            </div>
            <Button
              className="w-full mt-20"
              variant="contained"
              color="secondary"
            >
              <span className="mx-8">Schedule a Message</span>
            </Button>
          </div>
        </div>
      </Box>
    </Root>
  );
}

export default CreateProfilePage;
