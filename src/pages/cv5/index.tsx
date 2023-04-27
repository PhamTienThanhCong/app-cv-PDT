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
      <Grid container height="100%">
        <AbilitySection data={candidate} />

        <GeneralInfoSection data={candidate} />
      </Grid>
    </Box>
  );
};

export default CV5;
