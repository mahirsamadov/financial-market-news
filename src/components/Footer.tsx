import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface FooterProps {
    info: string
}

export const Footer:FC<FooterProps> = ({info}:FooterProps) => {
  return (
    <Box className='p-4 bg-cyan-900 '>
        <Typography className='text-gray-400' variant="body2" align="center">
            {info}
        </Typography>
    </Box>
  )
}
