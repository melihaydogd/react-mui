import { styled, Button, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {
  const BlueButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} variant="contained" color="secondary">
        Settings
      </Button>
      <Button startIcon={<Add />} variant="contained" color="success">
        Add New
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" component="p">
        It uses h1 style but it is a p tag.
      </Typography>
      <BlueButton variant="contained">My Unique Button</BlueButton>
      <BlueButton variant="contained">My Button</BlueButton>{" "}
    </div>
  );
}

export default App;
