import { Typography, Stack, TextField, SxProps, Theme } from "@mui/material";
/**
 * Typography
 *  p H1 H2 H3 H4 H5 H6
 */
const stylesInput:SxProps<Theme> ={
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
  "& .MuiInputBase-input":{
    color: "#fff",
  }
}
const App= () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#242e34"
    >
      <Stack bgcolor="#0d253f" gap={2} p={5} borderRadius="16px">
        <Typography
          component="h3"
          variant="h1"
          fontWeight={700}
          color="#fff"
          textAlign="center"
        >
          Login
        </Typography>
        <TextField label="Email" variant="outlined" sx={stylesInput} type="email"/>
        <TextField label="Passowrd" variant="outlined" sx={stylesInput} type="password"/>
      </Stack>
    </Stack>
  );
}

export default App;
