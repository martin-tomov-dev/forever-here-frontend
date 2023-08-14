import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MemoryForm from '../../components/MemoryForm';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';
import TimelineCard from '../../components/TimelineCard';
import useMediaQuery from '@mui/material/useMediaQuery';

const Root = styled('div')(({ theme }) => ({

}));

function FeaturesPage() {

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Root>
      <Header 
        headerBackground="/assets/images/apps/home/home-banner.png"
        headerDescription="Forever Here is an online memorial tribute that comes with a whole suite of features. Designed to keep both yours and a passing loved one's memory alive. Forever..."
        backgroundPosition="100%"
        showHeaderButton={true}
      />

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row p-16 md:p-28 md:pt-56 md:px-96">
          <div className="w-full pt-16 md:pt-0 md:px-32 text-center">
            <Typography className="text-24 md:text-28 font-bold">
              Tell the <span className="text-secondary">complete</span> story
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Create a beautiful biography and obituary of your loved one. A headstone can only tell you part of the story. With Forever Here you can fill in the blanks.
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Complete the story.
            </Typography>
          </div>
          <div className="w-full pt-32 md:pt-0 md:px-32 text-center">
            <Typography className="text-24 md:text-28 font-bold">
              <span className="text-secondary">Forever </span>Messages
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              With Forever Messaging you are able to leave a message or video for your loved ones far into the future. Would you like to send your son or daughter a happy 18th birthay video that they will recieve on the day? Now you can with Forever Here.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-16 md:p-28 md:pt-56 md:px-96">
          <div className="w-full md:px-32 text-center">
            <Typography className="text-24 md:text-28 font-bold">
              <span className="text-secondary">Images</span> and <span className="text-secondary">videos</span>
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              No more searching your phone for those beautiful memories. Store images and embed videos of your most precious moments all in one place.
            </Typography>
          </div>
          <div className="w-full pt-32 md:pt-0 md:px-32 text-center">
            <Typography className="text-24 md:text-28 font-bold">
              <span className="text-secondary">QR</span> Connection
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              At Forever Here you are able to attach your loved ones story to a feature that can be used to tell the world their story. A tag to attach to a remembrance bench or a plaque for graveside. The QR code sends anyone to your profile to fill in the gaps. All they need is their phone.
            </Typography>
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
          <div className="w-full">
            <Typography className="pt-24 text-18 md:text-20 text-center px-0 md:px-216">
              Show your loved ones most precious milestones. Celebrate again those great moments of marriage, childbirth, and achievement.
            </Typography>
          </div>
          <div className="w-full md:flex justify-center md:grid-cols-12 pt-28">
            <TimelineCard
              vertical={isMobile ? false : true}
              showContent={true}
              contentImage="/assets/images/apps/home/about-us-1.png"
              bottomBackgroundColor="#135552"
              bottomContent="Jan"
              showLRound={isMobile ? false : true}
              showTRound={isMobile ? true : false}
            />
            <TimelineCard
              vertical={isMobile ? false : true}
              showContent={false}
              bottomBackgroundColor="#E4AC9D"
              bottomContent="Feb"
            />
            <TimelineCard
              vertical={isMobile ? false : true}
              showContent={true}
              contentImage="/assets/images/apps/home/about-us-2.png"
              bottomBackgroundColor="#135552"
              bottomContent="Mar"
            />
            <TimelineCard
              vertical={isMobile ? false : true}
              showContent={false}
              bottomBackgroundColor="#E4AC9D"
              bottomContent="Apr"
            />
            <TimelineCard
              vertical={isMobile ? false : true}
              showContent={false}
              bottomBackgroundColor="#135552"
              bottomContent="May"
            />
            <TimelineCard
              vertical={isMobile ? false : true}
              showContent={true}
              contentImage="/assets/images/apps/home/about-us-1.png"
              bottomBackgroundColor="#E4AC9D"
              bottomContent="Jun"
            />
            <TimelineCard
              vertical={isMobile ? false : true}
              showContent={true}
              contentImage="/assets/images/apps/home/about-us-2.png"
              bottomBackgroundColor="#135552"
              bottomContent="Jul"
            />
            <TimelineCard
              vertical={isMobile ? false : true}
              showContent={false}
              bottomBackgroundColor="#E4AC9D"
              bottomContent="Aug"
            />
            <TimelineCard
              vertical={isMobile ? false : true}
              showContent={false}
              bottomBackgroundColor="#135552"
              bottomContent="Sep"
            />
            <TimelineCard
              vertical={isMobile ? false : true}
              showContent={false}
              bottomBackgroundColor="#E4AC9D"
              bottomContent="Oct"
            />
            <TimelineCard
              vertical={isMobile ? false : true}
              showContent={false}
              bottomBackgroundColor="#135552"
              bottomContent="Nov"
            />
            <TimelineCard
              vertical={isMobile ? false : true}
              showContent={true}
              contentImage="/assets/images/apps/home/about-us-1.png"
              bottomBackgroundColor="#E4AC9D"
              bottomContent="Dec"
              showRRound={isMobile ? false : true}
              showBRound={isMobile ? true : false}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-16 md:p-28 md:pt-56 md:px-96">
          <div className="w-full md:px-32 text-center">
            <Typography className="text-24 md:text-28 font-bold">
              <span className="text-secondary">Give </span>Donations
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Forever Here enables you to create a link to yours or your loved ones favouritre charity so that people can leave a donation in their name. We take no commissions from these donations.
            </Typography>
          </div>
          <div className="w-full pt-32 md:pt-0 md:px-32 text-center">
            <Typography className="text-24 md:text-28 font-bold">
              <span className="text-secondary">Recognition </span>Book
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Share your most beautiful thoughts and condolences about your loved one, leave an acknowledgment of your love and respect for your loved one. Invite friends and family to leave their tributes.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-16 md:p-28 md:pt-56 md:px-96">
          <div className="w-full md:px-32 text-center">
            <Typography className="text-24 md:text-28 font-bold">
              <span className="text-secondary">Security</span>
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Full security, meaning you can choose to have comments on a profile or not, and you can specifically invite people to leave a comment.
            </Typography>
          </div>
          <div className="w-full pt-32 md:pt-0 md:px-32 text-center">
            <Typography className="text-24 md:text-28 font-bold">
              Online <span className="text-secondary">Forever</span>
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              We guarantee that your profile will be live for as long as you need it to be. So many other memorial sites have disappeared over the years. Forever Here is sustainable and transparent.
            </Typography>
          </div>
        </div> 
        <Box
          className="flex flex-col md:flex-row p-16 md:p-28 md:pt-56 md:px-216"
          sx={{
            background: isMobile ? "none" : "url('/assets/images/apps/home/logo_black.png') no-repeat 85% 40%",
          }}
        >
          <div className="md:px-32 text-center md:text-left">
            <Typography className="text-28 md:text-36 font-bold">
              <span className="text-secondary">No tiers</span>
            </Typography>
            <Typography className="text-28 md:text-36 font-bold">
              <span className="text-secondary">No pricing structures</span>
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              One forever price £89.
            </Typography>
          </div>
        </Box>
        
        <MemoryForm />
        <TestimonialsCarousel />  
      </div>
      <Footer />
    </Root>
  );
}

export default FeaturesPage;
