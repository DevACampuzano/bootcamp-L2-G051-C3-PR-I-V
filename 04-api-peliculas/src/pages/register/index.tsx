import {
  // Typography,
  Stack,
  //   TextField,
  //   SxProps,
  //   Theme,
  //   Button,
  //   Box,
} from "@mui/material";
// import logo from "../../assets/logo.svg";
// import { useState } from "react";
/**
 * Typography
 *  p H1 H2 H3 H4 H5 H6
 */
// const stylesInput: SxProps<Theme> = {
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "#fff",
//     },
//     "&:hover fieldset": {
//       borderColor: "#fff",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#fff",
//     },
//   },
//   "& .MuiInputLabel-root": {
//     color: "#fff",
//   },
//   "& .MuiInputLabel-root.Mui-focused": {
//     color: "#fff",
//   },
//   "& .MuiInputBase-input": {
//     color: "#fff",
//   },
// };

export const Register = () => {
  //   const [formData, setFormData] = useState({
  //     email: "andres@test.co",
  //     password: "",
  //   });
  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     // const formData = new FormData(e.currentTarget);
  //     alert("test");
  //   };

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { value, name } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#242e34"
      component="main"
    ></Stack>
  );
};
