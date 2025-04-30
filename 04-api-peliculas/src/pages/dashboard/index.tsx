import { useState, useEffect } from "react";
import { IResponseGetMovies } from "./interface";
import movieDb from "../../movieDB";
import { Box, Stack, Typography } from "@mui/material";

export const Dashboard = () => {
  const [list, setList] = useState<IResponseGetMovies>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const getMovies = async () => {
    try {
      const rest = await movieDb
        .get<IResponseGetMovies>("/movie/popular")
        .then((res) => res.data);

      setList(rest);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="start"
      flexWrap={"wrap"}
      gap={2}
      minHeight="100vh"
      p={5}
    >
      {list.results.map((item) => (
        <Stack>
          {item.poster_path !== null && (
            <Box
              component="img"
              src={"https://image.tmdb.org/t/p/original" + item.poster_path}
              width={300}
            />
          )}
          <Typography color="#fff">{item.title}</Typography>
          <Typography color="#fff">{JSON.stringify(item)}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};
