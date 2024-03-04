import React, {useState} from 'react'
import { 
    Modal,
    Box,
    Typography,
    Grid
 } from '@mui/material'
 import { IoWarningOutline } from "react-icons/io5";
 import { styled } from '@mui/material/styles';
 import { StyledButton } from './ProjectForm';
 import { Link } from 'react-router-dom';


 const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


 export default function ChangesModal({open, onClose, handleClose}) {
    return (
      
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{textAlign: 'center'}} id="modal-modal-title" variant="h4" component="h3">
            <IoWarningOutline color="red" />
         </Typography>

          <Typography sx={{textAlign: 'center'}} id="modal-modal-title" variant="h4" component="h4">
           Wait! You made some changes.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to exit without saving?
          </Typography>
            <Grid direction="column" spacing={3} container alignContent="center" sx={{ my: 3 }}>
            <Grid item xs="auto">
              <StyledButton
               component={Link}
                to="/projects"
               variant="secondary"
                cursor="pointer"
                
              >
                Yes
              </StyledButton>
            </Grid>
            <Grid item xs="auto">
              <StyledButton
                type="submit"
                form="project-form"
                cursor="pointer"
                 variant="contained"
                onClick={handleClose}
                // disabled={isEdit ? !editMode : false}
              >
                No
              </StyledButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    )
 }