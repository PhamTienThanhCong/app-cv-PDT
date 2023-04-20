import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";

export function TitleSection(
    props: {
        title: string;
        icon: React.ReactNode;
    }
) {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }}>
            <Avatar sx={{ bgcolor: "#1095D7", width: "30px", height: "30px" }}>
                {props.icon}
            </Avatar>
            <Box ml="15px">
            <Typography fontSize="1.2rem" fontWeight={600}>
                {props.title}
            </Typography>
            <Divider sx={{ backgroundColor: "#1095D7", height: "1.5px", width: "445px" }} />
            </Box>
        </Stack>
    );
};

export function ContentListTime(
    props: {
        title: string;
        subtitle?: string;
        description: string;
        startTime: string | Date | null;
        endTime?: string | Date | null;
        width: string;
    }
){
    return(
        <Grid container>
            <Grid item xs={3.5} >
            <Stack spacing={0.5}>
                <Typography fontSize={14} fontWeight={600}>
                {props.title}
                </Typography>
                <Typography fontSize={12} color="#666666">
                {`${new Date(props.startTime as string).getFullYear()}-${new Date(props.endTime as string).getFullYear()}`}
                </Typography>
            </Stack>
            </Grid>
            <Grid item xs={0.5} className="time-line">
            <div className="vertical-line" style={{
                width: props.width,
            }}/>
            <div className="circle-dot" />
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