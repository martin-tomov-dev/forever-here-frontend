import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MemoryForm from '../../components/MemoryForm';
import PriceCard from '../../components/PriceCard';

const Root = styled('div')(({ theme }) => ({
  
}));

function PricingPage() {

  return (
    <Root>
      <Header 
        headerBackground="/assets/images/apps/home/pricing-banner.png"
        headerDescription="Our aim is to create a place where you can share your loved one's story, all your videos and pictures all in one safe place to cherish forever. "
      />

      <div className="flex flex-col md:flex-row p-16 md:py-28 md:px-96">
        <div className="md:px-32 text-center md:text-left">
          <Typography className="text-28 md:text-60 font-bold">
            <span className="text-secondary"><span className="font-black">No</span> tiers</span>
          </Typography>
          <Typography className="text-28 md:text-60 font-bold">
            <span className="text-secondary"><span className="font-black">No</span> pricing structures</span>
          </Typography>
          <Typography className="text-18 md:text-28">
            One forever price £89.
          </Typography>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-16 md:py-0 md:px-96">
        <div className="md:px-32 max-w-480">
          <Typography className="text-10 md:text-12 font-bold text-center md:text-left">
            If you are creating your own profile, you may wish to consider adding Forever Messages, find out more about them here.
          </Typography>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around p-16 md:py-0 md:px-96">          
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
      <div className="flex flex-col md:flex-row p-16 md:pt-52 md:pb-28 md:px-96">                     
        <div className="w-full md:w-1/3 md:px-32 text-center">
          <img
            className="rounded-8 md:rounded-36 mx-auto"
            src="/assets/images/apps/home/pricing-1.png"
            alt="pricing-icon-1"
          />
          <Typography className="pt-12 md:pt-24 text-18 md:text-20">
            Screw Mounted QR coded plaque make specifically for your Forever Here profile. Ideal for a remembrance bench or similar at your favourite place.
          </Typography>
          <Typography className="pt-12 md:pt-24 text-18 md:text-20 font-bold">
            £39.99
          </Typography>
        </div>
        <div className="w-full md:w-1/3 pt-32 md:pt-0 md:px-32 text-center">
          <img
            className="rounded-8 md:rounded-36 mx-auto"
            src="/assets/images/apps/home/pricing-2.png"
            alt="pricing-icon-1"
          />
          <Typography className="pt-12 md:pt-24 text-18 md:text-20">
            Memorial Video linked directly to your QR profile. All the information on your profile presented with music and beautiful transitions. A truly long-lasting perfect memory.
          </Typography>
          <Typography className="pt-12 md:pt-24 text-18 md:text-20 font-bold">
            Contact us for more information
          </Typography>
        </div>
        <div className="w-full md:w-1/3 pt-32 md:pt-0 md:px-32 text-center">
          <img
            className="rounded-8 md:rounded-36 mx-auto"
            src="/assets/images/apps/home/pricing-3.png"
            alt="pricing-icon-1"
          />
          <Typography className="pt-12 md:pt-24 text-18 md:text-20">
            QR coded memorial plaque to leave at your chosen location. We find that right by your graveside is the absolute perfect place.
          </Typography>
          <Typography className="pt-12 md:pt-24 text-18 md:text-20 font-bold">
            £59.99
          </Typography>
        </div>
      </div>
      
      <MemoryForm />
      
      <Footer />
    </Root>
  );
}

export default PricingPage;
