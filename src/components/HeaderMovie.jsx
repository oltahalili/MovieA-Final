import { useContext } from "react";
import { MoviesContext } from "../pages/MovieApp";
import { Grid, Input, Link } from "@mui/joy";
import logo from "../assets/logo.svg";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  let arr = ["Popular", "Kids", "Drama", "Horror"];

  const { getMovies, search, setSearch, searchMovies } =
    useContext(MoviesContext);

  return (
    <Grid className="header" container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid
        style={{ alignSelf: "center" }}
        item
        xs={3}
        sm={3}
        md={2}
        lg={1}
        xl={1}
      >
        <RouterLink to="/">
          <img src={logo} alt="Movie App" />
        </RouterLink>
      </Grid>
      <Grid style={{ alignSelf: "center" }} xs={6} sm={6} md={6} lg={6} xl={6}>
        <nav className="navigation">
          {arr.map((value, position) => (
            <Link
              variant="solid"
              key={position}
              name={value}
              onClick={(e) => getMovies(e.target.name)}
              sx={{
                color: "#ffffff",
                background: "#90cea1", // Gradient background blending two colors
                width: "140px", // Width
                height: "20px", // Height
                fontSize: "20px", // Font size
                fontWeight: "bold", // Bold font weight
                fontStyle: "italic", // Italic font style
                textDecoration: "none", // Remove underline
                display: "flex", // Flex display
                justifyContent: "center", // Center content horizontally
                alignItems: "center", // Center content vertically
                transition: "background-color 0.3s", // Smooth color transition on hover
                "&:hover": {
                  color: "#ffffff", // White text color on hover
                },
              }}
            >
              {value}
            </Link>
          ))}
        </nav>
      </Grid>
      <Grid item container xs={12} sm={12} md={4} lg={4} xl={4}>
        <Grid
          style={{ alignSelf: "center" }}
          item
          xs={5}
          sm={5}
          md={5}
          lg={6}
          xl={6}
        >
          <Input
            color="warning"
            size="sm"
            variant="soft"
            placeholder="Search a movie..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={6} sm={7} md={7} lg={6} xl={6}>
          <button onClick={searchMovies}>Search Movie</button>
        </Grid>
      </Grid>
    </Grid>
  );
}
