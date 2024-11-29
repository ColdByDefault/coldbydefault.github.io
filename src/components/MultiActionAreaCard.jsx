import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import labItems from "../data/labItems";

function MultiActionAreaCard({ section }) {
  const filteredItems = labItems.filter((item) => item.section === section);

  return (
      <>
        <div className="grid grid-cols-1 gap-3 items-center justify-center lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <Card key={index} sx={{ maxWidth: 255,
                backgroundColor: "#0b0b0e", 
                transition: "box-shadow 0.3s",
                "&:hover": {
                  boxShadow: "0 8px 20px #3c4245",
                },
              }}>
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
                      },
                    }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                    }}>
                    {item.stack.join(", ")}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <div className="w-full flex justify-evenly">
                  <Button
                    size="small"
                    sx={{
                      color: "#eaf6f6", 
                      "&:hover": {
                        color: "#00bbf0",
                      },
                    }}
                    href={item.link}
                    target="_blank">
                    Visit
                  </Button>
                  <Button
                    size="small"
                    sx={{
                      color: "#eaf6f6", 
                      "&:hover": {
                        color: "#00bbf0",
                      },
                    }}
                    href={item.link2}
                    target="_blank">
                    Source Code
                  </Button>
                </div>
              </CardActions>
            </Card>
        ))}
      </div>
      </>
  );
}

export default MultiActionAreaCard;
