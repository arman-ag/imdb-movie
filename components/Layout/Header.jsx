import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Autocomplete,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { ProjectsJob } from "../../pages/api/api";
import useStyles from "./LayoutStyle";
const Header = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [result, setResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  React.useEffect(() => {
    ProjectsJob(searchQuery)
      .then((res) => setResult(res.data.results))
      .catch((err) => console.log(err));
  }, [searchQuery]);
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
  ];
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#4b6584" }}>
        <Toolbar>
          <Box className={classes.imdbBox}>
            <Typography variant="h5" className={classes.heading}>
              IMDb
            </Typography>
          </Box>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={8}>
              <Paper>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      placeholder="search..."
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Paper>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
