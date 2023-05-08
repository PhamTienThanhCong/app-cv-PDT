import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";

interface SectionProps {
  icon?: ReactNode;
  title: ReactNode;
  content: ReactNode;
  section?: number;
}

const Section = ({ title, content, icon, section = 1 }: SectionProps) => {
  const titleStyle = {
    textTransform: "uppercase",
    fontSize: 17,
    fontWeight: 600,
    letterSpacing: "1px",
    lineHeight: 1,
    float: "left",
  };

  return (
    <Box mt={section === 1 ? 3 : 0}>
      <Stack
        direction="row"
        spacing={1}
        justifyContent={"flex-start"}
        alignItems="center"
        mb="10px"
      >
        <SignalCellular4BarIcon sx={{ fontSize: 20, mr: 1, color: "#27D5F7" }} />
        <Typography sx={{ ...titleStyle }} textTransform="uppercase">
          {title}
        </Typography>
      </Stack>
      {content}
    </Box>
  );
};

export default Section;
