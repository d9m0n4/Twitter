import {
  Container,
  createStyles,
  Grid,
  InputBase,
  makeStyles,
  IconButton,
  InputAdornment,
  TextField,
  Paper,
  Theme,
  Typography,
  withStyles,
} from '@material-ui/core';
import React from 'react';
import classnames from 'classnames';

import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { grey } from '@material-ui/core/colors';
import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { AddTweetForm } from '../components/AddTweetForm';

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: '100vh',
  },
  logo: {
    margin: '10px 0',
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    position: 'sticky',
    top: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: 230,
  },
  sideMenuItem: {
    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 25px 0 20px',
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      cursor: 'pointer',
      transition: 'background-color 0.1s ease-in-out',
      '&:hover': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        '& h6': {
          color: theme.palette.primary.main,
        },
        '& svg path': {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  sideMenuItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuItemIcon: {
    fontSize: 28,
  },
  sideMenuButton: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  twittsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  twitt: {
    cursor: 'pointer',
    paddingTop: 15,
    paddingLeft: 20,
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)',
    },
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  twittsWrapperHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: '10px 15px',
    '& h6': {
      fontWeight: 700,
    },
  },
  twittsUserName: {
    color: grey[500],
  },
  twittsButtons: {
    display: 'flex',
    position: 'relative',
    left: -10,
    justifyContent: 'space-between',
    width: 450,
  },
  rightSide: {
    paddingTop: 20,
    position: 'sticky',
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightSideBlockHeade: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      fontWeight: 700,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: 'flex',
    width: '100%',
  },
  addFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addFormBottomAction: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextArea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: '#E6ECF0',
  },
  addFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    },
  },
  tweetFooter: {
    display: 'flex',
  },
  addFormBottomRight: {
    display: 'flex',
    alignItems: 'center',
  },
}));

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
  const classes = useHomeStyles();
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
              <AddTweetForm classes={classes} />
              <div className={classes.addFormBottomLine} />
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                  text="Если вы не против рекламы, связанной с технологиями, и хотите 
              поддерживать Open Source, добавьте Material-UI в белый список 
              своего блокиратора рекламы.
                                Спасибо! ❤️"
                  classes={classes}
                  user={{
                    fullname: 'My Name',
                    username: 'Name',
                    avatarUrl:
                      'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80',
                  }}
                />,
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item sm={3} md={3}>
          <div className={classes.rightSide}>
            <SearchTextField
              inputProps={{
                startAdorment: (
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
