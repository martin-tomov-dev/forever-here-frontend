import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MemoryForm from '../../components/MemoryForm';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';
import TimelineCardWrapper from '../../components/TimelineCardWrapper';

const Root = styled('div')(({ theme }) => ({

}));

function HomePage() {

  return (
    <Root>
      <Header 
        headerBackground="/assets/images/apps/home/home-banner.png"
        headerDescription="Forever Here is an online memorial tribute where you can grow the legacy of your loved ones or begin your own story. Your photographs, kind words and videos all in one place, forever."
        backgroundPosition="100%"
        showHeaderButton={true}
      />

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row p-16 md:p-28 md:pt-56 md:px-96">
          <div className="w-full md:px-32">
            <img
              className="rounded-8 md:rounded-36"
              src='/assets/images/apps/home/home-1.png'
            />
          </div>
          <div className="w-full flex flex-col justify-center pt-24 md:pt-0 md:px-32 text-center md:text-left">
            <Typography className="text-24 md:text-28 font-bold">
              Tell the <span className="text-secondary">complete</span> story
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Create a beautiful biography and obituary of your loved one. A headstone can only tell you part of the story. With Forever Here you can fill in the blanks.
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Complete the story.
            </Typography>
            <div className="w-full pt-24">
              <Button className="w-full md:w-auto" variant="contained" color="secondary">
                <span className="mx-8 uppercase">Learn More</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-16 pt-28 md:p-28 md:px-96">
          <div className="w-full flex flex-col justify-center md:px-32 text-center md:text-left">
            <Typography className="md:pt-0 text-24 md:text-28 font-bold">
              <span className="text-secondary">Forever Here</span> is for...
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Husbands, wives, sons, daughters, and all family members who wish to leave a long-lasting memory of their loved one to keep forever.
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              People who wish to create their own everlasting memory of their own lives. Create your page exactly how you would want it to be and invite your family and friends to grow your page once you are no longer able. A true legacy.
            </Typography>
          </div>            
          <div className="w-full pt-24 md:pt-0 md:px-32">
            <img
              className="rounded-8 md:rounded-36"
              src='/assets/images/apps/home/home-2.png'
            />
          </div>
        </div>
        <div className="flex flex-col p-16 pt-28 md:p-28 md:px-216">
          <div className="w-full text-center">
            <Typography className="text-24 md:text-28 font-bold">
              <span className="text-secondary">Images</span> and <span className="text-secondary">videos</span>
            </Typography>
          </div>
          <div className="grid md:grid-cols-4">
            <div className="pt-12 md:pt-128 md:mr-m96">
              <Typography className="text-18 md:text-20 text-center">
                No more searching your phone for those beautiful memories. Store images and embed videos of your most precious moments all in one place.
              </Typography>
            </div>        
            <div className="md:col-span-2 px-24">
              <img
                src='/assets/images/apps/home/home-3.png'
                alt="img"
              />
            </div>          
            <div className="md:pt-128 md:ml-m96">
              <Typography className="text-18 md:text-20 text-center font-bold">
                No limits on amounts, no limits on bandwidth.
              </Typography>
            </div>   
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-16 pt-28 md:p-28 md:px-128">
          <div className="w-full flex flex-col items-center">
            <Typography className="pt-0 md:pt-24 text-24 md:text-28 text-center font-bold">
              <span className="text-secondary">QR</span> Connection
            </Typography>
            <Typography className="pt-12 text-18 md:text-20 text-center px-0 md:px-48">
              At Forever Here you are able to attach your loved ones story to a feature that can be used to tell the world their story. A tag to attach to a remembrance bench or a plaque for graveside. The QR code sends anyone to your profile to fill in the gaps. All they need is their phone.
            </Typography>
            <div className="pt-24 px-24">
              <img
                src="/assets/images/apps/home/home-icon-1.png"
                alt="qrcode"
              />
            </div>
          </div>         
          <div className="w-full flex flex-col items-center">
            <Typography className="pt-36 md:pt-24 text-24 md:text-28 text-center font-bold">
              <span className="text-secondary">Forever </span>Messages
            </Typography>
            <Typography className="pt-12 text-18 md:text-20 text-center px-0 md:px-48">
              With Forever Messaging you are able to leave a message or video for your loved ones far into the future. Would you like to send your son or daughter a happy 18th birthay video that they will recieve on the day? Now you can with Forever Here.
            </Typography>
            <div className="pt-24 px-24">
              <img
                src='/assets/images/apps/home/home-icon-2.png'
                alt="qrcode"
              />
            </div>
          </div>   
        </div> 
        <div className="flex flex-col justify-center p-16 pt-28 md:p-28 md:px-96">
          <div className="w-full grid grid-cols-12">
            <div className="col-span-3 md:col-span-5 flex items-center">
              <div className="w-full border-t-4"/>
            </div>         
            <div className="col-span-6 md:col-span-2">
              <Typography className="text-24 md:text-28 text-center font-bold">
                <span className="text-secondary">Timeline</span>
              </Typography>
            </div>
            <div className="col-span-3 md:col-span-5 flex items-center">
              <div className="w-full border-t-4"/>
            </div>  
          </div>
          <div className="w-full pt-28">
            <TimelineCardWrapper />
          </div>
          <div className="w-full">
            <Typography className="pt-24 text-18 md:text-20 text-center px-0 md:px-216">
              Show your loved ones most precious milestones. Celebrate again those great moments of marriage, childbirth, and achievement.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col md:flex-row pt-28">
          <Box
            className="grid grid-cols-12 pl-12 md:pl-36 p-36 rounded-tr-216 rounded-br-216"
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main
            }}
          >
            <div className="col-span-2 md:col-span-4 flex justify-center items-center">
              <img
                className="max-w-48 md:max-w-216"
                src='/assets/images/apps/home/home-icon-3.png'
              />
            </div>
            <div className="col-span-10 md:col-span-8 flex flex-col px-12 md:px-20">
              <Typography className="text-24 md:text-28 text-white font-bold">
                <span className="text-secondary">Give </span>Donations
              </Typography>
              <Typography className="pt-12 text-18 md:text-20 text-white">
                Forever Here enables you to create a link to yours or your loved ones favouritre charity so that people can leave a donation in their name. We take no commissions from these donations.
              </Typography>
            </div>
          </Box>
          <Box
            className="grid grid-cols-12 pr-12 md:pr-36 p-36"
          >
            <div className="col-span-10 md:col-span-8 flex flex-col px-12 md:px-20">
              <Typography className="text-24 md:text-28 text-right font-bold">
                <span className="text-secondary">Recognition </span>Book
              </Typography>
              <Typography className="pt-12 text-18 md:text-20 text-right">
                Share your most beautiful thoughts and condolences about your loved one, leave an acknowledgment of your love and respect for your loved one. Invite friends and family to leave their tributes.
              </Typography>
            </div>
            <div className="col-span-2 md:col-span-4 flex justify-center items-center">
              <img
                className="max-w-48 md:max-w-216"
                src='/assets/images/apps/home/home-icon-4.png'
              />
            </div>            
          </Box>
        </div> 
        <div className="flex flex-col md:flex-row pt-28">
          <Box
            className="grid grid-cols-12 pl-12 md:pl-36 pt-0 md:pt-36 p-36"
          >
            <div className="col-span-2 md:col-span-4 flex justify-center items-center">
              <img
                className="max-w-48 md:max-w-216"
                src="/assets/images/apps/home/home-icon-5.png"
              />
            </div>
            <div className="col-span-10 md:col-span-8 flex flex-col px-12 md:px-20">
              <Typography className="text-24 md:text-28 font-bold">
                <span className="text-secondary">Security</span>
              </Typography>
              <Typography className="pt-12 text-18 md:text-20">
                Full security, meaning you can choose to have comments on a profile or not, and you can specifically invite people to leave a comment.
              </Typography>
            </div>           
          </Box>
          <Box
            className="grid grid-cols-12 pr-12 md:pr-36 p-36 rounded-tl-216 rounded-bl-216"
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main
            }}
          >
            <div className="col-span-10 md:col-span-8 flex flex-col px-12 md:px-20">
              <Typography className="text-24 md:text-28 text-white text-right font-bold">
                Online <span className="text-secondary">Forever</span>
              </Typography>
              <Typography className="pt-12 text-18 md:text-20 text-white text-right">
                We guarantee that your profile will be live for as long as you need it to be. So many other memorial sites have disappeared over the years. Forever Here is sustainable and transparent.
              </Typography>
            </div>
            <div className="col-span-2 md:col-span-4 flex justify-center items-center">
              <img
                className="max-w-48 md:max-w-216"
                src="/assets/images/apps/home/home-icon-6.png"
              />
            </div>            
          </Box>
        </div>
        
        <MemoryForm />
        <TestimonialsCarousel />  
      </div>
      
      <Footer />
    </Root>
  );
}

export default HomePage;
