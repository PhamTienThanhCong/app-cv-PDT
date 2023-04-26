import { Box, Grid } from "@mui/material";
import React from // forwardRef,
// useContext,
// useLayoutEffect,
// useState
"react";
// import EditDialog, { EditDialogProps } from '../EditDialog';
import GeneralInfoSection from "./components/GeneralInfoSection";
import AbilitySection from "./components/AbilitySection";
import { data1 } from "../../data/cvs";
import { ECGCandidateCV } from "../../models/ecg.candidate";

const CV5 = () => {
  const candidate: ECGCandidateCV = data1;
  document.title = `CV example`;
  // const [editDialog, setEditDialog] = useState<EditDialogProps>({
  //   open: false,
  //   data: null
  // });

  // useLayoutEffect(() => {
  //   if (isEdit) setEditDialog({ data: candidate, open: isEdit });
  // }, [isEdit]);

  // console.log(candidate);

  return (
    <Box
      // ref={ref}
      className="a4"
      overflow="auto"
      sx={{
        "&::-webkit-scrollbar": { display: "none" },
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "calc(100% - 40px )",
          height: "300px",
          backgroundColor: "#E3E3E3",
          position: "absolute",
          top: "20px",
          left: "20px",
          clipPath:
            "polygon(0px 0px, 100% 0px, 100% 86%, 73% 94%, 18% 80%, 0px 85%)",
        }}
      >
        <div
          style={{
            width: "223px",
            height: "150px",
            position: "absolute",
            bottom: "17px",
            right: "0",
            backgroundColor: "#D58401",
            clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
          }}
        ></div>
      </div>
      <Grid container height="100%">
        <GeneralInfoSection data={candidate} />

        <AbilitySection data={candidate} />
      </Grid>
    </Box>
  );
};

export default CV5;
