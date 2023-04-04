import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface FooterProps {
    info: string
}

export const Footer:FC<FooterProps> = ({info}:FooterProps) => {
  return (
    <Box className='p-4 bg-gray-500'>
        <Typography variant="body2" color="text.secondary" align="center">
            {info}
        </Typography>
    </Box>
  )
}
