import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ChatBubbleOutline';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import { FormControl } from '@material-ui/core';
import { ModalDialog } from '../components/ModalBlock';

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: 'calc(100vh - 80px)',
  },
  blueSide: {
    backgroundColor: 'rgb(113 201 248)',
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  blueSideBigIcon: {
    color: 'rgb(29 161 242)',
    position: 'absolute',
    left: '70%',
    top: '50%',
    width: '200%',
    height: '200%',
    transform: 'translate(-50%, -50%)',
  },
  loginSide: {
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  loginSideIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 800,
    fontSize: 32,
    marginBottom: 45,
    marginTop: 20,
  },
  loginSideMargin: {
    marginTop: 20,
  },
  loginSideField: {
    marginBottom: 18,
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
}));

export const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStylesSignIn();
  const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal('signIn');
  };
  const handleClickOpenSignUp = (): void => {
    setVisibleModal('signUp');
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };
  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Читайте о том что вам интересно
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleOutlineIcon className={classes.blueSideListInfoIcon} />
              Узнайте о том что говорят в мире
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSideListInfoIcon} />
              Присоединяйтесь к общению
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color="primary" className={classes.loginSideIcon} />
          <Typography className={classes.loginSideTitle} variant="h4">
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <Button
            onClick={handleClickOpenSignUp}
            className={classes.loginSideMargin}
            variant="contained"
            color="primary"
            fullWidth>
            Зарегестрироваться
          </Button>
          <Button
            onClick={handleClickOpenSignIn}
            className={classes.loginSideMargin}
            variant="outlined"
            color="primary"
            fullWidth>
            Войти
          </Button>
          <ModalDialog
            open={visibleModal === 'signIn'}
            onClose={handleCloseModal}
            classes={classes}
            title="Войти в аккаунт">
            <FormControl margin="dense" component="fieldset" fullWidth>
              <FormGroup aria-aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  margin="dense"
                  variant="filled"
                  id="name"
                  label="E-mail или номер телефона"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  margin="dense"
                  variant="filled"
                  id="password"
                  label="Пароль"
                  type="password"
                  fullWidth
                />
                <Button variant="contained" color="primary" fullWidth>
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </ModalDialog>
          <ModalDialog
            open={visibleModal === 'signUp'}
            onClose={handleCloseModal}
            classes={classes}
            title="Создайте учетную запись">
            <FormControl margin="dense" component="fieldset" fullWidth>
              <FormGroup aria-aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  margin="dense"
                  variant="filled"
                  id="name"
                  label="Имя"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  margin="dense"
                  variant="filled"
                  id="e-mail"
                  label="E-mail"
                  type="e-mail"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  margin="dense"
                  variant="filled"
                  id="password"
                  label="Пароль"
                  type="password"
                  fullWidth
                />
                <Button variant="contained" color="primary" fullWidth>
                  Далее
                </Button>
              </FormGroup>
            </FormControl>
          </ModalDialog>
        </div>
      </section>
    </div>
  );
};
