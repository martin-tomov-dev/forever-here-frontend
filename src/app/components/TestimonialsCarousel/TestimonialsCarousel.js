import { useRef } from "react";
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@mui/material/useMediaQuery';

const Root = styled('div')(({ theme }) => ({
  '.testimonials button:first-of-type': {
    backgroundColor: '#c4c4c4',
    '&:hover': {
      backgroundColor: '#c4c4c4',
      opacity: 0.8
    }
  },
  '.testimonials button:last-of-type': {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      opacity: 0.8
    }
  },
}));

function TestimonialsCarousel() {

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const sliderRef = useRef();
  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1
  };

  return (
    <Root>
      <div className="testimonials w-full p-16 pt-28 md:p-28 md:px-96">
        <div className="pt-12">
          <Typography className="text-18 md:text-20 text-center">
            Testimonials
          </Typography>
        </div>
        <div className="pt-12">
          <Typography className="text-24 md:text-28 text-center font-bold">
            What <span className="text-secondary">our Clients</span> are Saying
          </Typography>
        </div>          
        <div className="w-full pt-12">
          <Slider ref={sliderRef} {...sliderSettings}>
            <div className="p-12">
              <div 
                className="mx-0 md:mx-16 p-24 md:p-48"
                style={{
                  borderRadius: '25px',
                  boxShadow: '0 2px 25px hsl(0deg 1% 58% / 20%)'
                }}
              >
                <Typography className="text-18 md:text-20">
                  This is the best Site I've ever seen. I found my Come and grab this golden opportunity! through this site, If Come and grab this golden opportunity!
                </Typography>
                <div className="flex pt-32">
                  <img 
                    className="w-96 h-96 rounded-12"
                    src="/assets/images/avatars/male-01.jpg"
                  />
                  <div className="flex flex-col py-0 md:py-12 px-12">
                    <Typography className="text-18 md:text-20 font-bold">
                      Robert
                    </Typography>
                    <Typography className="text-18 md:text-20 pt-12">
                      Happy Customer
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-12">
              <div 
                className="mx-0 md:mx-16 p-24 md:p-48"
                style={{
                  borderRadius: '25px',
                  boxShadow: '0 2px 25px hsl(0deg 1% 58% / 20%)'
                }}
              >
                <Typography className="text-18 md:text-20">
                  This is the best Site I've ever seen. I found my Come and grab this golden opportunity! through this site, If Come and grab this golden opportunity!
                </Typography>
                <div className="flex pt-32">
                  <img
                    className="w-96 h-96 rounded-12"
                    src="/assets/images/avatars/female-01.jpg"
                  />
                  <div className="flex flex-col py-0 md:py-12 px-12">
                    <Typography className="text-18 md:text-20 font-bold">
                      Jennifer
                    </Typography>
                    <Typography className="text-18 md:text-20 pt-12">
                      Happy Customer
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-12">
              <div 
                className="mx-0 md:mx-16 p-24 md:p-48"
                style={{
                  borderRadius: '25px',
                  boxShadow: '0 2px 25px hsl(0deg 1% 58% / 20%)'
                }}
              >
                <Typography className="text-18 md:text-20">
                  This is the best Site I've ever seen. I found my Come and grab this golden opportunity! through this site, If Come and grab this golden opportunity!
                </Typography>
                <div className="flex pt-32">
                  <img 
                    className="w-96 h-96 rounded-12"
                    src="/assets/images/avatars/male-01.jpg"
                  />
                  <div className="flex flex-col py-0 md:py-12 px-12">
                    <Typography className="text-18 md:text-20 font-bold">
                      James
                    </Typography>
                    <Typography className="text-18 md:text-20 pt-12">
                      Happy Customer
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="w-full pt-12 text-center space-x-24">
          <Button 
            className="rounded-8" 
            variant="contained"
            onClick={()=> sliderRef.current.slickPrev()}
          >
            <WestIcon className="text-white" />
          </Button>
          <Button 
            className="rounded-8" 
            variant="contained"
            onClick={()=> sliderRef.current.slickNext()}
          >
            <EastIcon className="text-white" />
          </Button>
        </div>
      </div>
    </Root>
  );
}

export default TestimonialsCarousel;
