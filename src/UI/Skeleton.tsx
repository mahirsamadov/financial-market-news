import { Skeleton } from '@mui/material'
import { ISkeletion } from '../models'
import React from 'react'


export const Skeletons = ({number, animation}: ISkeletion) => {
 
        console.log(animation)
    
        const divs = [];
        for (let i = 0; i < number; i++) {
          divs.push(<Skeleton key={i} animation={'wave'}/>);
        }
        return <>{divs}</>;
      
      

}
