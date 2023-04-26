import { Grid, Stack, Typography } from "@mui/material";
import Section from "./Section";
// import { ModelStudent } from '@pdt/models/ctsv.student';
import { ECGCandidateCV } from "../../../models/ecg.candidate";
import ContentTime from "./ContentTime";
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const AbilitySection = ({ data }: { data?: ECGCandidateCV | null }) => {

  return (
    <Grid item xs={8} bgcolor="transparent" position="relative">
      <Stack ml={12} py={2} mr={1} mb={15} mt={7}>
        <Typography fontSize={42} fontWeight="bold" textTransform="uppercase">
          {data?.lastName} {data?.firstName}
        </Typography>
        <Typography
          fontSize={20}
          fontWeight={500}
          textTransform="uppercase"
          color="#999999"
        >
          {data?.majorName}
          Font-end Developer
        </Typography>
      </Stack>
      <Stack ml={4} py={2} mr={1}>
        <Section
          title="about me"
          section={3}
          content={
            <Stack spacing={1} mt={2}>
              <Typography fontSize={13}>{data?.intro}</Typography>
            </Stack>
          }
        />
      </Stack>
      <Stack spacing={5} ml={4} py={2} mr={1}>
        <ContentTime icon={<SchoolIcon/>} title="education" data={data}/>
        <ContentTime icon={<BusinessCenterIcon/>} title="experience" data={data}/>
      </Stack>
    </Grid>
  );
};

export default AbilitySection;
