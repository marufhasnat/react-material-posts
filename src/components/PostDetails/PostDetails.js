import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import PostComments from "../PostComments/PostComments";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

const PostDetails = () => {
  const classes = useStyles();
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState([]);
  const [postComments, setPostComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPostDetails(data));

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => setPostComments(data));
  }, []);
  const { id, userId, title, body } = postDetails;
  let image;
  if (id <= 10) {
    image = <img className={classes.img} alt="complex" src={require(`../../images/${id}.jpg`).default} />
  } else {
    image = <img className={classes.img} alt="complex" src={require(`../../images/unknown.jpg`).default} />
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Post Info</h1>
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
                    {body}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ marginTop: "10px", color: "black" }}
                  >
                    UserID: {userId}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Post Details</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <h2 style={{ textAlign: "center", marginTop: "45px" }}>Comments</h2>
      {postComments.map((comment) => (
        <PostComments comment={comment} key={comment.id}></PostComments>
      ))}
    </div>
  );
};

export default PostDetails;
