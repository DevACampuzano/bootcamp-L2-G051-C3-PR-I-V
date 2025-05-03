/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import movieDb from "../../movieDB";
import { useParams } from "react-router-dom";
import { IGetCastDetails, IGetDetailsMovies } from "./interface";
import { Box, CardActionArea, Stack, Typography } from "@mui/material";
import { Tag } from "../../components";

type StateProps = {
  details?: IGetDetailsMovies;
  casting?: IGetCastDetails;
};

export const MoviesDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState<StateProps>({
    details: undefined,
    casting: undefined,
  });
  const getDetails = async () => {
    // se obtiene la información detallada de la película

    // https://api.themoviedb.org/3/movie/950387
    const resp = await movieDb
      .get<IGetDetailsMovies>("/movie/" + id)
      .then((resp) => resp.data);

    // Se obtiene la información del casting
    //https://api.themoviedb.org/3/movie/950387/credits
    const respCast = await movieDb
      .get<IGetCastDetails>("/movie/" + id + "/credits")
      .then((resp) => resp.data);

    // guarda la información en el estado
    setState({
      details: resp,
      casting: respCast,
    });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="start"
      minHeight={"100vh"}
      py={5}
      boxSizing="border-box"
    >
      <Stack direction="row" gap={2} p={5}>
        <Stack justifyContent="center" alignItems="center" id="title-photo">
          <Typography color="white" variant="h1" fontWeight={700}>
            {state.details?.title}
          </Typography>
          <Stack>
            <CardActionArea
              onClick={() => {
                if (!state.details?.homepage) return;
                window.open(state.details?.homepage, "_blank");
              }}
              sx={{
                maxWidth: 500,
              }}
            >
              <Box
                component="img"
                src={
                  "https://image.tmdb.org/t/p/original" +
                  state.details?.poster_path
                }
                width={500}
                borderRadius={14}
              />
            </CardActionArea>
          </Stack>
        </Stack>

        <Stack width="100%" gap={2} p={2} boxSizing="border-box" id="details">
          <Typography color="white" variant="h4" fontWeight={700}>
            Generos:
          </Typography>
          <Stack direction="row" gap={2}>
            {state.details?.genres.map((item) => (
              <Tag key={item.id} name={item.name} />
            ))}
          </Stack>
          <Typography color="white" variant="h4" fontWeight={700}>
            Descripción:
          </Typography>
          <Typography
            color="white"
            variant="body1"
            component="p"
            textAlign="justify"
          >
            <Typography fontWeight={700}>
              Presupuesto: ${state.details?.budget}
            </Typography>
            <br />
            <Typography fontWeight={700}>
              Popularidad: {state.details?.popularity}
            </Typography>
            <br />
            {state.details?.overview}
          </Typography>
          <Stack
            p={2}
            width={"100%"}
            boxSizing="border-box"
            color={"white"}
            gap={2}
            id="casting"
          >
            <Typography color="white" variant="h4" fontWeight={700}>
              Casting:
            </Typography>

            <Stack direction="row" gap={2}>
              {state.casting?.cast.slice(0, 5).map((item) => (
                <Cast
                  key={item.id}
                  character={item.character}
                  name={item.name}
                  profile_path={item.profile_path}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

type CastProps = {
  character?: string;
  name: string;
  profile_path: string | null;
};

const Cast = ({ character, name, profile_path }: CastProps) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems="center"
      gap={1}
      bgcolor={"#0d253f"}
      padding={2}
      borderRadius={5}
      maxWidth={200}
    >
      <Typography variant="h5" fontWeight={700}>
        {character} - {name}
      </Typography>
      <Box
        component="img"
        src={"https://image.tmdb.org/t/p/original" + profile_path}
        width={"100%"}
        borderRadius={2}
      />
    </Stack>
  );
};
