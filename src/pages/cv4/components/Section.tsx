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
          <Typography
            textTransform="uppercase"
            fontSize={20}
            fontWeight={500}
            letterSpacing="1px"
          >
            {title}
          </Typography>
        ) : (
          <>
            <div
              style={{
                backgroundColor: "#274256",
                width: "200px",
              }}
            >
              <Typography
                textTransform="uppercase"
                fontSize={20}
                fontWeight={500}
                letterSpacing="1px"
                style={{ color: "#fff", padding: "10px 0 10px 20px" }}
              >
                {title}
              </Typography>
            </div>
            <div
              style={{
                width: "150px",
                height: "50px",
                margin: 0,
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#01B2E4",
                  clipPath: "ellipse(100% 99% at 0% 99%)",
                }}
              ></div>
              <div
                style={{
                  width: "80%",
                  height: "100%",
                  backgroundColor: "#274256",
                  clipPath: "ellipse(100% 99% at 0% 99%)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              ></div>
            </div>
          </>
        )}
      </Stack>
      {content}
    </Box>
  );
};
export default Section;
