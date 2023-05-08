import { Box, Stack, Typography } from "@mui/material";
import Section from "./Section";
import { ECGCandidateCV } from "../../../models/ecg.candidate";
import { ReactNode } from "react";

function ContentTime(props : {
  data?: ECGCandidateCV | null,
  title: string,
  icon: ReactNode
}
// default props
) {
  let data = [];
  if (!props.data) return null;
  if (props.title === "education") {
    data = props.data.education ? props.data.education : [];
  }else{
    data = props.data.experience
  }

  return (
    <Section
          title={props.title}
          section={2}
          icon={props.icon}
          content={
            <Stack spacing={0}>
              {data.map((item, index) => (
                <Stack key={index} spacing={0} mb={2}>
                  <Typography fontSize={16} fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Stack direction="row" justifyContent="space-between" color={"#4BAAFF"}>
                    <Typography fontSize={13} fontWeight={600}>
                      {item.subtitle}
                    </Typography>
                    <Typography fontSize={13} fontWeight={600}>
                      {item.startTime ? item.startTime.toString() : ""}
                      {item.endTime ? " -> " + item.endTime.toString() : ""}
                    </Typography>
                  </Stack>
                  <Typography fontSize={13}>
                    {item.description}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          }
        />
  );
}

export default ContentTime;