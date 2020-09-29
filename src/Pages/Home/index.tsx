import {
  Container,
  Grid,
  InputAdornment,
  TextField,
  Paper,
  Theme,
  Typography,
  withStyles,
} from '@material-ui/core';
import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { AddTweetForm } from '../../components/AddTweetForm';
import { useHomeStyles } from './theme';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadingTweets, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';

const SearchTextField = withStyles((theme: Theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      padding: 0,
      paddingLeft: 15,
      '&.Mui-focused': {
        backgroundColor: '#fff',
        '& fieldset': {
          borderWidth: 1,
          borderColor: theme.palette.grey[500],
        },
        '& svg path': {
          fill: theme.palette.primary.main,
        },
      },
      '&:hover': {
        '& fieldset': { borderColor: 'transparent' },
      },
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 1,
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px 14px 5px',
    },
  },
}))(TextField);

export const Home = (): React.ReactElement => {
  const dispatch = useDispatch();
  const classes = useHomeStyles();

  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsLoadingTweets);

  React.useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item sm={1} md={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper className={classes.twittsWrapper} variant="outlined">
            <Paper className={classes.twittsWrapperHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Paper>
              <div className={classes.mainAddForm}>
                <AddTweetForm classes={classes} />
              </div>
              <div className={classes.addFormBottomLine} />
            </Paper>
            {isLoading ? (
              <div className={classes.tweetsCentered}>
                <CircularProgress />
              </div>
            ) : (
              tweets.map((tweet) => (
                <Tweet key={tweet._id} text={tweet.text} classes={classes} user={tweet.user} />
              ))
            )}
          </Paper>
        </Grid>
        <Grid item sm={3} md={3}>
          <div className={classes.rightSide}>
            <SearchTextField
              inputProps={{
                startadorment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              placeholder="поиск по Твиттеру"
              fullWidth
            />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeade}>
                <b>Актуальные темы</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Киров"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: 2561
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Какой то текст"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: 125 212
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Какой то другой текст"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: 321 531
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeade}>
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="asdasd"
                      src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="USER"
                    secondary={
                      <Typography component="span" variant="body2">
                        @name User
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
