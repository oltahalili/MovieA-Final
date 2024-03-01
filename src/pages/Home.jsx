import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";

function Home() {
  const [showText, setShowText] = useState(false);

  const handleShowText = () => {
    setShowText(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "1em" }}>
      <h1 style={{ color: "#ffffff" }}>Choose</h1>
      <div style={{ marginBottom: "1em" }}>
        <Link to="/movie" style={{ textDecoration: "none", margin: "0.5em" }}>
          <Button
            variant="contained"
            style={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              color: "#ffffff",
              borderRadius: "15px",
              padding: "40px 60px",
            }}
          >
            MOVIE
          </Button>
        </Link>

        <Link to="/tv" style={{ textDecoration: "none", margin: "0.5em" }}>
          <Button
            variant="contained"
            style={{
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              color: "#ffffff",
              borderRadius: "15px",
              padding: "40px 60px",
            }}
          >
            TV SHOW
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
