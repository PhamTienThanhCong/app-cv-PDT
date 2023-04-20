import {
  Grid,
  Stack,
  Box,
  Avatar,
  Typography,
  LinearProgress,
} from "@mui/material";
// import { ModelStudent } from '@pdt/models/ctsv.student';
import { ECGCandidateCV } from "../../../models/ecg.candidate";
// import { getFileUrl } from '@pdt/utils/file-helper';
import Section from "./Section";

const GeneralInfoSection = ({ data }: { data: ECGCandidateCV | null }) => {
  const widthOfAvatar = 264.556;
  const heightOfAvatar = widthOfAvatar * 0.85;
  return (
    <Grid
      item
      xs={4}
      bgcolor="#303136"
      height="100%"
      flexGrow={1}
      color="white"
      // borderRadius={5}
    >
      <Box position="relative">
        <Avatar
          alt={data?.firstName}
          src={data?.avatar || ""}
          sx={{
            width: widthOfAvatar,
            height: heightOfAvatar,
            borderRadius: "0",
          }}
        />
      </Box>
      <Stack spacing={3} p={2}>
        <Typography textAlign="center" fontSize={25} fontWeight="bold">
          {[data?.lastName, data?.firstName].join(" ")}
        </Typography>

        <Section
          title="Contact"
          dividerColor="#1095D7"
          content={
            <Stack mt={3} spacing={1}>
              <Stack>
                <Typography fontSize={13} fontWeight={600}>
                  Address
                </Typography>
                <Typography fontSize={12}>{data?.address}</Typography>
              </Stack>

              <Stack>
                <Typography fontSize={13} fontWeight={600}>
                  Phone
                </Typography>
                <Typography fontSize={12}>{data?.phone}</Typography>
              </Stack>

              <Stack>
                <Typography fontSize={13} fontWeight={600}>
                  Email
                </Typography>
                <Typography fontSize={12}>{data?.email}</Typography>
              </Stack>
            </Stack>
          }
        />

        <Section
          title="Follow me"
          dividerColor="#1095D7"
          content={
            <Stack spacing={1} mt={3} >
              {/* {formik.values.links?.map((e, idx) => (
                    <Stack key={idx}>
                      <Typography
                        textAlign="center"
                        fontSize={12}
                        fontWeight="bold"
                      >
                        {e.label}
                      </Typography>
                      <Typography textAlign="center" fontSize={12}>
                        {e.link}
                      </Typography>
                    </Stack>
                  ))} */}
              {data?.links.map((link, index) => (
                <Stack key={index}>
                  <Typography fontSize={12} fontWeight="bold">
                    {link.label}
                  </Typography>
                  <Typography fontSize={12}>{link.link}</Typography>
                </Stack>
              ))}
            </Stack>
          }
        />

        <Section
          title="Skills"
          dividerColor="#1095D7"
          content={
            <Stack spacing={1} mt={3} >
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
                      value={skill.level}
                      sx={{ height: "10px" }}
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
