import { useContext, useEffect } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import { Box, Link, Typography } from '@mui/material'
import { Article, NewsResponse } from '../models'
import { uid } from 'uid'


export const DetailsPage = () => {

    const {id} = useParams() 
   const articles = useLoaderData() as Article[]
   
    const article = articles.find((article:Article) => article.title === id)

  return (
    !!article ?
     <Box key={uid()} className="p-4 min-h-[100vh] bg-gray-800 text-gray-100 break-words">
        <Typography variant='h3' className='p-4' component='div'>{article?.title}</Typography>
        <img src={article?.urlToImage} alt={article?.title} className='w-[100%] h-[50vh] object-cover'/>
        <Typography variant='h4' className='p-4'>{article?.description}</Typography>
        <Typography className='p-4' fontSize='1.2rem'style={{fontWeight: 200}} component='p'>{article?.content}</Typography>
    </Box> : <Typography>Error</Typography>
  )
}
