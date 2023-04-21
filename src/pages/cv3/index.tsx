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

const CV3 = (() => {
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
          '&::-webkit-scrollbar': { display: 'none' },
          backgroundColor: 'white',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '240px',
            backgroundColor: "#274256",
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 100,
              right: 0,
              overflow: 'hidden',
              width: '100%',
              height: '170px',
              backgroundColor: "#00B3E4",
              clipPath: "ellipse(65% 80% at 49% 100%)",
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 45,
                right: "-4px",
                width: '128%',
                height: '220px',
                backgroundColor: "white",
                clipPath: "ellipse(57% 89% at 56% 100%)",
                transform: "rotate(-6deg)",
              }}
            ></div>
          </div>
        </div>
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

export default CV3;
