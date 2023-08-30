import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  bottom: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 410,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
   
  p: 6,
};

export default function BasicModal(props) {
  const [status, setstatus] = useState("yes")
  let { open, title, closed, body , state } = props

  const handleClose = () => { 
    closed(false)
  }
  const handleYes = () => { 
  state(status)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 className='text-center' id="modal-modal-title" variant="h6" component="h2">
            {title}
          </h3>
          <h4 className='text-center py-1' id="modal-modal-description" sx={{ mt: 2 }}>
            {body}
          </h4>
          <button className="m-btn mt-3" onClick={handleClose} >OK</button>   

        </Box>
      </Modal>
    </div>
  );
}