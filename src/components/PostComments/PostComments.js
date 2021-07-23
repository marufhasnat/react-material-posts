import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    marginTop: "35px",
    marginBottom: "20px",
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

const PostComments = (props) => {
  const classes = useStyles();
  const { id, name, email, body } = props.comment;
  let image;
  if (id <= 10) {
    image = <img className={classes.img} alt="complex" src={require(`../../images/${id}.jpg`).default} />
  } else {
    image = <img className={classes.img} alt="complex" src={require(`../../images/unknown.jpg`).default} />
  }
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
                <span style={{color: 'black'}}>Email: </span>{email}
                </Typography>
                <Typography variant="body2" gutterBottom>
                <span style={{color: 'black'}}>Topic: </span>{name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <span style={{color: 'black'}}>Comment: </span>{body}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ marginTop: "10px", color: "black" }}
                >
                  {/* UserID: {userId} */}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Post Comments</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default PostComments;
