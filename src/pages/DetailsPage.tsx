import { useContext, useEffect } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import { Link } from '@mui/material'
import { Article } from '../models'


export const DetailsPage = () => {

    const {id} = useParams() 
   const articles = useLoaderData() as Article[]
    const article = articles.find((article:Article) => article.id === Number(id))

  return (
    <div key={article?.id} className="p-4 h-[100vh] bg-gray-800 text-gray-100 overflow-hidden break-words">
        <h1>{article?.headline}</h1>
        <p>{article?.analysis}</p>
        <p>{article?.summary}</p>
        <Link href={article?.link} target='_blank'>{article?.link}</Link>
    </div>
  )
}
