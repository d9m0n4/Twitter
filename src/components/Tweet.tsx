import React from 'react';
import { useHomeStyles } from '../Pages/Home/theme';
import CommentsIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import classNames from 'classnames';
import { Avatar, IconButton, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface TweetProps {
  _id: string;
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  text,
  user,
  classes,
  _id,
}: TweetProps): React.ReactElement => {
  return (
    <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
      <Paper className={classNames(classes.twittsWrapperHeader, classes.twitt)} variant="outlined">
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: 20 }}>
            <Avatar
              className={classes.tweetAvatar}
              alt={`Аватар пользователя ${user.fullname}`}
              src={user.avatarUrl}
            />
          </div>

          <div>
            <Typography>
              <b>{user.username}</b>&nbsp;
              <span className={classes.twittsUserName}>@{user.fullname}</span>&nbsp;
              <span className={classes.twittsUserName}>.</span>&nbsp;
              <span className={classes.twittsUserName}>1ч</span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {text}
            </Typography>
          </div>
        </div>
        <div className={classes.twittsButtons}>
          <div>
            <IconButton color="primary">
              <CommentsIcon />
            </IconButton>
            <span>1</span>
          </div>
          <div>
            <IconButton color="primary">
              <RepeatIcon />
            </IconButton>
          </div>
          <div>
            <IconButton color="primary">
              <LikeIcon />
            </IconButton>
          </div>
          <div>
            <IconButton color="primary">
              <ReplyIcon />
            </IconButton>
          </div>
        </div>
      </Paper>
    </Link>
  );
};
