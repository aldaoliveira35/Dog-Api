import { Box, Typography, CircularProgress } from "@mui/material";

export function LoadingPlaceholder() {
  return (
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress sx={{ marginBottom: 2, color: "primary" }} />
      <Typography variant="h5">Loading Puppies</Typography>
    </Box>
  );
}
