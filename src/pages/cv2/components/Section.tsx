import { Box, Stack, Typography, Divider } from '@mui/material';
import React, { ReactNode } from 'react';

const Section = ({
  title,
  content,
  icon,
  dividerColor = 'white'
}: {
  icon?: ReactNode;
  title: ReactNode;
  content: ReactNode;
  dividerColor?: string;
}) => {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={1}
        justifyContent={!icon ? 'center' : 'initial'}
      >
        {icon}
        <Typography textTransform="uppercase" fontWeight={600}>
          {title}
        </Typography>
      </Stack>

      <Divider sx={{ backgroundColor: dividerColor, height: 2, my: 1 }} />

      {content}
    </Box>
  );
};
export default Section;
