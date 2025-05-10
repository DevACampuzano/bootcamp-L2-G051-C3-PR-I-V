import {
  // Typography,
  Stack,
  TextField,
  SxProps,
  Theme,
  Button,
  Box,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useState, useEffect } from "react";
import axios from "axios";
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

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "andres@test.co",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    //navigate("/dashboard");

    try {
      const res = await axios.post("http://localhost:3000/");
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (userJson !== null) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <Stack
      bgcolor="#0d253f"
      gap={2}
      p={5}
      borderRadius="16px"
      component="form"
      onSubmit={handleSubmit}
    >
      <Box component="img" src={logo} alt="Logo" />
      <TextField
        label="Email"
        variant="outlined"
        sx={stylesInput}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        label="Password"
        variant="outlined"
        sx={stylesInput}
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Link component={RouterLink} to="/register" color="#fff">
        Registro
      </Link>
      <Button variant="contained" type="submit">
        Sing In
      </Button>
    </Stack>
  );
};
