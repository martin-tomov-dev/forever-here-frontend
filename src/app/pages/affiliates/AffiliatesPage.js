import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MemoryForm from '../../components/MemoryForm';

const Root = styled('div')(({ theme }) => ({  
}));

function AffiliatesPage() {

  return (
    <Root>
      <Header 
        headerBackground="/assets/images/apps/home/affiliates-banner.png"
        headerTitle="Would you like to become an affiliate of Forever Here?"
        headerDescription="Our affiliate program is free to join and easy to set up."
      />

      <div className="flex flex-col md:flex-row p-16 md:py-28 md:px-96">                     
        <div className="w-full flex flex-col justify-center md:w-1/3 md:px-32 text-center md:text-left">
          <Typography className="pt-12 md:pt-24 text-18 md:text-20">
            Our affiliates enjoy great commissions utilising the traffic from their own online activities.  
          </Typography>
          <Typography className="pt-12 md:pt-24 text-18 md:text-20">
            If you own a blog, website, or an online medium where you feel your readers might benefit from the great features of Forever Here, then apply today.
          </Typography>
          <div className="w-full pt-12 md:pt-24">            
            <Button className="w-full md:w-auto" variant="contained" color="secondary">
              <span className="mx-32">Apply Today</span>
            </Button>
          </div>
        </div>
        <div className="w-full md:w-2/3 pt-32 md:pt-0 md:px-32 text-center">
          <img
            className="rounded-8 md:rounded-36 mx-auto"
            src="/assets/images/apps/home/affiliates-1.png"
            alt="pricing-icon-1"
          />
        </div>
      </div>
      
      <MemoryForm />

      <Footer />
    </Root>
  );
}

export default AffiliatesPage;
