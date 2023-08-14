import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

const Root = styled('div')(({ theme }) => ({
  
}));

function PriceCard(props) {

  const { 
    headerBackgroundColor,
    heaerTitle,
    headerColor,
    content,
  } = props;

  return (
    <Root>
      <Card className="my-16 rounded-l-8 rounded-r-8 max-w-360 text-center">
        <Box className="py-12 px-48" sx={{ backgroundColor: headerBackgroundColor }}>
          <Typography className="text-18 md:text-20" sx={{ color: headerColor }}>
            {heaerTitle}
          </Typography>
        </Box>
        <Box className="py-12 px-48">
          <Typography className="text-18 md:text-20 font-bold">
            {content}
          </Typography>
        </Box>
      </Card>
    </Root>
  );
}

export default PriceCard;
