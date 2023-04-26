import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Grid, Stack, Box, Avatar, Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import { ModelStudent } from '@pdt/models/ctsv.student';
import { ECGCandidateCV } from "../../../models/ecg.candidate";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LanguageIcon from '@mui/icons-material/Language';
// import { getFileUrl } from '@pdt/utils/file-helper';
import React from "react";
import Section from "./Section";
import zIndex from "@mui/material/styles/zIndex";

const GeneralInfoSection = ({ data }: { data: ECGCandidateCV | null }) => {
  const styleStack = {
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    paddingRight: "10px",
    zIndex: 999,
  };
  return (
    <Grid
      item
      xs={4}
      bgcolor="transparent"
      height="100%"
      flexGrow={1}
      color="white"
      borderRadius={5}
      position={"relative"}
    >
      <div
        style={{
          width: "calc(100% - 10px)",
          position: "relative",
          minHeight: "1085px",
          backgroundColor: "#32353A",
          zIndex: "1",
          padding: "20px",
          paddingRight: "0px",
          borderRight: "6px solid #ccc"
        }}
      >
        <div
            style={{
              position: "absolute",
              width: "50%",
              height: "100%",
              top: "0",
              left: "50%",
              backgroundColor: "#3C3F44",
              // borderRight: "2px solid #ccc",
            }}
          ></div>
      <Stack spacing={3} zIndex={3}>
        <Box position="relative" mb={5}>
          <div style={{
            width: "calc(100% + 85px)",
            height: "260px",
            position: "absolute",
            top: "-20px",
            left: "-20px",
            backgroundColor: "#282B30",
            clipPath: "polygon(81% 0%, 100% 50%, 80.5% 98%, 40% 93%, 0% 100%, 0% 0%)"
          }}>
          </div>
          <Avatar
            alt={data?.firstName}
            src={data?.avatar || ""}
            sx={{ height: "180px", width: "180px", mx: "auto", mt: 1 }}
          />
        </Box>
        <Section
          title="contact"
          content={
            <Stack spacing={3 } mt="10px">
              <Stack
                sx={{ ...styleStack }}
              >
                <EmailOutlinedIcon />
                <Typography fontSize={16}>{data?.email}</Typography>
              </Stack>

              <Stack
                sx={{ ...styleStack }}
              >
                <PhoneOutlinedIcon />
                <Typography fontSize={16}>{data?.phone}</Typography>
              </Stack>

              <Stack
                sx={{ ...styleStack }}
              >
                <LocationOnOutlinedIcon />
                <Typography fontSize={16}>{data?.address}</Typography>
              </Stack>

              <Stack
                sx={{ ...styleStack }}
              >
                <LanguageIcon />
                <Typography fontSize={16}>{data?.links[0].link}</Typography>
              </Stack>
            </Stack>
          }
        />

        <Section
          title="skills"
          content={
            <Stack spacing={3 } mt="10px">
              {data?.skills.map((skill, index) => ( 
                <Stack
                  sx={{ ...styleStack }}
                >
                  <FiberManualRecordIcon sx={{
                    fontSize: "15px"
                  }} />
                  <Typography fontSize={16}>{skill.name}</Typography>
                </Stack>
              ))}
        
            </Stack>
          }
        />
        <Section
          title="langues"
          content={
            <Stack spacing={3 } mt="10px"> 
              <Stack
                sx={{ ...styleStack }}
              >
                <FiberManualRecordIcon sx={{
                  fontSize: "15px"
                }} />
                <Typography fontSize={16}>
                  Tiếng Việt
                </Typography>
              </Stack>
            </Stack>
          }
        />
      </Stack>
      </div>
    </Grid>
  );
};

export default GeneralInfoSection;
