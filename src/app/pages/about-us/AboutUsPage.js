import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MemoryForm from '../../components/MemoryForm';

const Root = styled('div')(({ theme }) => ({
  
}));

function AboutUsPage() {

  return (
    <Root>
      <Header 
        headerBackground="/assets/images/apps/home/about-us-banner.png"
        headerDescription="Forever Here is a UK based online memorial service with some great new features, a wonderful ethos, and a guarantee that your memorial will stay online forever."
        showHeaderButton={false}
      />

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row p-16 pt-32 md:pt-56 md:pb-28 md:px-96">          
          <div className="w-full md:px-32 text-center md:text-left">
            <Typography className="text-24 md:text-28 font-bold">
              <span className="text-secondary">About Us</span>
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Our passion for Forever Here started through our own life experiences, losing a loved one and it feeling so permanent.
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              The love and admiration for that person and wanting to share that story with others. We lay a headstone or cremation plaque but a name and a date just never feels enough.
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Our other passion comes from the general curiosity of walking through the cemetery with our loved ones, reading a headstone and wanting to know more.
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              We wanted somewhere to go and tell that story.
            </Typography>
          </div>
          <div className="w-full pt-16 md:pt-0 md:px-32">
            <img
              className="rounded-8 md:rounded-36"
              src='/assets/images/apps/home/about-us-1.png'
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-16 md:py-28 md:px-96">                     
          <div className="w-full md:w-2/3 md:px-32">
            <img
              className="w-full rounded-8 md:rounded-36"
              src='/assets/images/apps/home/about-us-2.png'
            />
          </div>
          <div className="w-full md:w-1/3 md:px-32 text-center md:text-right">
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Forever Here offers you the chance to put all your images, comments, thoughts, and videos in one place. No more searching your phone for that cherished memory or that great day out that you will never forget, everything can be added to your Forever Here profile and always be there when you need it.
            </Typography>
          </div> 
        </div>
        <div className="flex flex-col md:flex-row p-16 md:pt-28 md:pb-0 md:px-96">          
          <div className="w-full md:px-32 text-center md:text-left">
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              We wanted you to be able to leave a everlasting memory of your life, so we introduced Forever Messaging. 
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              With Forever Messaging you are able to leave a message or video for your loved ones far into the future. 
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Would you like to wish your son or daughter a happy 18th birthday video that they will receive on the day? Now you can with Forever Here. 
            </Typography>
          </div>
          <div className="w-full md:px-32">
            <img
              className="rounded-8 md:rounded-36"
              src='/assets/images/apps/home/home-3.png'
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center p-16 md:pt-0 md:pb-28 md:px-96">          
          <div className="w-full md:w-640 text-center">
            <Typography className="pt-12 md:pt-24 text-24 md:text-28 font-bold">
              Create a wonderful obituary and biography, take all the space that you need.
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              We very much look forward to you being bound by nothing to create your loved one’s story. 
            </Typography>
          </div>
        </div>

        <MemoryForm />
      </div>
      
      <Footer />
    </Root>
  );
}

export default AboutUsPage;
