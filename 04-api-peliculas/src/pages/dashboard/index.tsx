import { useState, useEffect } from "react";
import { IResponseGetMovies } from "./interface";
import movieDb from "../../movieDB";
import { Box, CardActionArea, Stack, Typography } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Link } from "react-router-dom";

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
      justifyContent={{
        sm: "space-between",
        xs: "center",
      }}
      alignItems={{
        sm: "start",
        xs: "center",
      }}
      flexWrap={"wrap"}
      gap={2}
      minHeight="100vh"
      p={5}
    >
      {list.results.map((item) => (
        <Stack
          key={item.id}
          bgcolor="#0d253f"
          borderRadius={"16px"}
          boxSizing="border-box"
          component={Link}
          sx={{
            textDecoration: "none",
          }}
          to={`/movies-detail/${item.id}`}
        >
          <CardActionArea>
            <Box
              component="img"
              src={"https://image.tmdb.org/t/p/original" + item.poster_path}
              width={300}
              boxSizing="border-box"
              sx={{ borderRadius: "16px 16px 0 0" }}
            />
            {/* overview,release_date, vote_average */}
            <Stack p={2} width={300} boxSizing="border-box">
              <Typography
                color="#fff"
                variant="h5"
                component="h5"
                fontWeight={700}
              >
                {item.title}
              </Typography>
              <Typography color="#fff">
                {item.release_date.toString()} -{" "}
                {item.vote_average.toString().slice(0, 3)}
                <StarBorderOutlinedIcon />
              </Typography>

              <Typography color="#fff" fontSize={14} mt={1}>
                {item.overview.slice(0, 100)}{" "}
                {item.overview.length > 100 ? "..." : ""}
              </Typography>
            </Stack>
          </CardActionArea>
        </Stack>
      ))}
    </Stack>
  );
};
