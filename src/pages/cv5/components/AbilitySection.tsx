import { Grid, Stack, Typography } from "@mui/material";
import Section from "./Section";
// import { ModelStudent } from '@pdt/models/ctsv.student';
import { ECGCandidateCV } from "../../../models/ecg.candidate";
import ContentTime from "./ContentTime";
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const AbilitySection = ({ data }: { data?: ECGCandidateCV | null }) => {

  return (
    <Grid item xs={7} bgcolor="transparent" position="relative">
      <Stack ml={2} py={2} mr={1} mb={0} mt={5} height={133}>
        <Typography fontSize={55} fontWeight="bold" textTransform="uppercase" lineHeight={1.2}>
          {data?.lastName} {data?.firstName}
        </Typography>
      </Stack>
      <div
        style={{
          width: "105%",
          backgroundColor: "#37BFF9",
          transform: "translateX(-20px)",
          padding: "10px 30px",
          paddingRight: "10px",
          position: "relative",
          marginBottom: "30px",
        }}
      >
        <Typography
          fontSize={30}
          fontWeight={400}
          textTransform="uppercase"
          color="white"
        >
          {data?.majorName}
          Font-end Developer
        </Typography>
        <div
          style={{
            width: "70px",
            height: "70px",
            backgroundColor: "#37BFF9",
            position: "absolute",
            left: "-0px",
            clipPath: "polygon(100% 0, 0 0, 0 100%)"
          }}
        ></div>
      </div>
      <Stack mr={4} py={2} ml={1}>
        <Section
          title="profile"
          section={3}
          content={
            <Stack spacing={1} mt={2}>
              <Typography fontSize={14}>{data?.intro}</Typography>
            </Stack>
          }
        />
      </Stack>
      <Stack spacing={3} mr={4} py={2} ml={1}>
        <ContentTime icon={<SchoolIcon/>} title="education" data={data}/>
        <ContentTime icon={<BusinessCenterIcon/>} title="experience" data={data}/>
      </Stack>
      <div
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: "#014FA2",
          position: "absolute",
          left: "-20px",
          bottom: "-20px",
          clipPath: "polygon(0 100%, 0 0, 100% 100%)"
        }}
      ></div>
    </Grid>
  );
};

export default AbilitySection;
