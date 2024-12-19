// Desc: This component is used to display multiple cards with action areas.
// It is used in the Labs section to display the projects.
// MUI Card component is used to display the cards.
// If labItem has no liveLink or sourceLink, the button is hidden, but the space is still reserved.

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import labItems from "../../data/labItems";

function MultiActionAreaCard({ section }) {
  const filteredItems = labItems.filter((item) => item.section === section);

  return (
      <>
        <div className="flex flex-wrap gap-8 px-5 justify-center items-center">
          {filteredItems.map((item, index) => (
            <Card key={index} sx={{ maxWidth: 255,
                backgroundColor: "#0b0b0e",
                transition: "box-shadow 0.3s",
                "&:hover": {
                  boxShadow: "0 8px 20px #0a0a0a",
                },}}>
              <CardActionArea component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer">
                <CardMedia component="img"
                  height="140"
                  image={item.imgUrl}
                  alt={item.title}/>
                <CardContent>
                  <Typography gutterBottom
                    variant="body1"
                    component="div"
                    sx={{
                      color: "#eaf6f6", 
                      fontWeight: "bold",
                      "&:hover": {
                        color: "#00bbf0",
                      },}}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",}}>
                    {item.version}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",}}>
                    {item.stack.join(", ")}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <div className="w-full flex justify-evenly">
                {item.liveLink ? (
                  <Button
                    size="small"
                    sx={{
                      color: "#eaf6f6",
                      "&:hover": {
                        color: "#00bbf0",
                      },
                    }}
                    href={item.liveLink}
                    target="_blank">
                    Visit
                  </Button>
                ) : (
                  <Button size="small"
                    sx={{
                      visibility: "hidden", 
                    }}>
                    Visit
                  </Button>
                )}
                {item.sourceLink ? (
                  <Button size="small"
                    sx={{
                      color: "#eaf6f6",
                      "&:hover": {
                        color: "#00bbf0",
                      },
                    }}
                    href={item.sourceLink}
                    target="_blank">
                    Source Code
                  </Button>
                ) : (
                  <Button
                    size="small"
                    sx={{
                      visibility: "hidden", 
                    }}>
                    Source Code
                  </Button>
                )}
              </div>
              </CardActions>
            </Card>
        ))}
      </div>
      </>
  );
}

export default MultiActionAreaCard;
