import { Grid, Stack, Typography } from "@mui/material";

export default function ContentListTime(props: {
  title: string;
  subtitle?: string;
  description: string;
  startTime: string | Date | null;
  endTime?: string | Date | null;
}) {
  return (
    <Grid container>
      <Grid item xs={0.5} className="time-line">
        <div
          style={{
            width: "1px",
            height: "100%",
            backgroundColor: "#BAB9BF",
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "50%",
          }}
        />
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#BAB9BF",
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Grid>
      <Grid item xs={3.5}>
        <Stack spacing={0.5}>
          <Typography fontSize={14} fontWeight={600}>
            {props.title}
          </Typography>
          <Typography fontSize={12} color="#666666">
            {`${new Date(props.startTime as string).getFullYear()}-${new Date(
              props.endTime as string
            ).getFullYear()}`}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={8} paddingBottom={2} paddingLeft="5px">
        <Stack spacing={0.5}>
          <Typography fontSize={16} fontWeight={600}>{props.subtitle}</Typography>
          <Typography fontSize={12} textAlign="justify">
            {props.description}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
