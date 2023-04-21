import DescriptionIcon from '@mui/icons-material/Description';
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import React from "react";
import Section from "./Section";
// import { ModelStudent } from '@pdt/models/ctsv.student';
import { ECGCandidateCV } from "../../../models/ecg.candidate";
import ContentListTime from "./ContentListTime";

const AbilitySection = ({ data }: { data?: ECGCandidateCV | null }) => {
  const styleIcon = {
    bgcolor: "transparent",
    width: "30px",
    height: "30px",
    color: "#fff",
  };
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
          content={
            <Stack spacing={1} mt={2}>
              <Typography fontSize={13}>{data?.intro}</Typography>
            </Stack>
          }
        />
      </Stack>
      <Stack spacing={3} ml={4} py={2} mr={1}>
        <Section
          title="Education"
          content={
            <Stack spacing={2}>
              {data?.education?.map((item, index) => (
                <ContentListTime key={`education-` + index} {...item} />
              ))}
            </Stack>
          }
        />
        <Section
          title="Experience"
          content={
            <Stack spacing={2}>
              {data?.experience?.map((item, index) => (
                <ContentListTime key={`education-` + index} {...item} />
              ))}
            </Stack>
          }
        />
        <Section
          title={'reference'}
          icon={
            <Avatar sx={{ ...styleIcon }}>
              <DescriptionIcon />
            </Avatar>
          }
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
