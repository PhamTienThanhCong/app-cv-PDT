import PersonIcon from "@mui/icons-material/Person";
import { Grid, Stack, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import DescriptionIcon from "@mui/icons-material/Description";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import React from "react";
import Section from "./Section";
import "./style.css";
// import { ModelStudent } from '@pdt/models/ctsv.student';
import { ECGCandidateCV } from "../../../models/ecg.candidate";
import { TitleSection, ContentListTime } from "./HelperSection";

const AbilitySection = ({ data }: { data?: ECGCandidateCV | null }) => {
  return (
    <Grid item xs={8} bgcolor="#E7E7E7">
      <Stack spacing={3} ml={4} py={2} mr={1} mt={5}>
        <Section
          title={<TitleSection title="About me" icon={<PersonIcon />} />}
          content={
            <Stack spacing={2}>
              <Grid item>
                <Stack spacing={0.5}>
                  <Typography fontSize={12} color="#000000b0">
                    {data?.intro}
                  </Typography>
                </Stack>
              </Grid>
            </Stack>
          }
        />

        <Section
          title={
            <TitleSection title="EXPERIENCES" icon={<BusinessCenterIcon />} />
          }
          content={
            <Stack spacing={0}>
              {data?.experience?.map((item, index) => (
                <ContentListTime
                  key={`experience-` + index}
                  {...item}
                  width={`${
                    index === data?.experience?.length - 1 ? "0px" : "1px"
                  }`}
                />
              ))}
            </Stack>
          }
        />

        <Section
          title={<TitleSection title="Education" icon={<SchoolIcon />} />}
          content={
            <Stack spacing={0}>
              {data?.education?.map((item, index) => (
                <ContentListTime
                  key={`education-` + index}
                  {...item}
                  width={`${
                    index === data?.experience?.length - 1 ? "0px" : "1px"
                  }`}
                />
              ))}
            </Stack>
          }
        />

        <Section
          title={<TitleSection title="reference" icon={<DescriptionIcon />} />}
          content={
            <Grid container columnSpacing={10} rowSpacing={2}>
              <Grid item xs={6} pl={0}>
                <Stack>
                  <Typography fontSize={15} fontWeight={600}>
                    Nguyễn Hoàng Long
                  </Typography>
                  <Typography fontSize={12}>Director: Nguyen Hoang Long</Typography>
                  <Typography fontSize={12}>Phone: 0123456789</Typography>
                  <Typography fontSize={12}>Email: Long@gmail.com</Typography>
                </Stack>
              </Grid>

              <Grid item xs={6}>
                <Stack>
                  <Typography fontSize={15} fontWeight={600}>
                    Nguyễn Hoàng Long
                  </Typography>
                  <Typography fontSize={12}>Director: Nguyen Hoang Long</Typography>
                  <Typography fontSize={12}>Phone: 0123456789</Typography>
                  <Typography fontSize={12}>Email: Long@gmail.com</Typography>
                </Stack>
              </Grid>
            </Grid>
          }
        />
      </Stack>
    </Grid>
  );
};

export default AbilitySection;
