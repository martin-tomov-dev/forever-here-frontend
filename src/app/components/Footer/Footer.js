import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import InstgramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

const Root = styled('div')(({ theme }) => ({
  '.footer ul': {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none'
  },
  '.footer ul li': {
    margin: '0 0.5rem'
  },
  '.footer ul li a': {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  '.footer button': {
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    maxHeight: '60px',
    backdropFilter: 'blur(50px)',
    background: 'linear-gradient(116.79deg,hsla(0,0%,100%,.48),hsla(0,0%,100%,.12) 99.45%)',
    margin: '0 10px'
  },
  [theme.breakpoints.up('md')]: {
    '.footer ul li': {
      margin: '0 3rem'
    },
    '.footer button': {
      margin: '0 20px'
    }
  },
}));

function Footer() {
  return (
    <Root>
      <Box
        className="footer w-full h-360 flex justify-center"
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main
        }}
      >
        <div className="w-full md:w-auto flex flex-col">
          <div className="flex justify-center">
            <img
              className="w-256"
              src='/assets/images/apps/home/logo.png'
            />
          </div>
          <div>
            <ul>
              <li><a>About Us</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>FAQs</a></li>
              <li><a>Blog</a></li>
              <li><a>Contact Us</a></li>
            </ul>
          </div>
          <div className="flex justify-center m-28">
            <Button>
              <TwitterIcon className="text-white" />
            </Button>
            <Button>
              <FacebookIcon className="text-white" />
            </Button>
            <Button>
              <InstgramIcon className="text-white" />
            </Button>
            <Button>
              <LinkedinIcon className="text-white" />
            </Button>          
          </div>
          <div className="text-center">
            <Typography className="text-16 text-white">
              Copyright © 2023 Foreverhere Inc. - All Rights Reserved.
            </Typography>
          </div>
        </div>
      </Box>
    </Root>
  );
}

export default Footer;
