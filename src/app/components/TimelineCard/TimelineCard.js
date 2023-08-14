import PropTypes from 'prop-types';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import clsx from 'clsx';

const Root = styled('div')(({ theme }) => ({
  '.arrow-up': {
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
  },
  '.arrow-right': {
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
  }
}));

function TimelineCard(props) {
  const theme = useTheme();

  const {
    vertical,
    reverse,
    showContent,
    contentImage,
    bottomBackgroundColor,
    bottomContent,
    showLRound,
    showRRound,
    showTRound,
    showBRound,
  } = props;

  return (
    <Root>
      { vertical ? ( <div className="flex flex-col justify-center items-center">
        <Box className={clsx("w-96 h-96", showContent ? "visible" : "invisible")}>
          <Box 
            className="w-full h-full rounded-full"
            sx={{
              borderWidth: "0.3rem",
              borderColor: (theme) => theme.palette.timeline.primary,
              background: `url(${contentImage}) no-repeat`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%'
            }}
          />
        </Box>
        <Box className={clsx("h-68", showContent ? "visible" : "invisible")}>
          <img src='/assets/images/apps/home/timeline-vertical-bar.png' />
        </Box>
        <Box className="h-24 arrow-up" sx={{ borderBottom: `10px solid ${bottomBackgroundColor}` }}/>
        <Box className={clsx("w-full", showLRound ? "rounded-l-full" : showRRound ? "rounded-r-full" : "rounded-none")} sx={{ backgroundColor: bottomBackgroundColor }}>
          <Typography className="p-2 text-10 md:text-10 text-white text-center uppercase font-bold">
            {bottomContent}
          </Typography>
        </Box>
      </div>
      ) : (
        <div className={clsx("flex justify-center items-center", reverse ? "flex-row-reverse" : "flex-row")}>
          <Box className={clsx("w-20 h-96 flex justify-center items-center", showTRound ? "rounded-t-full" : showBRound ? "rounded-b-full" : "rounded-none")} sx={{ backgroundColor: bottomBackgroundColor }}>
            <Typography 
              className="p-2 text-10 md:text-10 text-white text-center uppercase font-bold"
              sx={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
            >
              {bottomContent}
            </Typography>
          </Box>
          <Box className="h-24 arrow-right" sx={{ borderLeft: `10px solid ${bottomBackgroundColor}` }}/>
          <Box className={clsx("flex-1", showContent ? "visible" : "invisible")}>
            <img className="w-full" src='/assets/images/apps/home/timeline-horizantal-bar.png' />
          </Box>
          <Box className={clsx("w-96 h-96", showContent ? "visible" : "invisible")}>
            <Box 
              className="w-full h-full rounded-full"
              sx={{
                borderWidth: "0.3rem",
                borderColor: "#135552",
                background: `url(${contentImage}) no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%'
              }}
            />
          </Box>
        </div>
      )}
    </Root>
  );
}

TimelineCard.propTypes = {
  vertical: PropTypes.bool,
  reverse: PropTypes.bool,
  contentImage: PropTypes.string,
  showContent: PropTypes.bool,
  bottomBackgroundColor: PropTypes.string,
  bottomContent: PropTypes.string,
  showLRound: PropTypes.bool,
  showRRound: PropTypes.bool,
};

TimelineCard.defaultProps = {
  vertical: true,
  reverse: false,
  contentImage: '',
  showContent: false,
  bottomBackgroundColor: '',
  bottomContent: '',
  showLRound: false,
  showRRound: false,
  showTRound: false,
  showBRound: false,
};

export default TimelineCard;
