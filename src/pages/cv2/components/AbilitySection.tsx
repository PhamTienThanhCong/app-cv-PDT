import { BusinessCenter, School, SettingsSuggest } from '@mui/icons-material';
import { Grid, Stack, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';
import Section from './Section';
// import { ModelStudent } from '@pdt/models/ctsv.student';
import { ECGCandidateCV } from '../../../models/ecg.candidate';

const AbilitySection = ({ data }: { data?: ECGCandidateCV | null }) => {
  return (
    <Grid item xs={8}>
      <Stack spacing={3} ml={4} py={2} mr={1}>
        <Section
          dividerColor="#b9b9b9"
          icon={<BusinessCenter color="secondary" />}
          title="Experience"
          content={
            <Stack spacing={2}>
              <Grid container>
                <Grid item xs={4}>
                  <Stack spacing={0.5}>
                    <Typography fontSize={12} fontWeight={600}>
                      {new Date().getFullYear()}-{new Date().getFullYear()}
                    </Typography>
                    <Typography fontSize={12} fontWeight={600}>
                      Placeholder company
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={8}>
                  <Stack spacing={0.5}>
                    <Typography fontSize={12} textTransform="uppercase">
                      placeholder
                    </Typography>
                    <Typography fontSize={12} textAlign="justify">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eligendi sequi sunt quos ratione earum! Incidunt ad
                      dignissimos aliquam voluptas deserunt quidem rem
                      necessitatibus aut consequatur!
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          }
        />

        <Section
          dividerColor="#b9b9b9"
          icon={<School color="secondary" />}
          title="Education"
          content={
            <Stack spacing={2}>
              <Grid container>
                <Grid item xs={4}>
                  <Stack spacing={0.5}>
                    <Typography fontSize={12} fontWeight={600}>
                      {new Date().getFullYear()}-{new Date().getFullYear()}
                    </Typography>
                    <Typography fontSize={12} fontWeight={600}>
                      Placeholder school
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={8}>
                  <Stack spacing={0.5}>
                    <Typography fontSize={12} textTransform="uppercase">
                      placeholder
                    </Typography>
                    <Typography fontSize={12} textAlign="justify">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eligendi sequi sunt quos ratione earum! Incidunt ad
                      dignissimos aliquam voluptas deserunt quidem rem
                      necessitatibus aut consequatur!
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          }
        />

        <Section
          dividerColor="#b9b9b9"
          icon={<SettingsSuggest color="secondary" />}
          title="Skills"
          content={
            <Grid container columnSpacing={10} rowSpacing={2}>
              <Grid item xs={6} pl={0}>
                <Stack>
                  <Typography fontSize={14} textTransform="uppercase">
                    placeholder skill #1
                  </Typography>
                  <LinearProgress variant="determinate" value={75} />
                </Stack>
              </Grid>

              <Grid item xs={6}>
                <Stack>
                  <Typography fontSize={14} textTransform="uppercase">
                    placeholder skill #2
                  </Typography>
                  <LinearProgress variant="determinate" value={75} />
                </Stack>
              </Grid>
            </Grid>
          }
        />
      </Stack>
    </Grid>
  );
};

export default AbilitySection;
