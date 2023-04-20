import {
  LocationOnOutlined,
  PhoneOutlined,
  Language
} from '@mui/icons-material';
import { Grid, Stack, Box, Avatar, Typography } from '@mui/material';
// import { ModelStudent } from '@pdt/models/ctsv.student';
import { ECGCandidate, ECGCandidateCV } from '../../../models/ecg.candidate'
// import { getFileUrl } from '@pdt/utils/file-helper';
import React from 'react';
import Section from './Section';

const GeneralInfoSection = ({ data }: { data: ECGCandidateCV | null }) => {
  return (
    <Grid
      item
      xs={4}
      bgcolor="#212834"
      height="100%"
      flexGrow={1}
      color="white"
      p={2}
      borderRadius={5}
    >
      <Stack spacing={3}>
        <Box position="relative">
          <Avatar
            alt={data?.firstName}
            src={data?.avatar || ''}
            sx={{ height: '150px', width: '150px', mx: 'auto', mt: 2 }}
          />
        </Box>

        <Typography textAlign="center" fontSize={25} fontWeight="bold">
          {[data?.lastName, data?.firstName].join(' ')}
        </Typography>
        <Section
          title="About me"
          content={
            <Typography textAlign="justify" fontSize={12}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut enim
              velit rem facilis natus? Consectetur illum temporibus labore optio
              quaerat totam inventore dolor voluptatum a eligendi velit enim
              fugit sed pariatur, laboriosam nulla, eaque illo autem sint
              architecto alias. Minus ratione, sequi quod expedita suscipit
              debitis dolores. Vero, perferendis possimus!
            </Typography>
          }
        />

        <Section
          title="Follow me"
          content={
            <Stack spacing={1}>
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
              <Stack>
                <Typography textAlign="center" fontSize={12} fontWeight="bold">
                  Placeholder social
                </Typography>
                <Typography textAlign="center" fontSize={12}>
                  Placeholder link
                </Typography>
              </Stack>
            </Stack>
          }
        />

        <Section
          title="Contact me"
          content={
            <Stack spacing={1}>
              <Stack>
                <Typography textAlign="center" fontSize={12}>
                  <LocationOnOutlined color="secondary" />
                </Typography>
                <Typography textAlign="center" fontSize={12}>
                  {data?.address}
                </Typography>
              </Stack>

              <Stack>
                <Typography textAlign="center" fontSize={12}>
                  <PhoneOutlined color="secondary" />
                </Typography>
                <Typography textAlign="center" fontSize={12}>
                  {data?.phone}
                </Typography>
              </Stack>

              <Stack>
                <Typography textAlign="center" fontSize={12}>
                  <Language color="secondary" />
                </Typography>
                <Typography textAlign="center" fontSize={12}>
                  {data?.email}
                </Typography>
              </Stack>
            </Stack>
          }
        />
      </Stack>
    </Grid>
  );
};

export default GeneralInfoSection;
