import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MemoryForm from '../../components/MemoryForm';
import PriceCard from '../../components/PriceCard/PriceCard';

const Root = styled('div')(({ theme }) => ({
}));

function ForeverMessagesPage() {

  return (
    <Root>
      <Header 
        headerBackground="/assets/images/apps/home/about-us-banner.png"
        headerTitle="Forever Messages"
      />

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row p-16 pt-32 md:pt-56 md:pb-28 md:px-96">          
          <div className="w-full md:px-32 text-center md:text-left">
            <Typography className="text-24 md:text-28 font-bold">
              <span className="text-secondary">The memory of you will never be distant</span>
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              When you're time of passing comes, you never want you're loved one's memory of you to be a distant one. Now it doesn’t have to be.
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              When you're nearing the end of life, we know the thought of the occasions you're missing, and the loved one's you are leaving behind will always be daunting. 
              With Forever Messages you can now ensure that although you will not be there in person, you will be on your loved one's mind.
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              You may want to wish your daughter a happy birthday, tell your son your proud of him for becoming a man on his 18th, or even telling someone you’ll always be watching over them.
            </Typography>
          </div>
          <div className="w-full pt-16 md:pt-0 md:px-32">
            <img
              className="rounded-8 md:rounded-36"
              src='/assets/images/apps/home/forever-message-1.png'
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-16 md:py-28 md:px-96">          
          <div className="w-full md:w-2/3 md:px-32 text-center md:text-left">
            <Typography className="text-24 md:text-28 font-bold">
              <span className="text-secondary">Why would you use Forever Messages?</span>
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              You can be part of your friends and families' special moments in their life. Create a message, video or image and share it with loved ones six months, twelve months or even ten years from today. 
            </Typography>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Record a video today, wishing your son or daughter a happy 18th birthday, upload it to Forever Messages, write a message and set the date to send, and on the big day they will receive a text or email with a link to your video they can play direct from their phone. Beautiful. 
            </Typography>
          </div>
          <div className="w-full md:w-1/3 pt-16 md:pt-0 md:px-32">
            <img
              className="rounded-8 md:rounded-36"
              src='/assets/images/apps/home/forever-message-2.png'
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-16 md:py-28 md:px-96">          
          <div className="w-full text-center">
            <Typography className="text-28 md:text-40 font-bold">
              <span className="text-secondary">How does it work?</span>
            </Typography>
          </div>          
        </div> 
        <div className="hidden md:flex justify-center items-center grid md:grid-cols-12 space-x-20 p-16 md:py-28 md:px-96">
          <div></div>          
          <div className="col-span-2">
            <img src='/assets/images/apps/home/forever-message-icon-1.png'/>
          </div>
          <div className="col-span-2">
            <img src='/assets/images/apps/home/arrow-right.png'/>
          </div>
          <div className="col-span-2">
            <img src='/assets/images/apps/home/forever-message-icon-2.png'/>
          </div>
          <div className="col-span-2">
            <img src='/assets/images/apps/home/arrow-right.png'/>
          </div>
          <div className="col-span-2">
            <img src='/assets/images/apps/home/forever-message-icon-3.png'/>
          </div>
          <div></div>
        </div>
        <div className="hidden md:flex flex-col md:flex-row md:px-96">          
          <div className="w-full md:w-1/3 pt-16 md:pt-0 md:px-32 text-center">
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Create a video, take a picture, or write a message and upload it to your portal. 
            </Typography>
          </div>
          <div className="w-full md:w-1/3 pt-16 md:pt-0 md:px-32 text-center">
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Enter an SMS number and an email address of the person you want to receive the message. Along with a date to send it. 
            </Typography>
          </div>
          <div className="w-full md:w-1/3 pt-16 md:pt-0 md:px-32 text-center">
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Click send and know that your message will get to your recipient.
            </Typography>
          </div>
        </div>
        <div className="md:hidden flex flex-col justify-center items-center space-y-10 p-16 md:py-28 md:px-96 text-center">
          <div>
            <img className="mx-auto" src='/assets/images/apps/home/forever-message-icon-1.png'/>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Create a video, take a picture, or write a message and upload it to your portal. 
            </Typography>
          </div>
          <div>
            <img className="mx-auto" src='/assets/images/apps/home/arrow-down.png'/>
          </div>
          <div>
            <img className="mx-auto" src='/assets/images/apps/home/forever-message-icon-2.png'/>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Enter an SMS number and an email address of the person you want to receive the message. Along with a date to send it. 
            </Typography>
          </div>
          <div>
            <img className="mx-auto" src='/assets/images/apps/home/arrow-down.png'/>
          </div>
          <div>
            <img className="mx-auto" src='/assets/images/apps/home/forever-message-icon-3.png'/>
            <Typography className="pt-12 md:pt-24 text-18 md:text-20">
              Click send and know that your message will get to your recipient.
            </Typography>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col md:flex-row p-16 md:py-28 md:px-96">          
          <div className="w-full md:px-32 text-center">
            <Typography className="text-28 md:text-40 font-bold">
              <span className="text-secondary">Are my messages safe?</span>
            </Typography>
            <Typography className="pt-12 md:pt-24 px-0 md:px-48 text-18 md:text-20">
              Absolutely, we use the highest exAdvanced anti-DDoS protection for all our hosting along with industry standard encryption. Our servers are also backed up daily for additional peace of mind. 
            </Typography>
          </div>
          <div className="w-full pt-16 md:pt-0 md:px-32 text-center">
            <Typography className="text-28 md:text-40 font-bold">
              <span className="text-secondary">Does the recipient need to have a Forever Here account? </span>
            </Typography>
            <Typography className="pt-12 md:pt-24 px-0 md:px-48 text-18 md:text-20">
              Absolutely not, anyone with a mobile number or email address can receive your message.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-16 md:py-28 md:px-96">          
          <div className="w-full md:px-32 text-center">
            <Typography className="text-28 md:text-60 font-black">
              <span className="text-secondary">Ready to get started?</span>
            </Typography>
            <Typography className="text-28 md:text-52 font-bold">
              <span className="text-secondary">No tiers. No pricing structures.</span>
            </Typography>
            <Typography className="pt-12 md:pt-24 px-48 text-18 md:text-20">
              One forever price, <span className="font-bold">£89.</span>
            </Typography>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row p-16 md:py-0 md:px-96">
          <div className="md:px-32 max-w-480">
            <Typography className="text-10 md:text-12 font-bold text-center md:text-left">
              If you are creating your own profile, you may wish to consider adding Forever Messages, find out more about them here.
            </Typography>
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row justify-around p-16 md:py-28 md:px-96">          
          <PriceCard 
            headerColor="white"
            headerBackgroundColor="#3E716C"
            heaerTitle="5 forever messages"
            heaerColor="white"
            content="£14"
          />
          <PriceCard 
            headerColor="black"
            headerBackgroundColor="#D9D9D9"
            heaerTitle="12 forever messages"
            heaerColor="black"
            content="£26"
          />
          <PriceCard 
            headerColor="white"
            headerBackgroundColor="#E5AC9C"
            heaerTitle="25 forever messages"
            heaerColor="white"
            content="£48"
          />
        </div>
        <div className="flex flex-col md:flex-row px-16 md:px-360">
          <div className="md:px-32 text-center">
            <Typography className="text-10 md:text-12">
              We don't have complicated pricing structures; we don't take commission from any donations from your page and most importantly we will be here forever. Many companies who offer a free option don’t consider the hosting fees and costs involved in a website such as Forever Here. We will be upfront, honest, and transparent with why we charge for this service. Our aim will always be to reinvest money back into bringing you great new features and keeping memories forever here. 
            </Typography>
          </div>
        </div>
        <MemoryForm />
      </div>
      
      <Footer /> 
    </Root>
  );
}

export default ForeverMessagesPage;
