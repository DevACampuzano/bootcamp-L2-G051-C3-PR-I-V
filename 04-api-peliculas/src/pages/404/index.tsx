import { Stack, Typography } from "@mui/material";

export const NotFound = () => {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Typography variant="h1" component="h1" color="white" fontWeight={700}>
        Error 404!
      </Typography>
      <Typography variant="h5" component="p" color="white">
        Not Found.
      </Typography>
    </Stack>
  );
};
