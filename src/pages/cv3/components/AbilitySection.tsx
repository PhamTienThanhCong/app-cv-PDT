import { Grid, Stack, Typography } from "@mui/material";
import Section from "./Section";
// import { ModelStudent } from '@pdt/models/ctsv.student';
import { ECGCandidateCV } from "../../../models/ecg.candidate";
import ContentTime from "./ContentTime";

const AbilitySection = ({ data }: { data?: ECGCandidateCV | null }) => {

  return (
    <Grid item xs={8} bgcolor="transparent" position="relative">
      <Stack ml={4} py={2} mr={1} mb={8}>
        <Typography fontSize={32} fontWeight="bold" textTransform="uppercase">
          <span style={{ color: "#19B0DA" }}>{data?.lastName}</span>{" "}
          <span style={{ color: "#F7FEF8" }}>{data?.firstName}</span>
        </Typography>
        <Typography
          fontSize={20}
          fontWeight={500}
          textTransform="uppercase"
          color="#F7FEF8"
        >
          {data?.majorName}
          Font-end Developer
        </Typography>
      </Stack>
      <Stack ml={4} py={2} mr={1}>
        <Section
          title="about me"
          section={2}
          content={
            <Stack spacing={1} mt={2}>
              <Typography fontSize={13}>{data?.intro}</Typography>
            </Stack>
          }
        />
      </Stack>
      <Stack spacing={3} ml={4} py={2} mr={1}>
        <ContentTime title="education" data={data}/>
        <ContentTime title="experience" data={data}/>
      </Stack>
    </Grid>
  );
};

export default AbilitySection;
