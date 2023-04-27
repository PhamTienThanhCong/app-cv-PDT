import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface SectionProps {
  icon?: ReactNode;
  title: ReactNode;
  content: ReactNode;
  section?: number;
}

const Section = ({ title, content, icon, section = 1 }: SectionProps) => {
  const titleStyle = {
    textTransform: "uppercase",
    fontSize: section === 2 ? 17 : 25,
    fontWeight: section === 2 ? 600 : 500,
    letterSpacing: "1px",
    lineHeight: 1,
  };

  return (
    <Box>
      <Stack
        direction="row"
        spacing={1}
        justifyContent={section === 1 ? "center" : "flex-start"}
        alignItems="center"
        mb="10px"
      >
        {icon}
        <Typography sx={{ ...titleStyle }} textTransform="uppercase">
          {title}
        </Typography>
      </Stack>
      {content}
    </Box>
  );
};

export default Section;
