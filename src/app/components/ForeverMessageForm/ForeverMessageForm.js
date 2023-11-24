import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

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

  textarea: {
    textIndent: "20px",
    background:
      "linear-gradient(116.79deg,hsla(0,0%,100%,.48),hsla(0,0%,100%,.12) 99.45%)",
    border: "2px solid hsla(0,0%,100%,.48)",
    borderRadius: "30px",
    width: "100%",
    // height: "47px",
    color: "white",
    outline: "none",
  },
}));

function ForeverMessageForm(props) {
  return (
    <Root>
      <Box
        className="w-full h-320 flex justify-center mt-56 md:mt-128"
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >
        <Box
          className="bg-overlay flex flex-col items-center justify-center w-780 h-320 grid md:grid-cols-2 p-12 md:mt-[-5.2rem]"
          sx={{
            background: (theme) =>
              `linear-gradient(0deg, ${theme.palette.primary.dark}D9, ${theme.palette.primary.dark}D9), url("/assets/images/apps/home/home-banner-2.png")`,
            backgroundSize: "cover",
            borderRadius: "2rem",
          }}
        >
          <div className="md:col-span-2 flex items-center justify-center text-center">
            <Typography className="text-24 md:text-28 text-white">
              Your Forever Message is here
            </Typography>
          </div>
          <div className="md:col-span-2 flex items-center justify-center text-center">
            <Typography className="text-18 md:text-20 text-white">
              {props.message.subject}
            </Typography>
          </div>
          <div className="px-8">
            <input
              id="first_name"
              type="text"
              placeholder="From"
              value={props.message.sender}
            />
          </div>
          <div className="px-8">
            <input
              id="last_name"
              type="text"
              placeholder="To"
              value={props.message.receiver}
            />
          </div>
          <div className="md:col-span-2 px-8">
            <textarea
              className="mt-20 px-8 py-16  w-full"
              id="text"
              placeholder="Your message"
              value={props.message.messageContent}
              // onChange={(e) => setTextMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="px-8 mt-4">
            <a className="text-white px-5" href={props.message.attachment}>
              {" "}
              Click Here to see the attachment{" "}
            </a>
          </div>
          <div className="md:col-span-2 text-center">
            <Typography className="text-14 text-white">
              <a href="#">Learn more</a> about Forever Here
            </Typography>
          </div>
        </Box>
      </Box>
    </Root>
  );
}

export default ForeverMessageForm;
