import { Box, Button, Stack } from '@mui/material'
import { FC } from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import { Article } from '../models'

export const IndexPage: FC = () => {

 const articles = useLoaderData() as Article[]
    
  return (
    
        <Box className="articles p-4 h-[100%] bg-gray-800 text-gray-100 flex flex-col items-center justify-start">
            {
                articles.map((article:Article) => {
                    return (
                        <Stack key={article.id} className="m-4">
                            <Link className='bg-cyan-900 p-2 rounded-md text-white w-[90vw] hover:bg-cyan-950 hover:text-gray-400' key={article.id} to={`details/${article.id}`}>{article.headline}</Link>
                        </Stack>
                    )
                })
            }
        </Box>
    
  )
}
