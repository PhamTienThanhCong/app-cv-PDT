import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Grid, Stack, Box, Avatar, Typography, LinearProgress } from "@mui/material";
// import { ModelStudent } from '@pdt/models/ctsv.student';
import { ECGCandidateCV } from "../../../models/ecg.candidate";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import { getFileUrl } from '@pdt/utils/file-helper';
import React from "react";
import Section from "./Section";

const GeneralInfoSection = ({ data }: { data: ECGCandidateCV | null }) => {
  const styleIcon = {
    bgcolor: "#00B3E4",
    width: "30px",
    height: "30px",
    color: "#fff",
  };
  const styleStack = {
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  };
  return (
    <Grid
      item
      xs={4}
      bgcolor="transparent"
      height="100%"
      flexGrow={1}
      color="black"
      borderRadius={5}
      position={"relative"}
    >
      <Stack spacing={3}>
        <Box position="relative">
          <Avatar
            alt={data?.firstName}
            src={data?.avatar || ""}
            sx={{ height: "180px", width: "180px", mx: "auto", mt: 2 }}
            style={{ border: "5px solid white" }}
          />
        </Box>
        <Section
          title="contact"
          content={
            <Stack spacing={2} mt="10px">
              <Stack
                sx={{ ...styleStack }}
              >
                <Avatar sx={{ ...styleIcon }}>
                  <EmailOutlinedIcon />
                </Avatar>
                <Typography fontSize={14}>{data?.email}</Typography>
              </Stack>

              <Stack
                sx={{ ...styleStack }}
              >
                <Avatar sx={{ ...styleIcon }}>
                  <PhoneOutlinedIcon />
                </Avatar>
                <Typography fontSize={14}>{data?.phone}</Typography>
              </Stack>

              <Stack
                sx={{ ...styleStack }}
              >
                <Avatar sx={{ ...styleIcon }}>
                  <LocationOnOutlinedIcon />
                </Avatar>
                <Typography fontSize={14}>{data?.address}</Typography>
              </Stack>
            </Stack>
          }
        />

        <Section
          title="SKILL"
          content={
            <Stack spacing={1} mt={1}>
              {data?.skills.map((skill, index) => (
                <Stack
                key={`skill` + index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontSize={14} width="30%">
                  {skill.name}
                </Typography>
                <Box width="60%">
                  <LinearProgress
                    variant="determinate"
                    value={100}
                    sx={{ height: "10px", borderRadius: "5px", bgcolor: "transparent", width: `${skill.level}0%`, color: "#00B3E6" }}
                  />
                </Box>
              </Stack>
              ))}
            </Stack>
          }
        />
      </Stack>
    </Grid>
  );
};

export default GeneralInfoSection;
