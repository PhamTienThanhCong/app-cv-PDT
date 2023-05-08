import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Grid, Stack, Box, Avatar, Typography, LinearProgress } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import { ModelStudent } from '@pdt/models/ctsv.student';
import { ECGCandidateCV } from "../../../models/ecg.candidate";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LanguageIcon from "@mui/icons-material/Language";
// import { getFileUrl } from '@pdt/utils/file-helper';
import React from "react";
import Section from "./Section";

const GeneralInfoSection = ({ data }: { data: ECGCandidateCV | null }) => {
  const styleStack = {
    flexDirection: "column",
    paddingRight: "10px",
    zIndex: 999,
  };
  return (
    <Grid
      item
      xs={5}
      bgcolor="transparent"
      height="100%"
      flexGrow={1}
      color="black"
      borderRadius={5}
      position={"relative"}
    >
      <Stack spacing={3} zIndex={3} position="relative">
        <Box position="relative" mb={5}>
          <div
            style={{
              position: "absolute",
              backgroundColor: "#34C4F8",
              top: -20,
              right: -41,
              width: "121%",
              height: "406px",
              clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            }}
          ></div>
          <Avatar
            variant="square"
            alt={data?.firstName}
            src={data?.avatar || ""}
            sx={{ height: "320px", width: "95%", mx: "auto", mt: 1, ml: 0 }}
          />
          <div
            style={{
              position: "absolute",
              backgroundColor: "#001135",
              top: -20,
              right: -20,
              width: "130px",
              height: "130px",
              clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              backgroundColor: "white",
              bottom: 0,
              left: -1,
              width: "60px",
              height: "60px",
              clipPath: "polygon(0 100%, 0 0, 100% 100%)",
            }}
          ></div>
        </Box>

        <div
          style={{
            backgroundColor: "#ECF5FE",
            width: "90%",
            minHeight: "700px",
            padding: "30px 15px",
            paddingTop: "0px",
            clipPath:
              "polygon(0px 0px, 85% 0px, 100% 8%, 100% 100%, 20% 100%, 0px 93%)",
          }}
        >
          <Section
            title="personal info"
            content={
              <Stack spacing={2} mt="10px" position="relative">
                {[
                  { label: "Email", value: data?.email },
                  { label: "Phone", value: data?.phone },
                  { label: "Address", value: data?.address },
                  { label: "Website", value: data?.links[0].link },
                ].map((item, index) => (
                  <Stack key={index} sx={{ ...styleStack }}>
                    <b>{item.label}</b>
                    <Typography fontSize={16}>{item.value}</Typography>
                  </Stack>
                ))}
              </Stack>
            }
          />


          <Section
            title="skills"
            content={
              <Stack spacing={3} mt="10px">
                {data?.skills.map((skill, index) => (
                  <Stack sx={{ ...styleStack }}>
                    <Typography fontSize={16}>{skill.name}</Typography>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level ? skill.level * 10 : 0}
                      sx={{ height: "10px", bgcolor: "#001135", width: `100%`, color: "#2BD1F9" }}
                    />
                  </Stack>
                ))}
              </Stack>
            }
          />
        </div>
      </Stack>
    </Grid>
  );
};

export default GeneralInfoSection;
