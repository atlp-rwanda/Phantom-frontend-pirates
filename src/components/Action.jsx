
import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
function Action() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
      };
  return (
    <div><Box sx={{ width: 90 }} className='w-4'>
    <Popper open={open} anchorEl={anchorEl} placement={placement} transition >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <Typography sx={{ p: 2 }}>
            <div class="grid grid-cols-1 divide-y items-center p-4">
              <div>
                <p className='text-xl font-bold text-cyan-700'>Actions</p>
                <p className='text-sm'>Choose on of action</p>
              </div>
                <button type='button' 
                   className='flex text-base bg-white border-none text-slate-600 p-1'>
                  <PencilIcon className='w-5 h-5'/>
                  <p className='ml-4'>Update</p>
                </button>
              <button type='button'
                    className='flex bg-white border-none text-red-700 p-1'>
                <TrashIcon className='w-5 h-5 text-red-700'/>
                <p className='text-slate-600 ml-4'>Delete</p>
              </button>
            </div>
            </Typography>
          </Paper>
        </Fade>
      )}
    </Popper>
    <Grid container justifyContent="center">
        <Button onClick={handleClick('left-start')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </Button>
    </Grid>  
  </Box></div>
  )
}

export default Action