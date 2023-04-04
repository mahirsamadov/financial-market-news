import React, { FC } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

interface NavbarProps {
    name: string,
    links: string[]
}

export const Navbar: FC<NavbarProps> = ({name, links}: NavbarProps) => {
  return (
    <AppBar position="static">
    <Toolbar className='bg-cyan-700 w-full' variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" component="div">
        {name}
      </Typography>
    </Toolbar>
  </AppBar>
  )
}
