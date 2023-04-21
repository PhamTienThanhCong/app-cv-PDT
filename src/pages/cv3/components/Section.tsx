import { Box, Stack, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

const Section = ({
  title,
  content,
  icon,
  dividerColor = '#208BB6'
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
        alignItems="center"
        mb="10px"
      >
        {icon}
        <Typography textTransform="uppercase" fontSize={20} fontWeight={500} letterSpacing="1px">
          {title}
        </Typography>
      </Stack>

      {/* <Divider sx={{ backgroundColor: dividerColor, height: 1.5, my: 1 }} /> */}

      {content}
    </Box>
  );
};
export default Section;
