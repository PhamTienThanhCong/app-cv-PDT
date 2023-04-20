import { Box, Grid } from '@mui/material';
import React, {
  // forwardRef,
  // useContext,
  // useLayoutEffect,
  // useState
} from 'react';
// import EditDialog, { EditDialogProps } from '../EditDialog';
import GeneralInfoSection from './components/GeneralInfoSection';
import AbilitySection from './components/AbilitySection';
import { data1 } from '../../data/cvs';
import { ECGCandidateCV } from '../../models/ecg.candidate';

const CV = (() => {
    const candidate:ECGCandidateCV = data1;
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
          '&::-webkit-scrollbar': { display: 'none' }
        }}
      >
        <Grid container height="100%">
          <GeneralInfoSection data={candidate} />

          <AbilitySection data={candidate} />
        </Grid>

        {/* <EditDialog
          {...editDialog}
          handleClose={() => {
            setEditDialog?.({
              open: false,
              data: null
            });
            setEditing(false);
          }}
        /> */}
      </Box>
    );
  }
);

export default CV;
