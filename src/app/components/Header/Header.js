import PropTypes from "prop-types";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavbarWrapper from "../Navbar/NavbarWrapper";
import NavbarToggleButton from "../Navbar/NavbarToggleButton";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
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
}));

function Header(props) {
  const {
    headerBackground,
    headerTitle,
    headerDescription,
    showHeaderButton,
    backgroundPosition,
  } = props;

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
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
          <Box
            className="navbar-nav absolute w-full flex justify-end px-24 py-16"
            sx={{
              backgroundColor: (theme) => `${theme.palette.primary.dark}4D`,
            }}
          >
            <NavbarToggleButton />
          </Box>
        ) : (
          <Box
            className="navbar-nav absolute w-full p-24"
            sx={{
              backgroundColor: (theme) => `${theme.palette.primary.dark}4D`,
            }}
          >
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
                className="ml-0 ml-m36 mt-64 md:mt-12"
                src="/assets/images/apps/home/logo.png"
              />
            </motion.div>
          </div>
          <div className="h-full flex flex-col justify-evenly md:mt-m36">
            {headerTitle && (
              <div className="w-full">
                <Typography
                  component={motion.div}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                  className="md:w-640 text-white text-28 text-center md:text-left px-36 md:px-0 md:m-12 md:ml-72 font-bold"
                >
                  {headerTitle}
                </Typography>
              </div>
            )}
            {headerDescription && (
              <div className="w-full">
                <Typography
                  component={motion.div}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                  className="md:w-640 text-white text-20 text-center md:text-left px-36 md:px-0 md:m-12 md:ml-72"
                >
                  {headerDescription}
                </Typography>
              </div>
            )}
            {showHeaderButton && (
              <div className="w-full text-center md:text-left px-16 md:pl-72">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                >
                  <a href="/sign-up">
                    <Button
                      className="w-full md:w-auto"
                      variant="contained"
                      color="secondary"
                    >
                      <span className="mx-8 uppercase">
                        Click here to create a memorial
                      </span>
                    </Button>
                  </a>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </Box>
      <NavbarWrapper />
    </Root>
  );
}

Header.propTypes = {
  headerBackground: PropTypes.string,
  headerTitle: PropTypes.string,
  headerDescription: PropTypes.string,
  showHeaderButton: PropTypes.bool,
  backgroundPosition: PropTypes.string,
};

Header.defaultProps = {
  headerBackground: "/assets/images/apps/home/home-banner.png",
  headerTitle: "",
  headerDescription: "",
  showHeaderButton: false,
  backgroundPosition: "50%",
};

export default Header;
