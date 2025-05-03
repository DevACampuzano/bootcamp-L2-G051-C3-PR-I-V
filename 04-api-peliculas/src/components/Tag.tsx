import { Box } from "@mui/material";

type TagProps = {
  name: string;
};

export const Tag = ({ name }: TagProps) => {
  return (
    <Box
      bgcolor={"#0d253f"}
      sx={{
        color: "white",
        p: 1,
        borderRadius: 10,
        fontSize: 20,
      }}
    >
      {name}
    </Box>
  );
};
