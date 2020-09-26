import { Button, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import CreateIcon from '@material-ui/icons/Create';
import Hidden from '@material-ui/core/Hidden';
import { useHomeStyles } from '../Pages/Home';

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuItem}>
        <IconButton aria-label="delete" className={classes.logo}>
          <TwitterIcon color="primary" className={classes.logoIcon} />
        </IconButton>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <SearchIcon className={classes.sideMenuItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuItemLabel} variant="h6">
              Поиск
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <NotificationsNoneOutlinedIcon className={classes.sideMenuItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuItemLabel} variant="h6">
              Уведомления
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <EmailOutlinedIcon className={classes.sideMenuItemIcon} />

          <Hidden smDown>
            <Typography className={classes.sideMenuItemLabel} variant="h6">
              Сообщения
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <BookmarkBorderOutlinedIcon className={classes.sideMenuItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuItemLabel} variant="h6">
              Закладки
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <ListAltOutlinedIcon className={classes.sideMenuItemIcon} />

          <Hidden smDown>
            <Typography className={classes.sideMenuItemLabel} variant="h6">
              Список
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <PermIdentityOutlinedIcon className={classes.sideMenuItemIcon} />

          <Hidden smDown>
            <Typography className={classes.sideMenuItemLabel} variant="h6">
              Профиль
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <Button className={classes.sideMenuButton} fullWidth color="primary" variant="contained">
          <Hidden smDown>Твитнуть</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
      </li>
    </ul>
  );
};
