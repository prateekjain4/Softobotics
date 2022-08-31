import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import FormDialog from "./dialog";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MovieCard({ data }) {
  const classes = useStyles();
  console.log(data);
  const [dialog, setdialog] = useState(false);

  return (
    <Box>
      {dialog
        ? <FormDialog />
        : data.map((e, index) => {
            return (
              <Card
                className={classes.root}
                key={index}
                onClick={() => setdialog(true)}
              >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={e.Poster}
                    title={e.Title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {e.Title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {e.Plot}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions />
              </Card>
            );
          })}
    </Box>
  );
}
