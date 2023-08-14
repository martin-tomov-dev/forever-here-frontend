import PropTypes from 'prop-types';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import useMediaQuery from '@mui/material/useMediaQuery';
import TimelineCard from '../TimelineCard';


function TimelineCardWrapper(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  return (
    <div className="md:flex justify-center md:grid-cols-12">
      <TimelineCard
        vertical={isMobile ? false : true}
        showContent={true}
        contentImage="/assets/images/apps/home/about-us-1.png"
        bottomBackgroundColor={theme.palette.timeline.primary}
        bottomContent="Jan"
        showLRound={isMobile ? false : true}
        showTRound={isMobile ? true : false}
      />
      <TimelineCard
        vertical={isMobile ? false : true}
        showContent={false}
        bottomBackgroundColor={theme.palette.timeline.secondary}
        bottomContent="Feb"
      />
      <TimelineCard
        vertical={isMobile ? false : true}
        showContent={true}
        contentImage="/assets/images/apps/home/about-us-2.png"
        bottomBackgroundColor={theme.palette.timeline.primary}
        bottomContent="Mar"
      />
      <TimelineCard
        vertical={isMobile ? false : true}
        showContent={false}
        bottomBackgroundColor={theme.palette.timeline.secondary}
        bottomContent="Apr"
      />
      <TimelineCard
        vertical={isMobile ? false : true}
        showContent={false}
        bottomBackgroundColor={theme.palette.timeline.primary}
        bottomContent="May"
      />
      <TimelineCard
        vertical={isMobile ? false : true}
        showContent={true}
        contentImage="/assets/images/apps/home/about-us-1.png"
        bottomBackgroundColor={theme.palette.timeline.secondary}
        bottomContent="Jun"
      />
      <TimelineCard
        vertical={isMobile ? false : true}
        showContent={true}
        contentImage="/assets/images/apps/home/about-us-2.png"
        bottomBackgroundColor={theme.palette.timeline.primary}
        bottomContent="Jul"
      />
      <TimelineCard
        vertical={isMobile ? false : true}
        showContent={false}
        bottomBackgroundColor={theme.palette.timeline.secondary}
        bottomContent="Aug"
      />
      <TimelineCard
        vertical={isMobile ? false : true}
        showContent={false}
        bottomBackgroundColor={theme.palette.timeline.primary}
        bottomContent="Sep"
      />
      <TimelineCard
        vertical={isMobile ? false : true}
        showContent={false}
        bottomBackgroundColor={theme.palette.timeline.secondary}
        bottomContent="Oct"
      />
      <TimelineCard
        vertical={isMobile ? false : true}
        showContent={false}
        bottomBackgroundColor={theme.palette.timeline.primary}
        bottomContent="Nov"
      />
      <TimelineCard
        vertical={isMobile ? false : true}
        showContent={true}
        contentImage="/assets/images/apps/home/about-us-1.png"
        bottomBackgroundColor={theme.palette.timeline.secondary}
        bottomContent="Dec"
        showRRound={isMobile ? false : true}
        showBRound={isMobile ? true : false}
      />
    </div>
  );
}

TimelineCardWrapper.propTypes = {
  vertical: PropTypes.bool,
  reverse: PropTypes.bool,
  contentImage: PropTypes.string,
  showContent: PropTypes.bool,
  bottomBackgroundColor: PropTypes.string,
  bottomContent: PropTypes.string,
  showLRound: PropTypes.bool,
  showRRound: PropTypes.bool,
};

TimelineCardWrapper.defaultProps = {
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

export default TimelineCardWrapper;
