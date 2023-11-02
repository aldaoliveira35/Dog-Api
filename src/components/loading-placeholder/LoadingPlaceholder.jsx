import { Box, Typography, CircularProgress } from "@mui/material";

export function LoadingPlaceholder() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress sx={{ marginBottom: 2 }} />
      <Typography variant="h5">Loading Puppies</Typography>
    </Box>
  );
}
