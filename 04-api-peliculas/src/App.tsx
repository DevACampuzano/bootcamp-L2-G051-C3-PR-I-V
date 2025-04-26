import {
  Typography,
  Stack,
  TextField,
  SxProps,
  Theme,
  Button,
} from "@mui/material";
/**
 * Typography
 *  p H1 H2 H3 H4 H5 H6
 */
const stylesInput: SxProps<Theme> = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#fff",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
};

const App = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Hola mundo");
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#242e34"
      component="main"
    >
      <Stack
        bgcolor="#0d253f"
        gap={2}
        p={5}
        borderRadius="16px"
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography
          component="h3"
          variant="h1"
          fontWeight={700}
          color="#fff"
          textAlign="center"
        >
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          sx={stylesInput}
          type="email"
        />
        <TextField
          label="Passowrd"
          variant="outlined"
          sx={stylesInput}
          type="password"
        />
        <Button variant="contained" type="submit">
          Sing In
        </Button>
      </Stack>
    </Stack>
  );
};

export default App;
