import React from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 45,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Posts = (props) => {
  const classes = useStyles();
  const { id, userId, title } = props.post;

  let image;
  if (id <= 10) {
    image = <img className={classes.img} alt="complex" src={require(`../../images/${id}.jpg`).default} />
  } else {
    image = <img className={classes.img} alt="complex" src={require(`../../images/unknown.jpg`).default} />
  }

  let history = useHistory();
  const handleInfo = (postId) => {
    history.push(`/post/post-details/${postId}`);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              {
                image
              }
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license {id}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  UserID: {userId}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => handleInfo(id)}
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "10px" }}
                >
                  Read More
                </Button>
                <Button variant="contained" disabled>
                  Remove
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Post</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Posts;
