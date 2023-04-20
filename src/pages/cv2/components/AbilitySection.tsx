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
  const styleIcon = () => ({
    bgcolor: "#35343A",
    width: "30px",
    height: "30px",
    color: "#fff",
  });
  return (
    <Grid item xs={8} bgcolor="#E3E2E8" position="relative">
      <div
        style={{
          position: "absolute",
          top: "35px",
          right: "0",
          width: "235px",
          height: "50px",
          backgroundColor: "#1976d2",
          clipPath: "polygon(0px 1%, 100% 0px, 100% 100%, 35% 100%)",
        }}
      ></div>
      <div
        style={{
          height: "60px",
          width: "100%",
          marginBottom: "30px",
          backgroundColor: "#35343A",
          clipPath: "polygon(0px 1%, 100% 0px, 100% 100%, 17% 100%)",
        }}
      ></div>
      <Stack ml={4} py={2} mr={1}>
        <Typography fontSize={30} fontWeight="bold" textTransform="uppercase">
          <span style={{ color: "#35343A" }}>{data?.lastName}</span>{" "}
          <span style={{ color: "#1976d2" }}>{data?.firstName}</span>
        </Typography>
        <Typography
          fontSize={15}
          fontWeight={500}
          textTransform="uppercase"
          color="#222"
        >
          {data?.majorName}
          Font-end Developer
        </Typography>
      </Stack>
      <Stack ml={4} py={2} mr={1}>
        <Section
          title="about me"
          icon={
            <Avatar sx={{ ...styleIcon() }}>
              <PersonIcon />
            </Avatar>
          }
          content={
            <Stack spacing={1} mt={2}>
              <Typography fontSize={13}>{data?.intro}</Typography>
            </Stack>
          }
        />
      </Stack>
      <Stack spacing={3} ml={4} py={2} mr={1}>
        <Section
          dividerColor="#b9b9b9"
          icon={
            <Avatar sx={{ ...styleIcon() }}>
              <SchoolIcon />
            </Avatar>
          }
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
          icon={
            <Avatar sx={{ ...styleIcon() }}>
              <BusinessCenterIcon />
            </Avatar>
          }
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
            <Avatar sx={{ ...styleIcon() }}>
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
