import { useEffect, useState } from "react";
import movieDb from "../../movieDB";
import { useParams } from "react-router-dom";
import { IGetCastDetails, IGetDetailsMovies } from "./interface";
import { Box, Stack } from "@mui/material";

type StateProps = {
  details?: IGetDetailsMovies;
  cast?: IGetCastDetails;
};

export const MoviesDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState<StateProps>({
    details: undefined,
    cast: undefined,
  });
  const getDetails = async () => {
    const resp = await movieDb
      .get<IGetDetailsMovies>("/movie/" + id)
      .then((resp) => resp.data);
    const respCast = await movieDb
      .get<IGetCastDetails>("/movie/" + id + "/credits")
      .then((resp) => resp.data);

    setState({
      details: resp,
      cast: respCast,
    });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <Stack>
      {JSON.stringify(state.details)}
      <Box
        component="img"
        src={"https://image.tmdb.org/t/p/original" + state.details?.poster_path}
        width={500}
      />
      <br />
      <br />
      {JSON.stringify(state.cast?.cast.slice(0, 5))}
    </Stack>
  );
};
