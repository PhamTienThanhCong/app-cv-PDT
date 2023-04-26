import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";

const Section = ({
  title,
  content,
  icon,
  section = 1,
}: {
  icon?: ReactNode;
  title: ReactNode;
  content: ReactNode;
  section?: number;
}) => {
  const titleStyle = {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: 500,
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
        {section === 1 ? (
          <>
            <div
              style={{
                width: "286px",
                margin: "25px 0",
                marginLeft: "-24px",
                textAlign: "center",
                position: "relative",
                zIndex: "999",
              }}
            >
              <div
                style={{
                  backgroundColor: "#D58401",
                  position: "absolute",
                  width: "286px",
                  top: "0",
                  left: "0",
                }}
              >
                <Typography
                  sx={{...titleStyle}}
                  style={{ color: "#fff", padding: "10px 0 10px 0px" }}
                >
                  {title}
                </Typography>
              </div>
              <Typography
                sx={{...titleStyle}}
                style={{ color: "#fff", padding: "10px 0 10px 0px" }}
              >
                {title}
              </Typography>
            </div>
          </>
        ) : (
          <Typography
            textTransform="uppercase"
            fontSize={section === 2 ? 17 : 25}
            fontWeight={600}
            letterSpacing="1px"
          >
            {title}
          </Typography>
        )}
      </Stack>
      {content}
    </Box>
  );
};
export default Section;
