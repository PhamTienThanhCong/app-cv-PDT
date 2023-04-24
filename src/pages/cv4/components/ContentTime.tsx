import { Stack } from "@mui/material";
import Section from "./Section";
import ContentListTime from "./ContentListTime";
import { ECGCandidateCV } from "../../../models/ecg.candidate";

type ContentTimeProps = {
  title: string;
  subtitle?: string;
  description: string;
  startTime: string | Date | null;
  endTime?: string | Date | null;
}

function ContentTime(props : {
  data?: ECGCandidateCV | null,
  title: string,
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
          content={
            <Stack spacing={2}>
              {data.map((item, index) => (
                <ContentListTime key={`education-` + index} {...item} />
              ))}
            </Stack>
          }
        />
  );
}

export default ContentTime;