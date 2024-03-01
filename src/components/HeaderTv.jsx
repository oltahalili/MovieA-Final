import { useContext } from "react";
import { TvShowContext } from "../pages/TvApp";
import { Grid, Input, Link, Button } from "@mui/joy";
import logo from "../assets/logo.svg"; // Import your image here
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  let arr = ["Popular", "Kids", "Reality", "Crime"];

  const { getTvShows, search, setSearch, searchTvShow } =
    useContext(TvShowContext);

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
          <img src={logo} alt="TV Show App" />
        </RouterLink>
      </Grid>
      <Grid
        style={{ alignSelf: "center" }}
        item
        xs={6}
        sm={6}
        md={6}
        lg={6}
        xl={6}
      >
        <nav className="navigation">
          {arr.map((value, position) => (
            <Link
              color="success"
              variant="solid"
              key={position}
              name={value}
              onClick={(e) => getTvShows(e.target.name)}
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
            color="success"
            size="sm"
            variant="soft"
            placeholder="Search a TV show..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={6} sm={7} md={7} lg={6} xl={6}>
          <Button
            onClick={searchTvShow}
            style={{
              background: "linear-gradient(45deg, #212121, #363636)",
              boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.2)",
              borderRadius: "25px",
              width: "150px",
              height: "40px", // Adjusted height
              fontSize: "18px", // Adjusted font size
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#ffffff",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s, color 0.3s",
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
