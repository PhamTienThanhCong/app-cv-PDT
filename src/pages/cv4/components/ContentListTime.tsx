import { Grid, Stack, Typography } from "@mui/material";

export default function ContentListTime(
    props: {
        title: string;
        subtitle?: string;
        description: string;
        startTime: string | Date | null;
        endTime?: string | Date | null;
    }
){
    return(
        <Grid container>
            <Grid item xs={4} >
            <Stack spacing={0.5}>
                <Typography fontSize={14} fontWeight={600}>
                {props.title}
                </Typography>
                <Typography fontSize={12} color="#666666">
                {`${new Date(props.startTime as string).getFullYear()}-${new Date(props.endTime as string).getFullYear()}`}
                </Typography>
            </Stack>
            </Grid>
            <Grid item xs={8} paddingBottom={2} paddingLeft="5px">
            <Stack spacing={0.5}>
                <Typography fontSize={16}>
                {props.subtitle}
                </Typography>
                <Typography fontSize={12} textAlign="justify">
                {props.description}
                </Typography>
            </Stack>
            </Grid>
        </Grid>
    )
}