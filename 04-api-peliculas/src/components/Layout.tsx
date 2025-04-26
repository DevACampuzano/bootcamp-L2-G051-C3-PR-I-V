import { Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#242e34"
      component="main"
    >
      {children}
    </Stack>
  );
};
