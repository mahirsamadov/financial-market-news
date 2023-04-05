import { Box, Button, Skeleton, Stack } from "@mui/material";
import { FC } from "react";
import { useLoaderData, Link, useNavigation } from "react-router-dom";
import { uid } from "uid";
import { Article, NewsResponse, SkeletonAnimation } from "../models";
import { Skeletons } from "../UI/Skeleton";

export const IndexPage = () => {
  const newsResponse = useLoaderData() as NewsResponse;
  const navigation = useNavigation();

  if (navigation.state === "loading")
    return (
      <>
        <Skeletons number={100} animation={SkeletonAnimation.Wave} />
      </>
    );

  return !!newsResponse?.articles?.length ? (
    <Box className=" articles p-4 min-h-[100%] bg-gray-800 text-gray-100 grid grid-cols-6">
      {newsResponse.articles.map((article: Article) => {
        return (
          <Stack key={uid()} className="m-4">
            <Link style={{backgroundImage: `url(${article.urlToImage})`}} className="bg-cyan-900 p-2 rounded-md text-white hover:bg-cyan-950 hover:text-gray-400" to={`details/${article.title}`}>
            
              {article.title}
            </Link>
          </Stack>
        );
      })}
    </Box>
  ) : (
    <h1>Error</h1>
  );
};
