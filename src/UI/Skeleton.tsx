import { Skeleton, Box } from '@mui/material'
import { ISkeletion } from '../models'
import React from 'react'


export const Skeletons = ({number, animation}: ISkeletion) => {
 
        console.log(animation)
    
        const divs = [];
        for (let i = 0; i < number; i++) {
          divs.push(<Skeleton key={i} animation={animation}/>);
        }
        return <Box className='flex flex-col gap-2 h-full items-center '>{divs}</Box>;
      
      

}
