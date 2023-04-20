import {
  BusinessCenter,
} from "@mui/icons-material";
import {
  Grid,
  Stack,
  Box,
  Avatar,
  Typography,
  Badge,
  Rating,
} from "@mui/material";
// import { ModelStudent } from '@pdt/models/ctsv.student';
import { ECGCandidateCV } from "../../../models/ecg.candidate";
import SettingsIcon from '@mui/icons-material/Settings';
import CircleIcon from '@mui/icons-material/Circle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
// import { getFileUrl } from '@pdt/utils/file-helper';
import React from "react";
import Section from "./Section";

const GeneralInfoSection = ({ data }: { data: ECGCandidateCV | null }) => {

  const styleIcon = () => ({
    bgcolor: "#FCFBFF",
    width: "30px",
    height: "30px",
    color: "#141319",
  });

  return (
    <Grid
      item
      xs={4}
      bgcolor="#E3E2E8"
      height="100%"
      flexGrow={1}
      color="white"
      borderRadius={5}
      position={"relative"}
    >
      <Stack spacing={3}>
        <Box position="relative">
          <Badge
            color="secondary"
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent=""
            sx={{
              "& .MuiBadge-badge": {
                color: "lightgreen",
                backgroundColor: "#1976d2",
              },
              mx: "auto",
              display: "block",
              width: "206px",
              height: "206px",
            }}
          >
            <Avatar
              alt={data?.firstName}
              // src={data?.avatar || ''}
              src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png"
              sx={{ height: "180px", width: "180px" }}
              style={{ padding: "12px", border: "3px solid #1976d2" }}
            />
          </Badge>
        </Box>
        <div
          style={{
            position: "absolute",
            top: "245px",
            left: "0",
            width: "100px",
            height: "100px",
            backgroundColor: "#1976d2",
            clipPath: "polygon(0px 61%, 100% 6%, 100% 99%, 0% 100%)",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#35343A",
            padding: "16px",
            minHeight: "23.5cm",
            clipPath: "polygon(0 16%, 100% 0, 100% 100%, 0% 100%)",
            margin: "0",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "150px",
              position: "relative",
            }}
          ></div>
          <Section
            icon={
              <Avatar
                sx={{...styleIcon()}}
              >
                <BusinessCenter />
              </Avatar>
            }
            title="contact"
            content={
              <Stack spacing={2} mt="20px" mb={6}>
                <Stack spacing="5px">
                  <Typography fontSize={13} color="#0b82f9">
                    Address
                  </Typography>
                <Typography fontSize={12}>{data?.address}</Typography>
                </Stack>

                <Stack spacing="5px">
                  <Typography fontSize={13} color="#0b82f9">
                    Phone
                  </Typography>
                  <Typography fontSize={12}>{data?.phone}</Typography>
                </Stack>

                <Stack spacing="5px">
                  <Typography fontSize={13} color="#0b82f9">
                    Email
                  </Typography>
                  <Typography fontSize={12}>{data?.email}</Typography>
                </Stack>
              </Stack>
            }
          />

          <Section
            title="SOFTWARE SKILL"
            icon={
              <Avatar
                sx={{...styleIcon()}}
              >
                <SettingsIcon />
              </Avatar>
            }
            content={
              <Stack spacing={1} mt={3}>
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
                    <Typography fontSize={14} width="50%">
                      {skill.name}
                    </Typography>
                    <Box width="50%">
                      <Rating name="read-only" 
                        value={skill?.level ? Math.round(skill.level / 2) : 0} 
                        icon={<CircleIcon style={{ color: "white", fontSize: "19px" }}/>}
                        emptyIcon={<PanoramaFishEyeIcon style={{ color: "white", fontSize: "19px" }} />}
                        readOnly 
                      />
                    </Box>
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
