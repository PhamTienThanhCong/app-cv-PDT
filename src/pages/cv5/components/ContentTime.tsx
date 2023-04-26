import { Stack } from "@mui/material";
import Section from "./Section";
import ContentListTime from "./ContentListTime";
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
                <ContentListTime key={`education-` + index} {...item} />
              ))}
            </Stack>
          }
        />
  );
}

export default ContentTime;