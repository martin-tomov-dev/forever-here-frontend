import TimelineCardWrapper from "../../../components/TimelineCardWrapper/TimelineCardWrapper";
import Typography from "@mui/material/Typography";

function Timeline() {
  return (
    <div>
      <Typography className="text-24 pt-40 md:text-28 text-center font-bold">
        <span className="text-secondary">Timeline</span>
      </Typography>
      <div className="w-full grid grid-cols-12 py-5 pb-40">
        <div className="col-span-3 md:col-span-4 flex items-center">
          <div className="w-full border-t-4" />
        </div>
        <div className="col-span-6 md:col-span-4">
          <Typography className="text-[24px] text-center font-bold">
            <span className="text-[#3E716C]">SYDNEY'S MILESTONES</span>
          </Typography>
        </div>
        <div className="col-span-3 md:col-span-4 flex items-center">
          <div className="w-full border-t-4" />
        </div>
      </div>
      <TimelineCardWrapper />
    </div>
  );
}

export default Timeline;
